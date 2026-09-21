export interface ProjectInstance extends Record<string, unknown> {
    id: number;
    name: string;
    code: string;
}
export interface UnitInstance extends Record<string, unknown> {
    id: number;
    code: string;
}
export interface PaginatedResponse<T> {
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        pages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}
export type ProjectRegistrationInvitation = Record<string, unknown>;
export type ProjectTestResult = Record<string, unknown>;
export type ProjectAchievement = Record<string, unknown>;
export type ProjectActivity = Record<string, unknown>;
export type UnitRegistration = Record<string, unknown>;
export interface ProjectCloud extends Record<string, unknown> {
    projectName: string;
    groupName: string;
}
//# sourceMappingURL=project.d.ts.map
