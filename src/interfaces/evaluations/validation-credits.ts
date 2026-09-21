/**
 * Response of `GET evaluations/validations/credits/me`.
 */
export interface EvaluationValidationCreditsResponse {
    acquiredCredits: number;
    priorCredits: number;
    totalAcquiredCredits: number;
}
