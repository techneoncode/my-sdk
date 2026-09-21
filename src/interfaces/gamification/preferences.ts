/**
 * Response of `GET gamification/preferences/me`.
 */
export interface GamificationPreferencesResponse {
    cursusGamificationEnabled: boolean;
    optedOut: boolean;
    streakDangerNotificationEnabled: boolean;
}
