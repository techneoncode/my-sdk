import type { StaffContact } from "../common/staff-contact.js";

export interface EventListAttendance {
    active: boolean;
    intervalSeconds: number;
    validSeconds: number;
}

export interface EventListEdsquare {
    planningEventId: number;
}

export interface EventListMoodleQuiz {
    quizId: number;
}

export interface EventListMetadata {
    attendance?: EventListAttendance;
    edsquare?: EventListEdsquare;
    moodleExternalId?: number;
    moodleQuiz?: EventListMoodleQuiz;
}

export interface EventListRoomItem {
    campusId: number;
    capacity: number;
    createdAt: string;
    floorId: number;
    id: number;
    name: string;
    officeMode: boolean;
    studentsAllowed: boolean;
    updatedAt: string;
}

export interface EventListResponseItem {
    activityDescription: string;
    activityDuration: number;
    activityEndDate: string;
    activityGradingScaleAllowMultipleEvaluators: boolean;
    activityGradingScaleId: unknown;
    activityGradingScaleMarkType: unknown;
    activityInstanceId: number;
    activityName: string;
    activitySlotsEnabled: boolean;
    activityStartDate: string;
    assessmentsClosed: boolean;
    attendanceActive: boolean;
    attendanceOpen: boolean;
    calendarDisplayedInRoomViews: boolean;
    calendarId: unknown;
    endDate: string;
    eventSeries: unknown;
    eventSeriesId: unknown;
    fullTitle: string;
    hasStaffStorage: boolean;
    hasStudentStorage: boolean;
    id: number;
    instructors: StaffContact[];
    isCalendarEvent: boolean;
    isExam: boolean;
    isException: boolean;
    maxCapacity?: number;
    maxRegistrations: unknown;
    metadata: EventListMetadata | null;
    moodleQuizUrl?: string;
    mySlotEndDate?: unknown;
    mySlotStartDate?: unknown;
    peerEvaluation: boolean;
    projectInstanceId: unknown;
    recurrenceOverrides: unknown;
    registrationsCount: number;
    roomIds: number[];
    rooms: EventListRoomItem[];
    schoolYear: number;
    sequentialSlots: boolean;
    sequentialSlotsDescending: boolean;
    sessionLeader: unknown;
    sessionLeaderLogin: unknown;
    simpleRegistrationsCount: number;
    slotRegistrationsCount: number;
    startDate: string;
    title: string;
    unitCode: string;
    unitInstanceCode: string;
    unitInstanceId: number;
    unitName: string;
}

/**
 * Response of `GET events`.
 */
export type EventListResponse = EventListResponseItem[];
