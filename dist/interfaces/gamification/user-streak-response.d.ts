export interface UserStreakResponse {
    currentCount: number;
    longestCount: number;
    lastActiveDay: string | null;
    savesAvailable: number;
    requiresActivityToday: boolean;
}
