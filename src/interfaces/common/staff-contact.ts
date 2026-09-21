/**
 * A staff member (instructor, unit responsible...) embedded in other responses.
 */
export interface StaffContact {
    externalId?: number;
    firstname: string;
    lastname: string;
    login: string;
    type: string;
}
