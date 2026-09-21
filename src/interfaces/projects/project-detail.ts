import type { SemesterSummary } from "../common/semester-summary.js";
import type { StaffContact } from "../common/staff-contact.js";

export interface ProjectDetailMetadata {
    slug: string;
}

export interface ProjectDetailProjectTemplate {
    contentRepositoryUrl: unknown;
    createdAt: string;
    description: string;
    endDate: string;
    endRegistrationDate: string;
    gradingScaleForTASId: unknown;
    gradingScaleId: unknown;
    groupSizeMax: number;
    groupSizeMin: number;
    id: number;
    metadata: ProjectDetailMetadata;
    name: string;
    peerEvaluation: boolean;
    randomGroups: boolean;
    repoEnabled: boolean;
    slug: unknown;
    staffDescription: string;
    startDate: string;
    studentStorageAvailableAt: unknown;
    unitCode: unknown;
    unitName: unknown;
    unitTemplateId: number;
    updatedAt: string;
}

export interface ProjectDetailLeader {
    campusId: number;
    civility: string | null;
    cursus: unknown;
    firstname: string;
    id: string;
    isRepeating: boolean;
    lastname: string;
    login: string;
    promotion: number;
    semesterId: number;
    specialtyId: number | null;
    status: string;
}

export interface ProjectDetailMemberItem {
    firstname: string;
    id: number;
    lastname: string;
    login: string;
    promotion: number;
    status: string;
}

export interface ProjectDetailRegistrationItem {
    groupName: string;
    id: number;
    leader: ProjectDetailLeader;
    leaderLogin: string;
    members: ProjectDetailMemberItem[];
}

export interface ProjectDetailTemplateResponsibleStaffItem {
    firstname: string;
    lastname: string;
    login: string;
    preferences: Record<string, unknown>;
    roles: string[];
}

export interface ProjectDetailUnitInstance {
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
    templateResponsibleStaffs: ProjectDetailTemplateResponsibleStaffItem[];
    timezone: string;
    unitCode: string;
    unitSchoolYear: number;
    weekOffset: number;
}

/**
 * Response of `GET units/{schoolYear}/{unitCode}/{instanceCode}/projects/{projectId}`.
 */
export interface ProjectDetailResponse {
    accessLevel: string;
    canManageResourceOverride: boolean;
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
    name: string;
    peerEvaluation: boolean;
    projectTemplate: ProjectDetailProjectTemplate;
    projectTemplateId: number;
    randomGroups: boolean;
    registrations: ProjectDetailRegistrationItem[];
    repoEnabled: boolean;
    schoolYear: number;
    startDate: string;
    studentStorageAvailableAt: unknown;
    unitInstance: ProjectDetailUnitInstance;
    unitInstanceId: number;
}
