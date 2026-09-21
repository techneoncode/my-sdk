import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { EventListQuery } from "../interfaces/events/event-list-query.js";
import type { EventRegistrationResponse } from "../interfaces/events/event-registration.js";
import type { EventListResponse } from "../interfaces/events/event-list.js";
import type { EventRegistrationListResponse } from "../interfaces/events/event-registration-list.js";
import { withQuery } from "../utils/query.js";
import { validateUnknown } from "../utils/validators.js";

const validateEventListResponse = typia.createValidate<EventListResponse>();
const validateEventRegistrationResponse =
    typia.createValidate<EventRegistrationResponse>();
const validateEventRegistrationListResponse =
    typia.createValidate<EventRegistrationListResponse>();

/**
 * Service responsible for event API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Events extends ApiClient {
    /**
     * Retrieves the events matching the given filters.
     *
     * @param query Filters applied to the request.
     * @returns The matching events.
     */
    public async getEvents(
        query: EventListQuery = {}
    ): Promise<ApiResult<EventListResponse>> {
        return this.getJson(
            withQuery("events", query),
            validateEventListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @param eventId Event identifier.
     * @returns The raw event slots response.
     */
    public async getEventSlots(eventId: number): Promise<ApiResult<unknown>> {
        return this.getJson(
            `events/${eventId}/slots`,
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Registers the authenticated student to an event.
     *
     * The captured request does not contain a request body.
     *
     * @param eventId Event identifier.
     * @returns The newly created event registration.
     */
    public async registerToEvent(
        eventId: number
    ): Promise<ApiResult<EventRegistrationResponse>> {
        return this.postJson(
            `events/${eventId}/registrations`,
            validateEventRegistrationResponse,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            [201]
        );
    }

    /**
     * Unregisters the authenticated student from an event.
     *
     * The captured request uses DELETE and does not return a response body.
     *
     * @param eventId Event identifier.
     * @returns The empty response body and request metadata.
     */
    public async unregisterFromEvent(
        eventId: number
    ): Promise<ApiResult<string>> {
        return this.deleteText(
            `events/${eventId}/registrations`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            [200, 204]
        );
    }

    /**
     * Retrieves the registrations of an event.
     *
     * @param eventId Event identifier.
     * @returns The event registrations.
     */
    public async getEventRegistrations(
        eventId: number
    ): Promise<ApiResult<EventRegistrationListResponse>> {
        return this.getJson(
            `events/${eventId}/registrations`,
            validateEventRegistrationListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * TODO: Not yet implemented due to missing response schema (the capture only contains an error response).
     *
     * @param eventId Event identifier.
     * @returns The raw marks response.
     */
    public async getEventMarks(eventId: number): Promise<ApiResult<unknown>> {
        return this.getJson(
            `events/${eventId}/marks/me`,
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }
}
