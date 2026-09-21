import type { PaginationMeta } from "../api/pagination-meta.js";
import type { CampusSummary } from "../common/campus-summary.js";
import type { SemesterSummary } from "../common/semester-summary.js";
import type { StaffContact } from "../common/staff-contact.js";

export interface UnitInstanceListDataItem {
    campus?: CampusSummary;
    campuses: CampusSummary[];
    campusTimezone: string;
    code: string;
    cursusInstantiationLaunchId: number | null;
    cursusInstantiationPlanGroupId: number | null;
    endDate: string;
    endRegistrationDate: string;
    id: number;
    instanceNumber: number;
    isRegistered: boolean;
    name: string;
    registrationsCount: number;
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

/**
 * Response of `GET units/instances`.
 */
export interface UnitInstanceListResponse {
    data: UnitInstanceListDataItem[];
    meta: PaginationMeta;
}
