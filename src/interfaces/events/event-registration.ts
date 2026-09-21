/**
 * Response of `POST events/{eventId}/registrations`.
 */
export interface EventRegistrationResponse {
    createdAt: string;
    eventId: number;
    id: number;
    registeredBy: string | null;
    studentId: string;
    updatedAt: string;
}
