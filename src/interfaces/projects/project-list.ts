import type { PaginationMeta } from "../api/pagination-meta.js";
import type { CampusSummary } from "../common/campus-summary.js";
import type { SemesterSummary } from "../common/semester-summary.js";
import type { StaffContact } from "../common/staff-contact.js";

export interface ProjectListUnitInstance {
    campus: CampusSummary;
    campuses: CampusSummary[];
    campusTimezone: string;
    code: string;
    cursusInstantiationLaunchId: unknown;
    cursusInstantiationPlanGroupId: unknown;
    description: string;
    endDate: string;
    endRegistrationDate: string;
    id: number;
    instanceNumber: number;
    name: string;
    responsibles: StaffContact[];
    schoolYear: number;
    semester: number;
    semesters: SemesterSummary[];
    startDate: string;
    timezone: string;
    unitCode: string;
    unitSchoolYear: number;
    weekOffset: number;
}

export interface ProjectListDataItem {
    alertsCount: number;
    description: string;
    endDate: string;
    endRegistrationDate: string;
    fullName: string;
    gradingScaleForTASId: unknown;
    gradingScaleId: unknown;
    groupSizeMax: number;
    groupSizeMin: number;
    hasStaffStorage: boolean;
    hasStudentStorage: boolean;
    id: number;
    isUserRegistered: boolean;
    name: string;
    peerEvaluation: boolean;
    projectTemplateId: number;
    randomGroups: boolean;
    registrations: unknown[];
    registrationsCount: number;
    repoEnabled: boolean;
    schoolYear: number;
    startDate: string;
    studentStorageAvailableAt: unknown;
    unitInstance: ProjectListUnitInstance;
    unitInstanceId: number;
    unitRegistrationsCount: number;
}

/**
 * Response of `GET units/instances/projects`.
 */
export interface ProjectListResponse {
    data: ProjectListDataItem[];
    meta: PaginationMeta;
}
