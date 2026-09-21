import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { ExamTypeListResponse } from "../interfaces/exams/exam-type-list.js";
import type { StudentExamListResponse } from "../interfaces/exams/student-exam-list.js";
import type { StudentTestResultsResponse } from "../interfaces/exams/student-test-results.js";
import type { TestResultDetailResponse } from "../interfaces/test-results/test-result-detail.js";
import { withQuery } from "../utils/query.js";
import { validateUnknown } from "../utils/validators.js";

const validateStudentExamListResponse =
    typia.createValidate<StudentExamListResponse>();
const validateStudentTestResultsResponse =
    typia.createValidate<StudentTestResultsResponse>();
const validateExamTypeListResponse =
    typia.createValidate<ExamTypeListResponse>();
const validateTestResultDetailResponse =
    typia.createValidate<TestResultDetailResponse>();

/**
 * Service responsible for exam-related API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Exams extends ApiClient {
    /**
     * Retrieves the authenticated student's exams.
     *
     * @returns The student's exams.
     */
    public async getStudentExams(): Promise<
        ApiResult<StudentExamListResponse>
    > {
        return this.getJson(
            "students/exams",
            validateStudentExamListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * The capture returned an empty array, so no response interface is defined.
     *
     * @returns The raw exam derogations response.
     */
    public async getStudentExamDerogations(): Promise<ApiResult<unknown>> {
        return this.getJson(
            "students/exam-derogations",
            validateUnknown,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's test results for an academic year.
     *
     * @param year Academic year.
     * @returns The test results of the year.
     */
    public async getStudentResults(
        year: number
    ): Promise<ApiResult<StudentTestResultsResponse>> {
        return this.getJson(
            withQuery("students/test-results", { year }),
            validateStudentTestResultsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves a single detailed test result.
     *
     * @param testResultId Test result identifier.
     * @returns The detailed test result.
     */
    public async getStudentTestResult(
        testResultId: number
    ): Promise<ApiResult<TestResultDetailResponse>> {
        return this.getJson(
            `students/test-results/${testResultId}`,
            validateTestResultDetailResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the test-result history of a project for an academic year.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code.
     * @param projectCode Project code.
     * @returns The project's test-result history.
     */
    public async getStudentTestResultHistory(
        schoolYear: number,
        unitCode: string,
        projectCode: string
    ): Promise<ApiResult<StudentTestResultsResponse>> {
        return this.getJson(
            `students/test-results/history/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(projectCode)}`,
            validateStudentTestResultsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the configured exam types of a school year.
     *
     * @param schoolYear School year.
     * @returns The exam types.
     */
    public async getExamTypes(
        schoolYear: number
    ): Promise<ApiResult<ExamTypeListResponse>> {
        return this.getJson(
            withQuery("config/exam-types", { schoolYear }),
            validateExamTypeListResponse,
            {},
            [200, 201, 304]
        );
    }
}
