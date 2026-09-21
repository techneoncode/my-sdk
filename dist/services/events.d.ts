import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type {
    AttendanceActivity,
    Calendar,
    CalendarToken,
    Event,
    EventAttendance,
    EventMark,
    EventRegistration,
    EventSlot,
    Room,
} from "../interfaces/events/event.js";
export interface EventQuery {
    startDate?: string;
    endDate?: string;
    semester?: number;
    cursus?: string;
    registered?: "me";
}
export declare class Events extends ApiClient {
    getEvents(query?: EventQuery): Promise<ApiResult<Event[]>>;
    getAttendanceActivities(): Promise<ApiResult<AttendanceActivity[]>>;
    getSlots(eventId: number): Promise<ApiResult<EventSlot[]>>;
    getRegistrations(eventId: number): Promise<ApiResult<EventRegistration[]>>;
    getActivityRegistrations(
        activityId: number
    ): Promise<ApiResult<EventRegistration[]>>;
    getMyMark(eventId: number): Promise<ApiResult<EventMark>>;
    getMyAttendance(eventId: number): Promise<ApiResult<EventAttendance>>;
    getCalendarToken(): Promise<ApiResult<CalendarToken>>;
    getCalendars(): Promise<ApiResult<Calendar[]>>;
    getRoomsByUser(campus: string): Promise<ApiResult<Room[]>>;
}
//# sourceMappingURL=events.d.ts.map
