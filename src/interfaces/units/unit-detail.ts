import type { CampusSummary } from "../common/campus-summary.js";
import type { SemesterSummary } from "../common/semester-summary.js";
import type { StaffContact } from "../common/staff-contact.js";

export interface UnitDetailActivitySeries {
    createdAt: string;
    endDate: string;
    frequency: string;
    id: number;
    startDate: string;
    templateSeriesId: number | null;
    unitInstanceId: number;
    unitTemplateId: unknown;
    updatedAt: string;
}

export interface UnitDetailMetadata {
    evaluationType: string;
}

export interface UnitDetailActivityTemplate {
    activitySeriesId: number | null;
    createdAt: string;
    description: string;
    duration: number;
    endDate: string;
    examTypeId: number | null;
    gradingScaleId: unknown;
    id: number;
    mandatory: boolean;
    metadata: UnitDetailMetadata;
    name: string;
    peerEvaluation: boolean;
    peerEvaluationGlobal: boolean;
    peerEvaluationsToReceive: unknown;
    projectTemplateId: unknown;
    registrationDeadlineHours: unknown;
    simpleMark: boolean;
    slots: boolean;
    staffStorageRootId: unknown;
    startDate: string;
    studentStorageRootId: unknown;
    unitTemplateId: number;
    updatedAt: string;
}

export interface UnitDetailEdsquare {
    planningEventGroupId: number;
}

export interface UnitDetailActivityInstanceItemMetadata {
    edsquare?: UnitDetailEdsquare;
    evaluationType: string;
}

export interface UnitDetailActivityInstanceItem {
    activitySeries: UnitDetailActivitySeries | null;
    activitySeriesId: number | null;
    activityTemplate: UnitDetailActivityTemplate | null;
    activityTemplateId: number | null;
    createdAt: string;
    description: string;
    duration: number;
    endDate: string;
    examTypeId: number | null;
    gradingScaleId: unknown;
    id: number;
    mandatory: boolean;
    metadata: UnitDetailActivityInstanceItemMetadata;
    name: string;
    peerEvaluation: boolean;
    peerEvaluationClosedAt: unknown;
    peerEvaluationGlobal: boolean;
    peerEvaluationsToReceive: unknown;
    plannableSessions: number;
    projectInstanceId: unknown;
    registrationDeadlineHours: unknown;
    simpleMark: boolean;
    slots: boolean;
    startDate: string;
    unitInstanceId: number;
    updatedAt: string;
}

/**
 * Response of `GET units/{schoolYear}/{unitCode}/{instanceCode}`.
 */
export interface UnitDetailResponse {
    accessLevel: string;
    activityInstances: UnitDetailActivityInstanceItem[];
    campus: CampusSummary;
    campuses: CampusSummary[];
    campusTimezone: string;
    code: string;
    cursusInstantiationLaunchId: number;
    cursusInstantiationPlanGroupId: number;
    description: string;
    endDate: string;
    endRegistrationDate: string;
    guestCampuses: unknown[];
    id: number;
    instanceNumber: number;
    name: string;
    projectInstances: unknown[];
    responsibles: StaffContact[];
    schoolYear: number;
    semester: number;
    semesters: SemesterSummary[];
    specialties: unknown[];
    startDate: string;
    templateResponsibleStaffs: unknown[];
    timezone: string;
    unitCode: string;
    unitSchoolYear: number;
    weekOffset: number;
}
