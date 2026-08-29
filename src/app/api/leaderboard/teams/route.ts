import { NextRequest, NextResponse } from "next/server";
import { PROXY_API_URL, EVENT_ID, getTeamIcon, resolveUsernames } from "@/lib/api";

/**
 * GET /api/leaderboard/teams?game=flight_school
 *
 * Fetches team data from EventCore-Proxy and transforms it into the shape
 * expected by the frontend `Team[]` interface.
 *
 * If a `game` query parameter is provided, returns per-game team scores
 * from the event export's game history. Otherwise returns cumulative scores.
 */
export async function GET(request: NextRequest) {
  const gameId = request.nextUrl.searchParams.get("game");

  try {
    // Fetch teams, event, and scores data in parallel
    const [teamsRes, eventRes, scoresRes] = await Promise.all([
      fetch(`${PROXY_API_URL}/api/teams/${EVENT_ID}`, { next: { revalidate: 10 } }),
      fetch(`${PROXY_API_URL}/api/event/${EVENT_ID}`, { next: { revalidate: 10 } }),
      fetch(`${PROXY_API_URL}/api/scores/${EVENT_ID}`, { next: { revalidate: 10 } }),
    ]);

    if (!teamsRes.ok) {
      return NextResponse.json(
        { data: [], success: false, message: `Proxy returned ${teamsRes.status}` },
        { status: teamsRes.status },
      );
    }

    const teamsJson = await teamsRes.json();
    const eventJson = eventRes.ok ? await eventRes.json() : null;
    const scoresJson = scoresRes.ok ? await scoresRes.json() : null;

    // Build team roster lookup: team name → UUID[]
    const rosterByTeam: Record<string, string[]> = {};
    if (eventJson?.teams) {
      for (const t of eventJson.teams) {
        rosterByTeam[t.name] = (t.players ?? []).map((p: string | { uuid: string }) =>
          typeof p === "string" ? p : p.uuid,
        );
      }
    }

    // Check for per-game team scores from the proxy
    let teamScoresMap: Record<string, number> | null = null;
    if (gameId && scoresJson?.perGameTeamScores?.[gameId]) {
      teamScoresMap = scoresJson.perGameTeamScores[gameId];
    }
    
    // If a specific game was requested but hasn't been played, show empty (not cumulative).
    // Only fall back to cumulative when no game filter is specified (i.e. "overall").
    const resolvedTeamScores = gameId
      ? (teamScoresMap ?? {})
      : (scoresJson?.teamScores ?? {});

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
        // Use resolved score if available, otherwise 0
        const score = resolvedTeamScores[t.name] ?? (t.score ?? 0);
        return {
          rank: 0,
          name: t.name,
          score,
          color: t.color ?? "#666666",
          icon: getTeamIcon(t.name),
          players: roster.map((uuid: string) => ({
            name: nameByUuid[uuid] ?? uuid.substring(0, 8),
            avatar: nameByUuid[uuid] ?? uuid,
          })),
        };
      })
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
