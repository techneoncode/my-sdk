export interface ExamTypeListResponseItem {
    createdAt: string;
    deletedAt: unknown;
    id: number;
    isSelfAssessment: boolean;
    label: string;
    lineageKey: string;
    maxMark: number;
    schoolYear: number;
    type: string;
    updatedAt: string;
}

/**
 * Response of `GET config/exam-types`.
 */
export type ExamTypeListResponse = ExamTypeListResponseItem[];
