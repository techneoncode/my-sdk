/**
 * Response of `GET gamification/xp/me`.
 */
export interface GamificationXpResponse {
    achievementXp: number;
    effortXp: number;
    level: number;
    login: string;
    totalXp: number;
    xpInLevel: number;
    xpToNext: number;
}
