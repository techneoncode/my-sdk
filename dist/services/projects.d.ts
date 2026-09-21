import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type {
    PaginatedResponse,
    ProjectAchievement,
    ProjectActivity,
    ProjectCloud,
    ProjectInstance,
    ProjectRegistrationInvitation,
    ProjectTestResult,
    UnitInstance,
    UnitRegistration,
} from "../interfaces/projects/project.js";
export interface ProjectQuery {
    page?: number;
    limit?: number;
    status?: string;
    registeredOnly?: boolean;
    cursus?: string[];
    schoolYear?: number;
}
export declare class Projects extends ApiClient {
    getProjectInstances(
        query?: ProjectQuery
    ): Promise<ApiResult<ProjectInstance[]>>;
    getInstanceSchoolYears(): Promise<ApiResult<number[]>>;
    getUnitInstances(
        schoolYear: number,
        expanded?: boolean
    ): Promise<ApiResult<PaginatedResponse<UnitInstance>>>;
    getUnitInstance(
        schoolYear: number,
        unitCode: string,
        unitInstanceCode: string,
        expanded?: boolean
    ): Promise<ApiResult<UnitInstance>>;
    getRegistrationInvitations(): Promise<
        ApiResult<ProjectRegistrationInvitation[]>
    >;
    getProject(
        schoolYear: number,
        unitCode: string,
        unitInstanceCode: string,
        projectId: number
    ): Promise<ApiResult<ProjectInstance>>;
    getProjectTestResults(
        projectId: number
    ): Promise<ApiResult<ProjectTestResult[]>>;
    getProjectAchievements(
        schoolYear: number,
        unitCode: string,
        unitInstanceCode: string,
        projectId: number
    ): Promise<ApiResult<ProjectAchievement[]>>;
    getProjectActivities(
        projectId: number
    ): Promise<ApiResult<ProjectActivity[]>>;
    getProjectCloud(projectId: number): Promise<ApiResult<ProjectCloud>>;
    getUnitRegistrations(
        schoolYear: number,
        unitCode: string,
        unitInstanceCode: string
    ): Promise<ApiResult<UnitRegistration[]>>;
}
//# sourceMappingURL=projects.d.ts.map
