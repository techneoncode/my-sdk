import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { GamificationCursusEnabledResponse } from "../interfaces/gamification/cursus-enabled.js";
import type { GamificationPreferencesResponse } from "../interfaces/gamification/preferences.js";
import type { GamificationStreakResponse } from "../interfaces/gamification/streak.js";
import type { GamificationXpFeedResponse } from "../interfaces/gamification/xp-feed.js";
import type { GamificationXpResponse } from "../interfaces/gamification/xp.js";
import { withQuery } from "../utils/query.js";
import { validateUnknown } from "../utils/validators.js";

const validateGamificationXpResponse =
    typia.createValidate<GamificationXpResponse>();
const validateGamificationXpFeedResponse =
    typia.createValidate<GamificationXpFeedResponse>();
const validateGamificationStreakResponse =
    typia.createValidate<GamificationStreakResponse>();
const validateGamificationPreferencesResponse =
    typia.createValidate<GamificationPreferencesResponse>();
const validateGamificationCursusEnabledResponse =
    typia.createValidate<GamificationCursusEnabledResponse>();

/**
 * Service responsible for gamification (XP, streak, badges) API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Gamification extends ApiClient {
    /**
     * Retrieves the authenticated student's experience points and level.
     *
     * @returns The student's XP.
     */
    public async getXp(): Promise<ApiResult<GamificationXpResponse>> {
        return this.getJson(
            "gamification/xp/me",
            validateGamificationXpResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's experience points along with their XP timeline.
     *
     * @param limit Maximum number of timeline entries.
     * @returns The student's XP and timeline.
     */
    public async getXpFeed(
        limit: number = 50
    ): Promise<ApiResult<GamificationXpFeedResponse>> {
        return this.getJson(
            withQuery("gamification/xp/me/feed", { limit }),
            validateGamificationXpFeedResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's activity streak.
     *
     * @returns The student's streak.
     */
    public async getStreak(): Promise<ApiResult<GamificationStreakResponse>> {
        return this.getJson(
            "gamification/streak/me",
            validateGamificationStreakResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's gamification preferences.
     *
     * @returns The student's gamification preferences.
     */
    public async getPreferences(): Promise<
        ApiResult<GamificationPreferencesResponse>
    > {
        return this.getJson(
            "gamification/preferences/me",
            validateGamificationPreferencesResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves whether gamification is enabled for the authenticated student's cursus.
     *
     * @returns Whether gamification is enabled.
     */
    public async getCursusGamificationEnabled(): Promise<
        ApiResult<GamificationCursusEnabledResponse>
    > {
        return this.getJson(
            "gamification/preferences/me/cursus-enabled",
            validateGamificationCursusEnabledResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw badge awards response.
     */
    public async getBadgeAwards(): Promise<ApiResult<unknown>> {
        return this.getJson(
            "badges/awards/student/me",
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @param visible Only return visible badges.
     * @returns The raw badges response.
     */
    public async getBadges(
        visible: boolean = true
    ): Promise<ApiResult<unknown>> {
        return this.getJson(
            withQuery("badges", { visible }),
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }
}
