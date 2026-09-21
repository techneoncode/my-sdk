import { ApiClient } from "../api/client.js";
import { ApiResult } from "../interfaces/api/api-result.js";
import { StudentProfileResponse } from "../interfaces/user/student/user-student-profile.js";
import { StudentLogTimeResponse } from "../interfaces/user/student/user-student-log-time.js";
import { StudentProjectListResponse } from "../interfaces/user/student/user-student-project-list.js";
import {
    StudentCollaborator,
    StudentDocument,
    StudentFieldsVisibilityResponse,
    StudentFollowUp,
    StudentPhotoUrl,
    StudentGithubStatsResponse,
    StudentProjectAbsence,
    StudentTestResultsResponse,
} from "../interfaces/user/student/user-student-extra.js";
/**
 * Service responsible for user-related API requests.
 *
 * Domain-specific methods should be added here as the corresponding API
 * response interfaces are documented. This class intentionally keeps no user
 * state: returned data belongs to the SDK consumer.
 */
export declare class User extends ApiClient {
    /**
     * Retrieves the authenticated student's profile.
     *
     * @returns The student's profile.
     */
    getStudentProfile(): Promise<ApiResult<StudentProfileResponse>>;
    /**
     * Retrieves the authenticated student's log time.
     *
     * @returns The student's log time.
     */
    getStudentLogTime(): Promise<ApiResult<StudentLogTimeResponse>>;
    /**
     * Retrieves the authenticated student's projects.
     *
     * @returns The student's projects.
     */
    getStudentProjects(): Promise<ApiResult<StudentProjectListResponse>>;
    getStudentProjectAbsence(
        projectInstanceId: number
    ): Promise<ApiResult<StudentProjectAbsence>>;
    getStudentFieldsVisibility(): Promise<
        ApiResult<StudentFieldsVisibilityResponse>
    >;
    getStudentGithubStats(
        from: string,
        to: string
    ): Promise<ApiResult<StudentGithubStatsResponse>>;
    getUserPhotoUrls(logins: string[]): Promise<ApiResult<StudentPhotoUrl[]>>;
    getStudentFollowUps(): Promise<ApiResult<StudentFollowUp[]>>;
    getStudentDocuments(): Promise<ApiResult<StudentDocument[]>>;
    getStudentResults(
        year: number
    ): Promise<ApiResult<StudentTestResultsResponse>>;
    getStudentCollaborators(): Promise<ApiResult<StudentCollaborator[]>>;
}
//# sourceMappingURL=user.d.ts.map
