import type { GamificationXpResponse } from "./xp.js";

/**
 * Response of `GET gamification/xp/me/feed`.
 *
 * Same data as the XP summary, plus the XP timeline.
 */
export interface GamificationXpFeedResponse extends GamificationXpResponse {
    timeline: unknown[];
}
