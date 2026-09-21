import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { ProjectCloudResponse } from "../interfaces/projects/project-cloud.js";
import type { ProjectDetailResponse } from "../interfaces/projects/project-detail.js";
import type { ProjectMyActivitiesResponse } from "../interfaces/projects/project-my-activities.js";
import type { ProjectRegistrationTaResponse } from "../interfaces/projects/project-registration-ta.js";
import type { ProjectStudentFileUrlResponse } from "../interfaces/projects/project-student-file-url.js";
import type { ProjectStudentFilesResponse } from "../interfaces/projects/project-student-files.js";
import type { ProjectListQuery } from "../interfaces/projects/project-list-query.js";
import type { ProjectListResponse } from "../interfaces/projects/project-list.js";
import type { ProjectTestResultsResponse } from "../interfaces/projects/project-test-results.js";
import { withQuery } from "../utils/query.js";
import { validateUnknown } from "../utils/validators.js";

const validateProjectListResponse = typia.createValidate<ProjectListResponse>();
const validateProjectDetailResponse =
    typia.createValidate<ProjectDetailResponse>();
const validateProjectCloudResponse =
    typia.createValidate<ProjectCloudResponse>();
const validateProjectTestResultsResponse =
    typia.createValidate<ProjectTestResultsResponse>();
const validateProjectMyActivitiesResponse =
    typia.createValidate<ProjectMyActivitiesResponse>();
const validateProjectStudentFilesResponse =
    typia.createValidate<ProjectStudentFilesResponse>();
const validateProjectRegistrationTaResponse =
    typia.createValidate<ProjectRegistrationTaResponse>();
const validateProjectStudentFileUrlResponse =
    typia.createValidate<ProjectStudentFileUrlResponse>();

/**
 * Service responsible for project API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Projects extends ApiClient {
    /**
     * Retrieves the project instances matching the given filters.
     *
     * @param query Filters applied to the request.
     * @returns The matching projects and their pagination metadata.
     */
    public async getProjects(
        query: ProjectListQuery = {}
    ): Promise<ApiResult<ProjectListResponse>> {
        return this.getJson(
            withQuery("units/instances/projects", query),
            validateProjectListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves a project instance.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code (e.g. `S-INN-000`).
     * @param instanceCode Unit instance code (e.g. `ALL-1`).
     * @param projectId Project instance identifier.
     * @returns The project.
     */
    public async getProject(
        schoolYear: number,
        unitCode: string,
        instanceCode: string,
        projectId: number
    ): Promise<ApiResult<ProjectDetailResponse>> {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(instanceCode)}/projects/${projectId}`,
            validateProjectDetailResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code.
     * @param instanceCode Unit instance code.
     * @param projectId Project instance identifier.
     * @returns The raw project achievements response.
     */
    public async getProjectAchievements(
        schoolYear: number,
        unitCode: string,
        instanceCode: string,
        projectId: number
    ): Promise<ApiResult<unknown>> {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(instanceCode)}/projects/${projectId}/achievements`,
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the test results of a project.
     *
     * @param projectId Project instance identifier.
     * @returns The project's test results.
     */
    public async getProjectTestResults(
        projectId: number
    ): Promise<ApiResult<ProjectTestResultsResponse>> {
        return this.getJson(
            `units/instances/projects/${projectId}/test-results`,
            validateProjectTestResultsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the activities associated with the authenticated student's project.
     *
     * @param projectId Project instance identifier.
     * @returns The project activities and their current statuses.
     */
    public async getProjectMyActivities(
        projectId: number
    ): Promise<ApiResult<ProjectMyActivitiesResponse>> {
        return this.getJson(
            `units/instances/projects/${projectId}/my-activities`,
            validateProjectMyActivitiesResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves files made available to the authenticated student for a project.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code.
     * @param instanceCode Unit instance code.
     * @param projectId Project instance identifier.
     * @returns The project student files.
     */
    public async getProjectStudentFiles(
        schoolYear: number,
        unitCode: string,
        instanceCode: string,
        projectId: number
    ): Promise<ApiResult<ProjectStudentFilesResponse>> {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(instanceCode)}/projects/${projectId}/files/students`,
            validateProjectStudentFilesResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves TA test-run information for a project registration.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code.
     * @param instanceCode Unit instance code.
     * @param projectId Project instance identifier.
     * @param registrationId Project registration identifier.
     * @returns The test runs and quota information.
     */
    public async getProjectRegistrationTa(
        schoolYear: number,
        unitCode: string,
        instanceCode: string,
        projectId: number,
        registrationId: number
    ): Promise<ApiResult<ProjectRegistrationTaResponse>> {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(instanceCode)}/projects/${projectId}/registrations/${registrationId}/ta`,
            validateProjectRegistrationTaResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the presigned URL of a student project file.
     *
     * The API returns this URL as plain text rather than JSON.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code.
     * @param instanceCode Unit instance code.
     * @param projectId Project instance identifier.
     * @param fileName Project file name.
     * @returns The presigned object-storage URL.
     */
    public async getProjectStudentFileUrl(
        schoolYear: number,
        unitCode: string,
        instanceCode: string,
        projectId: number,
        fileName: string
    ): Promise<ApiResult<ProjectStudentFileUrlResponse>> {
        return this.getText(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(instanceCode)}/projects/${projectId}/files/students/${encodeURIComponent(fileName)}`,
            {},
            [200, 304]
        );
    }

    /**
     * Retrieves the cloud resources allocated for a project.
     *
     * @param projectId Project instance identifier.
     * @returns The project cloud information.
     */
    public async getProjectCloud(
        projectId: number
    ): Promise<ApiResult<ProjectCloudResponse>> {
        return this.getJson(
            `units/instances/projects/${projectId}/cloud`,
            validateProjectCloudResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw project invitations response.
     */
    public async getProjectInvitations(): Promise<ApiResult<unknown>> {
        return this.getJson(
            "units/projects/registrations/invitations/me",
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }
}
