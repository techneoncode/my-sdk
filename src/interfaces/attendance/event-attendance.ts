/**
 * Response of `GET events/{eventId}/attendance/me`.
 */
export interface EventAttendanceResponse {
    createdAt: string;
    eventId: number;
    id: number;
    reason: unknown;
    satisfactionAnonymous: boolean;
    satisfactionComment: unknown;
    satisfactionRating: unknown;
    satisfactionSubmittedAt: unknown;
    status: string;
    studentId: string;
    updatedAt: string;
    updatedBy: string;
}
