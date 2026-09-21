import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type {
    Badge,
    BadgeAward,
    GamificationCursusEnabledResponse,
    GamificationPreferencesResponse,
    GamificationStreakResponse,
    GamificationXpFeedResponse,
    GamificationXpResponse,
} from "../interfaces/gamification/gamification.js";
export declare class Gamification extends ApiClient {
    getXp(): Promise<ApiResult<GamificationXpResponse>>;
    getStreak(): Promise<ApiResult<GamificationStreakResponse>>;
    getPreferences(): Promise<ApiResult<GamificationPreferencesResponse>>;
    getXpFeed(limit?: number): Promise<ApiResult<GamificationXpFeedResponse>>;
    getCursusEnabled(): Promise<ApiResult<GamificationCursusEnabledResponse>>;
    getStudentBadgeAwards(): Promise<ApiResult<BadgeAward[]>>;
    getBadges(visible?: boolean): Promise<ApiResult<Badge[]>>;
}
//# sourceMappingURL=gamification.d.ts.map
