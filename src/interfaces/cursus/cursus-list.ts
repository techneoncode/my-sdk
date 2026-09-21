export interface CursusListAttendanceRangeItem {
    createdAt: string;
    cursusId: number;
    from: string;
    holidayZone: string | null;
    id: number;
    name: string | null;
    tekYear: number;
    to: string;
    type: string;
    updatedAt: string;
}

export interface CursusListExamRequirementItem {
    createdAt: string;
    cursusId: number;
    examLineageKey: string;
    id: number;
    requiredScore: number;
    tekYear: number;
    updatedAt: string;
}

export interface CursusListExpectedRncpBlockItem {
    blockLineageKey: string;
    createdAt: string;
    cursusId: number;
    id: number;
    optionGroup: number | null;
    requirement: string;
    tekYear: number;
    updatedAt: string;
}

export interface CursusListFeatures {
    createdAt: string;
    cursusId: number;
    edsquareHalfDaysEnabled: boolean;
    gamificationEnabled: boolean;
    halfDayAfternoonEnd: unknown;
    halfDayAfternoonStart: unknown;
    halfDayLabel: string | null;
    halfDayMorningEnd: unknown;
    halfDayMorningStart: unknown;
    id: number;
    logTimeEnabled: boolean;
    rncpEnabled: boolean;
    rncpReferentialId: number | null;
    tooManyAbsencesEnabled: boolean;
    tooManyAbsencesStartDate: string | null;
    updatedAt: string;
}

export interface CursusListGradesConfig {
    createdAt: string;
    cursusId: number;
    gradeARequireAllLearningOutcomes: boolean;
    gradeAThreshold: number;
    gradeBRequireAllLearningOutcomes: boolean;
    gradeBThreshold: number;
    gradeCRequireAllLearningOutcomes: boolean;
    gradeCThreshold: number;
    gradeDRequireAllLearningOutcomes: boolean;
    gradeDThreshold: number;
    id: number;
    updatedAt: string;
}

export interface CursusListCampusOverrideItem {
    createdAt: string;
    cursusMappingId: number;
    id: number;
    sourceCampusId: number | null;
    targetCampusId: number;
    updatedAt: string;
}

export interface CursusListMappingItem {
    campusOverrides: CursusListCampusOverrideItem[];
    createdAt: string;
    cursusId: number;
    id: number;
    mappingCode: string;
    updatedAt: string;
}

export interface CursusListPromotionMappingItem {
    createdAt: string;
    cursusId: number;
    id: number;
    mappingCode: string;
    promotion: number;
    updatedAt: string;
}

export interface CursusListReferential {
    createdAt: string;
    id: number;
    isEnabled: boolean;
    lineageKey: string;
    schoolYear: number;
    slug: string;
    title: string;
    updatedAt: string;
}

export interface CursusListSemesterItem {
    createdAt: string;
    creditsAlertThreshold: number;
    cursusId: number;
    id: number;
    num: number;
    referential: CursusListReferential | null;
    referentialId: number | null;
    startWeek: number;
    tekYear: number;
    updatedAt: string;
    yearPlusOne: boolean;
}

export interface CursusListSpecialtyItemSemesterItem {
    createdAt: string;
    creditsAlertThreshold: number;
    cursusId: number;
    id: number;
    num: number;
    referentialId: number | null;
    startWeek: number;
    tekYear: number;
    updatedAt: string;
    yearPlusOne: boolean;
}

export interface CursusListSpecialtyItem {
    createdAt: string;
    cursusId: number;
    id: number;
    name: string;
    semesters: CursusListSpecialtyItemSemesterItem[];
    sortOrder: number;
    updatedAt: string;
}

export interface CursusListYearConfigItem {
    attendancePlanFrom: string | null;
    attendancePlanTo: string | null;
    createdAt: string;
    cursusId: number;
    id: number;
    label: string | null;
    requiresEnrollment: boolean;
    tekYear: number;
    updatedAt: string;
}

export interface CursusListResponseItem {
    attendanceRanges: CursusListAttendanceRangeItem[];
    code: string;
    createdAt: string;
    description: string;
    durationInYears: number;
    examRequirements: CursusListExamRequirementItem[];
    expectedRncpBlocks: CursusListExpectedRncpBlockItem[];
    features: CursusListFeatures;
    gradesConfig: CursusListGradesConfig | null;
    id: number;
    isActive: boolean;
    iseePromotionOnCursusFrame: boolean;
    mappings: CursusListMappingItem[];
    name: string;
    promotionMappings: CursusListPromotionMappingItem[];
    repositoryUrl: string;
    responsibleStaffs: unknown[];
    schoolYear: number;
    semesters: CursusListSemesterItem[];
    specialties: CursusListSpecialtyItem[];
    updatedAt: string;
    yearConfigs: CursusListYearConfigItem[];
}

/**
 * Response of `GET cursus`.
 */
export type CursusListResponse = CursusListResponseItem[];
