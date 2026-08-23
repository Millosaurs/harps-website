import { NextResponse } from "next/server";
import { PROXY_API_URL, EVENT_ID } from "@/lib/api";

/**
 * GET /api/leaderboard/individuals
 *
 * Fetches individual player scores from EventCore-Proxy and transforms them
 * into the shape expected by the frontend `Individual[]` interface.
 *
 * Proxy endpoints used:
 *   GET /api/scores/{eventId}  → playerScores (UUID → points)
 *   GET /api/event/{eventId}   → player name resolution (UUID → username)
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

    // Build UUID → player name lookup from the event export's team rosters
    const nameByUuid: Record<string, string> = {};
    if (eventJson?.teams) {
      for (const team of eventJson.teams) {
        for (const player of team.players ?? []) {
          nameByUuid[player.uuid] = player.name;
        }
      }
    }
    // Also check top-level playerNames if the export includes them
    if (eventJson?.playerNames) {
      for (const [uuid, name] of Object.entries(eventJson.playerNames)) {
        nameByUuid[uuid] = name as string;
      }
    }

    // Transform playerScores map → frontend Individual[]
    const playerScores: Record<string, number> = scoresJson.playerScores ?? {};

    const individuals = Object.entries(playerScores)
      .map(([uuid, score]) => ({
        rank: 0, // assigned after sort
        name: nameByUuid[uuid] ?? uuid.substring(0, 8), // fallback to short UUID
        score,
        avatar: nameByUuid[uuid] ?? "Steve", // MinecraftHead uses this as username
      }))
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
