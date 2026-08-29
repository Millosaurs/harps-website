import { NextRequest, NextResponse } from "next/server";
import { PROXY_API_URL, EVENT_ID, resolveUsernames } from "@/lib/api";

/**
 * GET /api/leaderboard/individuals?game=flight_school
 *
 * Fetches individual player scores from EventCore-Proxy and transforms them
 * into the shape expected by the frontend `Individual[]` interface.
 *
 * If a `game` query parameter is provided, returns per-game individual scores
 * from the event export's game history. Otherwise returns cumulative scores.
 */
export async function GET(request: NextRequest) {
  const gameId = request.nextUrl.searchParams.get("game");

  try {
    // Fetch scores and full event data in parallel
    const [scoresRes, eventRes] = await Promise.all([
      fetch(`${PROXY_API_URL}/api/scores/${EVENT_ID}`, { next: { revalidate: 10 } }),
      fetch(`${PROXY_API_URL}/api/event/${EVENT_ID}`, { next: { revalidate: 10 } }),
    ]);

    if (!scoresRes.ok) {
      return NextResponse.json(
        { data: [], success: false, message: `Proxy returned ${scoresRes.status}` },
        { status: scoresRes.status },
      );
    }

    const scoresJson = await scoresRes.json();
    const eventJson = eventRes.ok ? await eventRes.json() : null;

    // Build UUID → team name lookup from the event export
    const teamByUuid: Record<string, string> = {};
    if (eventJson?.teams) {
      for (const team of eventJson.teams) {
        for (const player of team.players ?? []) {
          const uuid = typeof player === "string" ? player : player.uuid;
          teamByUuid[uuid] = team.name;
        }
      }
    }

    // Check for per-game player scores from the proxy
    let playerScores: Record<string, number> | null = null;
    if (gameId) {
      // If this is the currently active game, use live scores
      if (scoresJson.currentGameId === gameId && scoresJson.currentGamePlayerScores) {
        playerScores = scoresJson.currentGamePlayerScores;
      }
      // Otherwise check completed per-game scores
      else if (scoresJson.perGamePlayerScores?.[gameId]) {
        playerScores = scoresJson.perGamePlayerScores[gameId];
      }
    }
    
    // If a specific game was requested but hasn't been played, show empty (not cumulative).
    // Only fall back to cumulative when no game filter is specified (i.e. "overall").
    const resolvedScores: Record<string, number> = gameId
      ? (playerScores ?? {})
      : (scoresJson.playerScores ?? {});

    // Combine players who have scores + all players in teams (so we show 0-score players)
    const allUuids = [...new Set([
      ...Object.keys(resolvedScores),
      ...Object.keys(teamByUuid),
    ])];

    // If no players exist at all, return empty
    if (allUuids.length === 0) {
      return NextResponse.json({ data: [], success: true });
    }

    // Resolve all UUIDs → Minecraft usernames via Mojang
    const nameByUuid = await resolveUsernames(allUuids);

    // Transform playerScores map → frontend Individual[]
    const individuals = allUuids
      .map((uuid) => {
        const username = nameByUuid[uuid] ?? uuid.substring(0, 8);
        return {
          rank: 0,
          name: username,
          avatar: nameByUuid[uuid] ?? uuid,
          score: resolvedScores[uuid] ?? 0,
          uuid, // passed to frontend for WS score matching
          team: teamByUuid[uuid] ?? null,
        };
      })
      .sort((a, b) => b.score - a.score)
      .map((p, idx) => {
        p.rank = idx + 1;
        return p;
      });

    return NextResponse.json({ data: individuals, success: true });
  } catch (err) {
    console.error("[/api/leaderboard/individuals] Proxy fetch failed:", err);
    return NextResponse.json(
      { data: [], success: false, message: "Failed to reach event server" },
      { status: 502 },
    );
  }
}
