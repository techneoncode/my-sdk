export interface ELearningChapter extends Record<string, unknown> {
    id: number;
    title: string;
}
export interface ELearningModule extends Record<string, unknown> {
    id: number;
    title: string;
    chapters: ELearningChapter[];
}
export interface ELearningCategory extends Record<string, unknown> {
    id: number;
    title: string;
    modules: ELearningModule[];
}
export interface ELearningOverview {
    categories: ELearningCategory[];
}
export interface SignedUrlResponse {
    url: string;
}
//# sourceMappingURL=e-learning.d.ts.map
