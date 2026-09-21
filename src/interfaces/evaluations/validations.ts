export interface EvaluationValidationsAttendedSemesterItem {
    cursusId: number;
    schoolYear: number;
    semesterId: number;
    semesterNum: number;
}

export interface EvaluationValidationsLearningOutcomeItem {
    acquiredPoints: number;
    id: number;
    isMaxLevel: boolean;
    isValidated: boolean;
    level: number;
    levelPercent: number;
    score: number;
    title: string;
    titleFr: string;
    totalPoints: number;
}

export interface EvaluationValidationsBlockItem {
    alertLevel?: string;
    allLearningOutcomesValidated: boolean;
    averageScore: number;
    credits: number;
    grade: string;
    hasOpportunity: boolean;
    icon: string;
    id: number;
    learningOutcomes: EvaluationValidationsLearningOutcomeItem[];
    projectedGrade: string;
    title: string;
    titleFr: string;
    totalCount: number;
    validatedCount: number;
}

export interface EvaluationValidationsCompetencyBlockItem {
    alertLevel: string;
    availableCredits: number;
    blockIds: number[];
    color: string;
    id: number;
    name: string;
    nameFr: string;
    reachableCredits: number;
    secureCredits: number;
    threshold: number;
    validatedCredits: number;
}

/**
 * Response of `GET evaluations/validations/me`.
 */
export interface EvaluationValidationsResponse {
    acquiredCredits: number;
    attendedSemesters: EvaluationValidationsAttendedSemesterItem[];
    availableSemesters: number[];
    blocks: EvaluationValidationsBlockItem[];
    competencyBlocks: EvaluationValidationsCompetencyBlockItem[];
    currentSemester: number;
    currentSemesterId: number;
    cursusId: number;
    priorCredits: number;
    referentialId: number;
    semester: number;
    semesterId: number;
    totalAcquiredCredits: number;
    unassignedBlockIds: unknown[];
    viewedSemesterId: number;
}
