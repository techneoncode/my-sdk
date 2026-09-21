import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { CampusRoomListResponse } from "../interfaces/campus/room-list.js";
import { withQuery } from "../utils/query.js";

const validateCampusRoomListResponse =
    typia.createValidate<CampusRoomListResponse>();

/**
 * Service responsible for campus API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Campus extends ApiClient {
    /**
     * Retrieves the rooms of a campus available to the authenticated user.
     *
     * @param campus Campus code (e.g. `STG`).
     * @returns The rooms.
     */
    public async getRoomsByUser(
        campus: string
    ): Promise<ApiResult<CampusRoomListResponse>> {
        return this.getJson(
            withQuery("campus/rooms/by-user", { campus }),
            validateCampusRoomListResponse,
            {},
            [200, 201, 304]
        );
    }
}
