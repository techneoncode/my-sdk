export interface EvaluationValidationAlertsCompetencyBlockItem {
    alertLevel: string;
    color: string;
    competencyBlockId: number;
    name: string;
    nameFr: string;
    reachableCredits: number;
    secureCredits: number;
    threshold: number;
}

export interface EvaluationValidationAlertsCreditsLostItem {
    blockId: number;
    credits: number;
    title: string;
}

export interface EvaluationValidationAlertsExamItem {
    alertLevel: string;
    bestScore: number;
    derogated: boolean;
    examLineageKey: string;
    hadPastSession: boolean;
    hasUpcomingSession: boolean;
    label: string;
    requiredScore: number;
    validated: boolean;
}

export interface EvaluationValidationAlertsUnitItem {
    alertLevel: string;
    blockId: number;
    blockTitle: string;
    grade: string;
    possibleScore: number;
    potentialScore: number;
    score: number;
}

/**
 * Response of `GET evaluations/validations/alerts/me`.
 */
export interface EvaluationValidationAlertsResponse {
    competencyBlocks: EvaluationValidationAlertsCompetencyBlockItem[];
    creditsAlert: string;
    creditsAtRisk: unknown[];
    creditsLost: EvaluationValidationAlertsCreditsLostItem[];
    creditsThreshold: number;
    exams: EvaluationValidationAlertsExamItem[];
    globalAlert: string;
    reachableCredits: number;
    secureCredits: number;
    totalAcquiredCredits: number;
    units: EvaluationValidationAlertsUnitItem[];
}
