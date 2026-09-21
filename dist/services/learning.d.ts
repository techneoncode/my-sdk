import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type {
    ELearningModule,
    ELearningOverview,
    SignedUrlResponse,
} from "../interfaces/learning/e-learning.js";
export declare class Learning extends ApiClient {
    getOverview(): Promise<ApiResult<ELearningOverview>>;
    getModule(moduleId: number): Promise<ApiResult<ELearningModule>>;
    getChapterUrl(chapterId: number): Promise<ApiResult<SignedUrlResponse>>;
}
//# sourceMappingURL=learning.d.ts.map
