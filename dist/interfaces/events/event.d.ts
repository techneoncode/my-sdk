export interface Event extends Record<string, unknown> {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    activityName: string;
    isExam: boolean;
}
export type AttendanceActivity = Record<string, unknown>;
export type EventSlot = Record<string, unknown>;
export type EventRegistration = Record<string, unknown>;
export type EventMark = Record<string, unknown>;
export type Calendar = Record<string, unknown>;
export interface EventAttendance extends Record<string, unknown> {
    eventId: number;
    status: string;
}
export interface CalendarToken extends Record<string, unknown> {
    token: string;
}
export interface Floor extends Record<string, unknown> {
    id: number;
    name: string;
}
export interface Room extends Record<string, unknown> {
    id: number;
    name: string;
    capacity: number;
    campusId: number;
}
//# sourceMappingURL=event.d.ts.map
