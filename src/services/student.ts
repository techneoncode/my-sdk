import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { StudentFieldsVisibilityResponse } from "../interfaces/user/student/user-student-fields-visibility.js";
import type { StudentGithubStatsResponse } from "../interfaces/user/student/user-student-github-stats.js";
import type { StudentLogTimeResponse } from "../interfaces/user/student/user-student-log-time.js";
import type { StudentProfileResponse } from "../interfaces/user/student/user-student-profile.js";
import type { UserPhotoUrlsResponse } from "../interfaces/user/user-photo-urls.js";
import { withQuery } from "../utils/query.js";
import { validateUnknown } from "../utils/validators.js";

const validateStudentProfileResponse =
    typia.createValidate<StudentProfileResponse>();
const validateStudentLogTimeResponse =
    typia.createValidate<StudentLogTimeResponse>();
const validateStudentGithubStatsResponse =
    typia.createValidate<StudentGithubStatsResponse>();
const validateStudentFieldsVisibilityResponse =
    typia.createValidate<StudentFieldsVisibilityResponse>();
const validateUserPhotoUrlsResponse =
    typia.createValidate<UserPhotoUrlsResponse>();

/**
 * Service responsible for user-related API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Student extends ApiClient {
    /**
     * Retrieves the authenticated student's profile.
     *
     * @returns The student's profile.
     */
    public async getStudentProfile(): Promise<
        ApiResult<StudentProfileResponse>
    > {
        return this.getJson(
            "students/profile",
            validateStudentProfileResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's log time.
     *
     * @returns The student's log time.
     */
    public async getStudentLogTime(): Promise<
        ApiResult<StudentLogTimeResponse>
    > {
        return this.getJson(
            "students/logtime",
            validateStudentLogTimeResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's GitHub activity counters for a period.
     *
     * @param from Start date of the period (`YYYY-MM-DD`).
     * @param to End date of the period (`YYYY-MM-DD`).
     * @returns The GitHub statistics (`c`, `a`, `d`) of the period.
     */
    public async getStudentGithubStats(
        from: string,
        to: string
    ): Promise<ApiResult<StudentGithubStatsResponse>> {
        return this.getJson(
            withQuery("students/github-stats", { from, to }),
            validateStudentGithubStatsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves which sections of the student profile are visible.
     *
     * @returns The visibility flags of the student profile fields.
     */
    public async getStudentFieldsVisibility(): Promise<
        ApiResult<StudentFieldsVisibilityResponse>
    > {
        return this.getJson(
            "students/fields-visibility",
            validateStudentFieldsVisibilityResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw follow-ups response.
     */
    public async getStudentFollowUps(): Promise<ApiResult<unknown>> {
        return this.getJson(
            "students/follow-ups",
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw student documents response.
     */
    public async getStudentDocuments(): Promise<ApiResult<unknown>> {
        return this.getJson(
            "students/documents",
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw collaborators response.
     */
    public async getStudentCollaborators(): Promise<ApiResult<unknown>> {
        return this.getJson(
            "students/collaborators",
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the photo URLs of several users.
     *
     * The request payload was not part of the network capture: the `{ logins }` body is an assumption to verify.
     *
     * @param logins Logins (emails) of the users whose photo URL is requested.
     * @returns One entry per user with the URL of their photo.
     */
    public async getUserPhotoUrls(
        logins: string[]
    ): Promise<ApiResult<UserPhotoUrlsResponse>> {
        return this.postJson(
            "users/photos/urls",
            validateUserPhotoUrlsResponse,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ logins }),
            },
            [200, 201]
        );
    }

    /**
     * Retrieves the avatar image of a user.
     *
     * @param email Login (email) of the user.
     * @returns The avatar image.
     */
    public async getUserAvatar(email: string): Promise<ApiResult<Blob>> {
        return this.getBlob(
            `users/${encodeURIComponent(email)}/avatar`,
            {},
            [200, 304]
        );
    }
}
