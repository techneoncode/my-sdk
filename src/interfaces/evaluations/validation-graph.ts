export interface EvaluationValidationGraphAttendedSemesterItem {
    cursusCode: string;
    cursusId: number;
    referentialId: number;
    schoolYear: number;
    semesterId: number;
    semesterNum: number;
    tekYear: number;
}

export interface EvaluationValidationGraphMeta {
    achievementCount: number;
    availableAchievementsCount: number;
    completedAchievementsCount: number;
    inProgressAchievementsCount: number;
}

export interface EvaluationValidationGraphLinkItem {
    id: string;
    kind: string;
    meta?: EvaluationValidationGraphMeta;
    source: string;
    target: string;
    weight: number;
}

export interface EvaluationValidationGraphExamMeta {
    bestMark: number;
    examTypeId: number;
    maxMark: number;
    sessions: unknown[];
}

export interface EvaluationValidationGraphNodeItemMeta {
    achievementCount: number;
    availableAchievementsCount: number;
    completedAchievementsCount: number;
    hasValidationLinks: boolean;
    inProgressAchievementsCount: number;
    projectId: number;
    schoolYear: number;
    studentRegistrationStatus: string;
    unitCode: string;
    unitInstanceCode: string;
}

export interface EvaluationValidationGraphNodeItem {
    alertLevel?: string;
    allLearningOutcomesValidated?: boolean;
    averageScore?: number;
    credits?: number;
    entityId: number;
    examMeta?: EvaluationValidationGraphExamMeta;
    grade?: string;
    id: string;
    isValidated?: boolean;
    kind: string;
    label: string;
    labelFr?: string;
    level?: number;
    levelPercent?: number;
    meta?: EvaluationValidationGraphNodeItemMeta;
    score?: number;
    status: string;
    subtitle?: string;
}

/**
 * Response of `GET evaluations/validations/graph/me`.
 */
export interface EvaluationValidationGraphResponse {
    attendedSemesters: EvaluationValidationGraphAttendedSemesterItem[];
    availableSemesters: number[];
    currentSemester: number;
    currentSemesterId: number;
    links: EvaluationValidationGraphLinkItem[];
    nodes: EvaluationValidationGraphNodeItem[];
    referentialId: number;
    semester: number;
    semesterId: number;
}
