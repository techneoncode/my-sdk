/**
 * Response of `GET gamification/streak/me`.
 */
export interface GamificationStreakResponse {
    currentCount: number;
    lastActiveDay: unknown;
    login: string;
    longestCount: number;
    requiresActivityToday: boolean;
    savesAvailable: number;
}
