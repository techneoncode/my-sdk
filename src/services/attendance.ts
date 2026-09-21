import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { EventAttendanceResponse } from "../interfaces/attendance/event-attendance.js";
import type { StudentAbsenceProjectListResponse } from "../interfaces/attendance/student-absence-project-list.js";
import type { StudentAbsenceProjectResponse } from "../interfaces/attendance/student-absence-project.js";
import { validateUnknown } from "../utils/validators.js";

const validateStudentAbsenceProjectListResponse =
    typia.createValidate<StudentAbsenceProjectListResponse>();
const validateStudentAbsenceProjectResponse =
    typia.createValidate<StudentAbsenceProjectResponse>();
const validateEventAttendanceResponse =
    typia.createValidate<EventAttendanceResponse>();

/**
 * Service responsible for attendance and absence API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Attendance extends ApiClient {
    /**
     * Retrieves the authenticated student's absence statistics for each project.
     *
     * @returns The absence statistics per project.
     */
    public async getStudentAbsenceProjects(): Promise<
        ApiResult<StudentAbsenceProjectListResponse>
    > {
        return this.getJson(
            "students/absences/projects",
            validateStudentAbsenceProjectListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's absence statistics for one project.
     *
     * @param projectInstanceId Project instance identifier.
     * @returns The absence statistics of the project, with its tracked events.
     */
    public async getStudentAbsenceProject(
        projectInstanceId: number
    ): Promise<ApiResult<StudentAbsenceProjectResponse>> {
        return this.getJson(
            `students/absences/projects/${projectInstanceId}`,
            validateStudentAbsenceProjectResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's attendance record for an event.
     *
     * @param eventId Event identifier.
     * @returns The attendance record.
     */
    public async getEventAttendance(
        eventId: number
    ): Promise<ApiResult<EventAttendanceResponse>> {
        return this.getJson(
            `events/${eventId}/attendance/me`,
            validateEventAttendanceResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw attendance activities response.
     */
    public async getAttendanceActivities(): Promise<ApiResult<unknown>> {
        return this.getJson(
            "events/attendance/activities",
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }
}
