import { NextResponse } from "next/server";
import { PROXY_API_URL, EVENT_ID, getTeamIcon, getAvatarUrl } from "@/lib/api";

/**
 * GET /api/leaderboard/teams
 *
 * Fetches team data from EventCore-Proxy and transforms it into the shape
 * expected by the frontend `Team[]` interface.
 *
 * Proxy endpoints used:
 *   GET /api/teams/{eventId}   → team names, colors, scores, playerCount
 *   GET /api/event/{eventId}   → full event export with player rosters
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

    // Build a lookup from team name → player list from the full event export.
    // The event export shape: { teams: [{ name, color, players: [{ uuid, name }] }] }
    const rosterByTeam: Record<string, { uuid: string; name: string }[]> = {};
    if (eventJson?.teams) {
      for (const t of eventJson.teams) {
        rosterByTeam[t.name] = t.players ?? [];
      }
    }

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
          players: roster.map((p: { uuid: string; name: string }) => ({
            name: p.name,
            avatar: p.name, // MinecraftHead component uses this as the username
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
