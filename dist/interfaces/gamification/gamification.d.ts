export interface GamificationXpResponse {
    login: string;
    effortXp: number;
    achievementXp: number;
    totalXp: number;
    level: number;
    xpInLevel: number;
    xpToNext: number;
}
export interface GamificationStreakResponse {
    login: string;
    currentCount: number;
    longestCount: number;
    lastActiveDay: string | null;
    savesAvailable: number;
    requiresActivityToday: boolean;
}
export interface GamificationPreferencesResponse {
    optedOut: boolean;
    streakDangerNotificationEnabled: boolean;
    cursusGamificationEnabled: boolean;
}
export interface GamificationXpFeedResponse extends GamificationXpResponse {
    timeline: Record<string, unknown>[];
}
export interface GamificationCursusEnabledResponse {
    enabled: boolean;
}
export type BadgeAward = Record<string, unknown>;
export type Badge = Record<string, unknown>;
//# sourceMappingURL=gamification.d.ts.map
