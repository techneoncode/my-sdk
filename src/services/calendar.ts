import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { CalendarTokenResponse } from "../interfaces/calendar/calendar-token.js";
import { validateUnknown } from "../utils/validators.js";

const validateCalendarTokenResponse =
    typia.createValidate<CalendarTokenResponse>();

/**
 * Service responsible for calendar API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Calendar extends ApiClient {
    /**
     * Retrieves the authenticated student's calendar token.
     *
     * @returns The calendar token and its owner.
     */
    public async getCalendarToken(): Promise<ApiResult<CalendarTokenResponse>> {
        return this.getJson(
            "calendar_token",
            validateCalendarTokenResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw calendars response.
     */
    public async getCalendars(): Promise<ApiResult<unknown>> {
        return this.getJson("calendars", validateUnknown, {}, [200, 201, 304]);
    }
}
