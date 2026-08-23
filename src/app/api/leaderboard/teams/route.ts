import { NextResponse } from "next/server";
import { PROXY_API_URL, EVENT_ID, getTeamIcon, resolveUsernames } from "@/lib/api";

/**
 * GET /api/leaderboard/teams
 *
 * Fetches team data from EventCore-Proxy and transforms it into the shape
 * expected by the frontend `Team[]` interface.
 *
 * Proxy endpoints used:
 *   GET /api/teams/{eventId}   → team names, colors, scores, playerCount
 *   GET /api/event/{eventId}   → full event export with player rosters
 *
 * The proxy returns players as bare UUID strings. We resolve UUIDs → Minecraft
 * usernames via Mojang's session server so the frontend can display real names
 * and real player heads.
 */
export async function GET() {
  try {
    // Fetch teams and full event data in parallel
    const [teamsRes, eventRes] = await Promise.all([
      fetch(`${PROXY_API_URL}/api/teams/${EVENT_ID}`, { next: { revalidate: 10 } }),
      fetch(`${PROXY_API_URL}/api/event/${EVENT_ID}`, { next: { revalidate: 10 } }),
    ]);

    if (!teamsRes.ok) {
      return NextResponse.json(
        { data: [], success: false, message: `Proxy returned ${teamsRes.status}` },
        { status: teamsRes.status },
      );
    }

    const teamsJson = await teamsRes.json();
    const eventJson = eventRes.ok ? await eventRes.json() : null;

    // The proxy returns players as bare UUID strings, e.g.:
    //   "players": ["99bb8bf5-be28-409b-9514-768bff6164cf"]
    // Build a lookup: team name → UUID[]
    const rosterByTeam: Record<string, string[]> = {};
    if (eventJson?.teams) {
      for (const t of eventJson.teams) {
        // players may be UUID strings or legacy {uuid, name} objects — handle both
        rosterByTeam[t.name] = (t.players ?? []).map((p: string | { uuid: string }) =>
          typeof p === "string" ? p : p.uuid,
        );
      }
    }

    // Collect all unique UUIDs across all teams and resolve them to usernames
    const allUuids = [...new Set(Object.values(rosterByTeam).flat())];
    const nameByUuid = await resolveUsernames(allUuids);

    // Transform proxy teams → frontend Team[]
    interface ProxyTeam {
      name: string;
      color: string;
      score: number;
      playerCount: number;
    }

    const teams = (teamsJson.teams as ProxyTeam[])
      .map((t: ProxyTeam) => {
        const roster = rosterByTeam[t.name] ?? [];
        return {
          rank: 0, // assigned after sort
          name: t.name,
          score: t.score ?? 0,
          color: t.color ?? "#666666",
          icon: getTeamIcon(t.name),
          players: roster.map((uuid: string) => ({
            // Resolved username for display; falls back to short UUID
            name: nameByUuid[uuid] ?? uuid.substring(0, 8),
            // mc-heads.net accepts UUIDs directly for the head image
            avatar: nameByUuid[uuid] ?? uuid,
          })),
        };
      })
      // Sort descending by score
      .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
      .map((t: { rank: number }, idx: number) => {
        t.rank = idx + 1;
        return t;
      });

    return NextResponse.json({ data: teams, success: true });
  } catch (err) {
    console.error("[/api/leaderboard/teams] Proxy fetch failed:", err);
    return NextResponse.json(
      { data: [], success: false, message: "Failed to reach event server" },
      { status: 502 },
    );
  }
}
