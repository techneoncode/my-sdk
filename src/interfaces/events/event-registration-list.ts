export interface EventRegistrationListStudent {
    civility: string;
    firstname: string;
    isForecast: boolean;
    isRepeating: boolean;
    lastname: string;
    login: string;
    promotion: number;
    specialty: unknown;
}

export interface EventRegistrationListResponseItem {
    createdAt: string;
    eventId: number;
    id: number;
    registeredBy: string | null;
    student: EventRegistrationListStudent;
}

/**
 * Response of `GET events/{eventId}/registrations`.
 */
export type EventRegistrationListResponse = EventRegistrationListResponseItem[];
