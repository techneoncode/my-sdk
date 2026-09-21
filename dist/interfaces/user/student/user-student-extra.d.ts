export interface StudentFieldsVisibilityResponse {
    logTime: boolean;
    exams: boolean;
    rncp: boolean;
}
export interface StudentGithubStatsResponse {
    c: number;
    a: number;
    d: number;
}
export interface StudentPhotoUrl {
    login: string;
    url: string;
}
export interface StudentProjectAbsence extends Record<string, unknown> {
    projectInstanceId: number;
    projectName: string;
    login: string;
    absenceRatio: number;
}
export type StudentFollowUp = Record<string, unknown>;
export type StudentDocument = Record<string, unknown>;
export type StudentCollaborator = Record<string, unknown>;
export type StudentTestResult = Record<string, unknown>;
export interface StudentTestResultsResponse {
    results: StudentTestResult[];
}
//# sourceMappingURL=user-student-extra.d.ts.map
