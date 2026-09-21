export interface UnitRegistrationListEdsquare {
    avatar_signature?: string;
    contacts_signature?: string;
    contract_type?: string;
    id: number;
    tutor_company?: string;
    tutor_email?: string;
    tutor_firstname?: string;
    tutor_lastname?: string;
    tutor_phone?: string;
}

export interface UnitRegistrationListReferents {
    checkedAt: string;
}

export interface UnitRegistrationListMetadata {
    edsquare?: UnitRegistrationListEdsquare;
    referents?: UnitRegistrationListReferents;
}

export interface UnitRegistrationListStudent {
    campusId: number;
    civility: string | null;
    firstname: string;
    id: string;
    ionisId: string;
    isRepeating: boolean;
    lastname: string;
    login: string;
    metadata: UnitRegistrationListMetadata;
    pedagoStatus: string | null;
    promotion: number;
    semesterId: number;
    specialtyId: number | null;
    status: string;
}

export interface UnitRegistrationListUnitTemplate {
    code: string;
    createdAt: string;
    deletedAt: unknown;
    description: string;
    endDate: string;
    endRegistrationDate: string;
    forceRegistration: boolean;
    id: number;
    mandatory: boolean;
    name: string;
    repoLink: string;
    schoolYear: number;
    startDate: string;
    updatedAt: string;
}

export interface UnitRegistrationListUnitInstance {
    code: string;
    createdAt: string;
    cursusInstantiationLaunchId: number;
    cursusInstantiationPlanGroupId: number;
    deletedAt: unknown;
    endDate: string;
    endRegistrationDate: string;
    id: number;
    instanceNumber: number;
    schoolYear: number;
    startDate: string;
    timezone: string;
    unitTemplate: UnitRegistrationListUnitTemplate;
    unitTemplateId: number;
    updatedAt: string;
    weekOffset: number;
}

export interface UnitRegistrationListResponseItem {
    createdAt: string;
    id: number;
    outOfScope: boolean;
    registeredBy: string;
    student: UnitRegistrationListStudent;
    studentId: string;
    unitInstance: UnitRegistrationListUnitInstance;
    unitInstanceId: number;
}

/**
 * Response of `GET units/{schoolYear}/{unitCode}/{instanceCode}/registrations`.
 */
export type UnitRegistrationListResponse = UnitRegistrationListResponseItem[];
