/**
 * API utilities for fetching data from the EventCore-Proxy.
 *
 * The Next.js route handlers in /api/leaderboard/* proxy requests to the
 * EventCore-Proxy REST API and transform the response to match the frontend
 * TypeScript interfaces.
 */

// ── Team icon mapping ──────────────────────────────────────────────────────
// Maps proxy team names (e.g. "Orca") to local SVG icon paths.
// The proxy may send "Orca" or "Team Orca" — we normalise both.
export const TEAM_ICON_MAP: Record<string, string> = {
  Orca: "/teamIcons/orca_logo.svg",
  Dolphin: "/teamIcons/dolphin_logo.svg",
  Seahorse: "/teamIcons/seahorse_logo.svg",
  Turtle: "/teamIcons/turtle_logo.svg",
  Swordfish: "/teamIcons/swordfish_logo.svg",
  Stingray: "/teamIcons/stingray_logo.svg",
  Jellyfish: "/teamIcons/jellyfish_logo.svg",
  Octopus: "/teamIcons/octopus_logo.svg",
};

/**
 * Resolve a team name from the proxy (e.g. "Orca" or "Team Orca") to a local
 * SVG icon path.  Falls back to dolphin if the name is unrecognised.
 */
export function getTeamIcon(teamName: string): string {
  // Strip leading "Team " prefix if present
  const key = teamName.replace(/^Team\s+/i, "");
  return TEAM_ICON_MAP[key] ?? "/teamIcons/dolphin_logo.svg";
}

/**
 * Build a Minecraft head avatar URL for a given username OR UUID.
 * mc-heads.net accepts both, so UUIDs work fine for the image even before
 * the username is resolved.
 */
export function getAvatarUrl(usernameOrUuid: string, size = 32): string {
  return `https://mc-heads.net/avatar/${encodeURIComponent(usernameOrUuid)}/${size}`;
}

// ── UUID → username resolution via Mojang API ─────────────────────────────

/**
 * Resolve an array of Minecraft UUIDs to { uuid, name } pairs using the
 * Mojang session server.  UUIDs that fail to resolve are returned with the
 * UUID as the name fallback so the caller always gets a full result set.
 *
 * Mojang's /session/minecraft/profile endpoint is per-UUID (no batch endpoint
 * exists in the public API), so we fire requests concurrently and cap the
 * concurrency to avoid hammering Mojang.
 */
export async function resolveUsernames(
  uuids: string[],
): Promise<Record<string, string>> {
  if (uuids.length === 0) return {};

  const CONCURRENCY = 5; // max parallel Mojang requests
  const result: Record<string, string> = {};

  // Process in chunks to respect Mojang rate limits
  for (let i = 0; i < uuids.length; i += CONCURRENCY) {
    const chunk = uuids.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (uuid) => {
        try {
          // Strip dashes for Mojang endpoint
          const stripped = uuid.replace(/-/g, "");
          const res = await fetch(
            `https://sessionserver.mojang.com/session/minecraft/profile/${stripped}`,
            // Short cache — names rarely change but we don't want to hammer Mojang
            { next: { revalidate: 300 } },
          );
          if (res.ok) {
            const data = await res.json();
            if (data?.name) {
              result[uuid] = data.name;
              return;
            }
          }
        } catch {
          // Network failure — fall through to UUID fallback
        }
        // Fallback: use first 8 chars of UUID so the UI shows something readable
        result[uuid] = uuid.substring(0, 8);
      }),
    );
  }

  return result;
}

// ── Proxy configuration ────────────────────────────────────────────────────
// These are read on the *server* only (no NEXT_PUBLIC_ prefix).
export const PROXY_API_URL =
  process.env.PROXY_API_URL ?? "http://localhost:8080";
export const EVENT_ID = process.env.EVENT_ID ?? "creator-splash-001";
