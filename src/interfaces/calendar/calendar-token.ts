export interface CalendarTokenEdsquare {
    avatar_signature: string;
    contacts_signature: string;
    id: number;
}

export interface CalendarTokenReferents {
    checkedAt: string;
}

export interface CalendarTokenMetadata {
    edsquare: CalendarTokenEdsquare;
    referents: CalendarTokenReferents;
}

export interface CalendarTokenStudent {
    campusId: number;
    civility: string;
    firstname: string;
    id: string;
    ionisId: string;
    isRepeating: boolean;
    lastname: string;
    login: string;
    metadata: CalendarTokenMetadata;
    pedagoStatus: string;
    promotion: number;
    semesterId: number;
    specialtyId: unknown;
    status: string;
}

/**
 * Response of `GET calendar_token`.
 */
export interface CalendarTokenResponse {
    id: number;
    staff: unknown;
    staffId: unknown;
    student: CalendarTokenStudent;
    studentId: string;
    token: string;
}
