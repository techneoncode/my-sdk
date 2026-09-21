import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { UserApplicationListResponse } from "../interfaces/applications/user-application-list.js";

const validateUserApplicationListResponse =
    typia.createValidate<UserApplicationListResponse>();

/**
 * Service responsible for application launcher API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Applications extends ApiClient {
    /**
     * Retrieves the applications available to the authenticated user, grouped by category.
     *
     * @returns The application categories.
     */
    public async getUserApplications(): Promise<
        ApiResult<UserApplicationListResponse>
    > {
        return this.getJson(
            "applications/user",
            validateUserApplicationListResponse,
            {},
            [200, 201, 304]
        );
    }
}
