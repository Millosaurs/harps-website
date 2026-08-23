import { NextResponse } from "next/server";
import { PROXY_API_URL, EVENT_ID, resolveUsernames } from "@/lib/api";

/**
 * GET /api/leaderboard/individuals
 *
 * Fetches individual player scores from EventCore-Proxy and transforms them
 * into the shape expected by the frontend `Individual[]` interface.
 *
 * Proxy endpoints used:
 *   GET /api/scores/{eventId}  → playerScores (UUID → points)
 *   GET /api/event/{eventId}   → player UUID lists per team (for team colour)
 *
 * UUIDs are resolved to Minecraft usernames via Mojang's session server so
 * the frontend can display real names and real player heads.
 */
export async function GET() {
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

    // Build UUID → team name lookup from the event export's team rosters
    // (players may be UUID strings or legacy {uuid, name} objects)
    const teamByUuid: Record<string, string> = {};
    const teamColorByName: Record<string, string> = {};
    if (eventJson?.teams) {
      for (const team of eventJson.teams) {
        teamColorByName[team.name] = team.color ?? "#666666";
        for (const player of team.players ?? []) {
          const uuid = typeof player === "string" ? player : player.uuid;
          teamByUuid[uuid] = team.name;
        }
      }
    }

    // playerScores from the proxy: { UUID: points, ... }
    const playerScores: Record<string, number> = scoresJson.playerScores ?? {};
    const uuids = Object.keys(playerScores);

    // Also include any UUIDs from the event roster that have 0 score
    const allUuids = [...new Set([
      ...uuids,
      ...Object.keys(teamByUuid),
    ])];

    // Resolve all UUIDs → Minecraft usernames via Mojang
    const nameByUuid = await resolveUsernames(allUuids);

    // Transform playerScores map → frontend Individual[]
    const individuals = uuids
      .map((uuid) => {
        const username = nameByUuid[uuid] ?? uuid.substring(0, 8);
        const teamName = teamByUuid[uuid];
        return {
          rank: 0, // assigned after sort
          name: username,
          // mc-heads.net accepts UUIDs for the image — use resolved name if available
          avatar: nameByUuid[uuid] ?? uuid,
          score: playerScores[uuid] ?? 0,
          team: teamName ?? null,
          teamColor: teamName ? (teamColorByName[teamName] ?? "#666666") : null,
        };
      })
      // Sort descending by score
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
