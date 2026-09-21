import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type {
    EvaluationCreditsResponse,
    EvaluationGraphResponse,
    EvaluationValidationAlertsResponse,
    EvaluationValidationResponse,
    ExamDerogation,
    ExamType,
    RncpValidationResponse,
} from "../interfaces/evaluations/evaluation.js";
import type { StudentExamListResponse } from "../interfaces/user/student/user-student-exam-list.js";
import type { StudentEvaluationListResponse } from "../interfaces/user/student/user-student-evaluation-list.js";
export declare class Evaluations extends ApiClient {
    getStudentExams(): Promise<ApiResult<StudentExamListResponse>>;
    getStudentExamDerogations(): Promise<ApiResult<ExamDerogation[]>>;
    getStudentEvaluations(
        page?: number,
        limit?: number
    ): Promise<ApiResult<StudentEvaluationListResponse>>;
    getValidationAlerts(): Promise<
        ApiResult<EvaluationValidationAlertsResponse>
    >;
    getValidations(): Promise<ApiResult<EvaluationValidationResponse>>;
    getCredits(): Promise<ApiResult<EvaluationCreditsResponse>>;
    getValidationGraph(): Promise<ApiResult<EvaluationGraphResponse>>;
    getRncp(): Promise<ApiResult<RncpValidationResponse>>;
    getExamTypes(schoolYear: number): Promise<ApiResult<ExamType[]>>;
}
//# sourceMappingURL=evaluations.d.ts.map
