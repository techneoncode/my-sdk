export interface ELearningOverviewModuleItem {
    chapterCount: number;
    dismissed: boolean;
    id: number;
    title: string;
    viewedCount: number;
}

export interface ELearningOverviewTagItem {
    id: number;
    name: string;
}

export interface ELearningOverviewResponseItem {
    id: number;
    imageUrl: unknown;
    modules: ELearningOverviewModuleItem[];
    tags: ELearningOverviewTagItem[];
    title: string;
}

/**
 * Response of `GET e-learning/overview`.
 */
export type ELearningOverviewResponse = ELearningOverviewResponseItem[];
