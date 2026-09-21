import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { ELearningChapterUrlResponse } from "../interfaces/e-learning/chapter-url.js";
import type { ELearningModuleResponse } from "../interfaces/e-learning/module.js";
import type { ELearningOverviewResponse } from "../interfaces/e-learning/overview.js";

const validateELearningOverviewResponse =
    typia.createValidate<ELearningOverviewResponse>();
const validateELearningModuleResponse =
    typia.createValidate<ELearningModuleResponse>();
const validateELearningChapterUrlResponse =
    typia.createValidate<ELearningChapterUrlResponse>();

/**
 * Service responsible for e-learning API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class ELearning extends ApiClient {
    /**
     * Retrieves the e-learning overview (categories and their modules).
     *
     * @returns The e-learning overview.
     */
    public async getOverview(): Promise<ApiResult<ELearningOverviewResponse>> {
        return this.getJson(
            "e-learning/overview",
            validateELearningOverviewResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves an e-learning module and its chapters.
     *
     * @param moduleId Module identifier.
     * @returns The module.
     */
    public async getModule(
        moduleId: number
    ): Promise<ApiResult<ELearningModuleResponse>> {
        return this.getJson(
            `e-learning/modules/${moduleId}`,
            validateELearningModuleResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the temporary URL of an e-learning chapter document.
     *
     * @param chapterId Chapter identifier.
     * @returns The chapter URL.
     */
    public async getChapterUrl(
        chapterId: number
    ): Promise<ApiResult<ELearningChapterUrlResponse>> {
        return this.getJson(
            `e-learning/chapters/${chapterId}/url`,
            validateELearningChapterUrlResponse,
            {},
            [200, 201, 304]
        );
    }
}
