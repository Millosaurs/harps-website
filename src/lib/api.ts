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
 * Build a Minecraft head avatar URL for a given username.
 */
export function getAvatarUrl(username: string, size = 32): string {
  return `https://mc-heads.net/avatar/${encodeURIComponent(username)}/${size}`;
}

// ── Proxy configuration ────────────────────────────────────────────────────
// These are read on the *server* only (no NEXT_PUBLIC_ prefix).
export const PROXY_API_URL =
  process.env.PROXY_API_URL ?? "http://localhost:8080";
export const EVENT_ID = process.env.EVENT_ID ?? "creator-splash-001";
