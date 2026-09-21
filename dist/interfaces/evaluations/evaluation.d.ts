export interface CreditAlert extends Record<string, unknown> {
    blockId: number;
    title: string;
    credits: number;
}
export interface CompetencyBlockAlert extends Record<string, unknown> {
    competencyBlockId: number;
    name: string;
    alertLevel: string;
}
export interface EvaluationExamAlert extends Record<string, unknown> {
    examLineageKey: string;
    requiredScore: number;
    bestScore: number;
    validated: boolean;
}
export interface EvaluationUnitAlert extends Record<string, unknown> {
    blockId: number;
    blockTitle: string;
    alertLevel: string;
}
export interface EvaluationValidationAlertsResponse extends Record<
    string,
    unknown
> {
    globalAlert: string;
    creditsAlert: string;
    creditsThreshold: number;
    totalAcquiredCredits: number;
    secureCredits: number;
    reachableCredits: number;
    creditsAtRisk: CreditAlert[];
    creditsLost: CreditAlert[];
    competencyBlocks: CompetencyBlockAlert[];
    exams: EvaluationExamAlert[];
    units: EvaluationUnitAlert[];
}
export interface LearningOutcome extends Record<string, unknown> {
    id: number;
    title: string;
    acquiredPoints: number;
    totalPoints: number;
    score: number;
    isValidated: boolean;
}
export interface EvaluationBlock extends Record<string, unknown> {
    id: number;
    title: string;
    learningOutcomes: LearningOutcome[];
    averageScore: number;
    credits: number;
    grade: string;
}
export interface EvaluationValidationResponse extends Record<string, unknown> {
    referentialId: number;
    viewedSemesterId: number;
    cursusId: number;
    blocks: EvaluationBlock[];
    competencyBlocks: Record<string, unknown>[];
    acquiredCredits: number;
    totalAcquiredCredits: number;
}
export interface EvaluationCreditsResponse {
    acquiredCredits: number;
    priorCredits: number;
    totalAcquiredCredits: number;
}
export interface EvaluationGraphNode extends Record<string, unknown> {
    id: string;
    kind: string;
    label: string;
    status: string;
}
export interface EvaluationGraphLink extends Record<string, unknown> {
    id: string;
    source: string;
    target: string;
    kind: string;
}
export interface EvaluationGraphResponse extends Record<string, unknown> {
    referentialId: number;
    semester: number;
    semesterId: number;
    currentSemester: number;
    currentSemesterId: number;
    availableSemesters: number[];
    attendedSemesters: Record<string, unknown>[];
    nodes: EvaluationGraphNode[];
    links: EvaluationGraphLink[];
}
export interface RncpSkill extends Record<string, unknown> {
    title: string;
    certificativeValidation: boolean;
    formativeValidation: boolean;
}
export interface RncpBlock extends Record<string, unknown> {
    title: string;
    validationStatus: string;
    skills: RncpSkill[];
}
export interface RncpValidationResponse extends Record<string, unknown> {
    login: string;
    city: string;
    promo: number;
    validationStatus: string;
    blocks: RncpBlock[];
}
export interface ExamType extends Record<string, unknown> {
    id: number;
    label: string;
    type: string;
    maxMark: number;
    isSelfAssessment: boolean;
    schoolYear: number;
}
export type ExamDerogation = Record<string, unknown>;
//# sourceMappingURL=evaluation.d.ts.map
