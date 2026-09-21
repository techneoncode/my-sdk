import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { NotificationBellCountResponse } from "../interfaces/notifications/bell-count.js";
import type { NotificationFeedResponse } from "../interfaces/notifications/feed.js";
import { withQuery } from "../utils/query.js";

const validateNotificationFeedResponse =
    typia.createValidate<NotificationFeedResponse>();
const validateNotificationBellCountResponse =
    typia.createValidate<NotificationBellCountResponse>();

/**
 * Service responsible for notification API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Notifications extends ApiClient {
    /**
     * Retrieves the authenticated user's notification feed.
     *
     * @param limit Maximum number of notifications.
     * @returns The notifications.
     */
    public async getFeed(
        limit: number = 30
    ): Promise<ApiResult<NotificationFeedResponse>> {
        return this.getJson(
            withQuery("notifications/feed", { limit }),
            validateNotificationFeedResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the number of unseen notifications of the bell.
     *
     * @returns The unseen notification count.
     */
    public async getBellCount(): Promise<
        ApiResult<NotificationBellCountResponse>
    > {
        return this.getJson(
            "notifications/bell/count",
            validateNotificationBellCountResponse,
            {},
            [200, 201, 304]
        );
    }
}
