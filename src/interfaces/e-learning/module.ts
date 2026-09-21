export interface ELearningModuleChapterItem {
    contentType: string;
    hasDocument: boolean;
    id: number;
    position: number;
    subtitleLanguages: unknown[];
    title: string;
    viewed: boolean;
}

/**
 * Response of `GET e-learning/modules/{moduleId}`.
 */
export interface ELearningModuleResponse {
    categoryId: number;
    categoryTitle: string;
    chapters: ELearningModuleChapterItem[];
    id: number;
    tags: unknown[];
    title: string;
}
