import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { EvaluationRncpResponse } from "../interfaces/evaluations/rncp.js";
import type { EvaluationValidationAlertsResponse } from "../interfaces/evaluations/validation-alerts.js";
import type { EvaluationValidationCreditsResponse } from "../interfaces/evaluations/validation-credits.js";
import type { EvaluationValidationGraphResponse } from "../interfaces/evaluations/validation-graph.js";
import type { EvaluationValidationsResponse } from "../interfaces/evaluations/validations.js";
import type { StudentEvaluationListResponse } from "../interfaces/evaluations/student-evaluation-list.js";
import { withQuery } from "../utils/query.js";

const validateStudentEvaluationListResponse =
    typia.createValidate<StudentEvaluationListResponse>();
const validateEvaluationValidationsResponse =
    typia.createValidate<EvaluationValidationsResponse>();
const validateEvaluationValidationAlertsResponse =
    typia.createValidate<EvaluationValidationAlertsResponse>();
const validateEvaluationValidationCreditsResponse =
    typia.createValidate<EvaluationValidationCreditsResponse>();
const validateEvaluationValidationGraphResponse =
    typia.createValidate<EvaluationValidationGraphResponse>();
const validateEvaluationRncpResponse =
    typia.createValidate<EvaluationRncpResponse>();

/**
 * Service responsible for evaluations, validations and RNCP API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Evaluations extends ApiClient {
    /**
     * Retrieves the authenticated student's evaluations.
     *
     * @param page Page number.
     * @param limit Maximum number of items per page (clamped to 1-100).
     * @returns The student's evaluations.
     */
    public async getStudentEvaluations(
        page: number = 1,
        limit: number = 100
    ): Promise<ApiResult<StudentEvaluationListResponse>> {
        const effectiveLimit = Math.min(Math.max(limit, 1), 100);

        return this.getJson(
            withQuery("students/evaluations", { page, limit: effectiveLimit }),
            validateStudentEvaluationListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's validations (blocks, learning outcomes and competency blocks).
     *
     * @returns The student's validations.
     */
    public async getValidations(): Promise<
        ApiResult<EvaluationValidationsResponse>
    > {
        return this.getJson(
            "evaluations/validations/me",
            validateEvaluationValidationsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's validation alerts (credits, exams and units at risk).
     *
     * @returns The student's validation alerts.
     */
    public async getValidationAlerts(): Promise<
        ApiResult<EvaluationValidationAlertsResponse>
    > {
        return this.getJson(
            "evaluations/validations/alerts/me",
            validateEvaluationValidationAlertsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's acquired credits.
     *
     * @returns The student's credits.
     */
    public async getValidationCredits(): Promise<
        ApiResult<EvaluationValidationCreditsResponse>
    > {
        return this.getJson(
            "evaluations/validations/credits/me",
            validateEvaluationValidationCreditsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's validation graph (nodes and links).
     *
     * @returns The student's validation graph.
     */
    public async getValidationGraph(): Promise<
        ApiResult<EvaluationValidationGraphResponse>
    > {
        return this.getJson(
            "evaluations/validations/graph/me",
            validateEvaluationValidationGraphResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the authenticated student's RNCP validation status.
     *
     * @returns The student's RNCP status.
     */
    public async getRncp(): Promise<ApiResult<EvaluationRncpResponse>> {
        return this.getJson(
            "evaluations/rncp/me",
            validateEvaluationRncpResponse,
            {},
            [200, 201, 304]
        );
    }
}
