/**
 * Response returned by GET /students/profile.
 *
 * Add the exact fields exposed by My here as the API is documented/verified.
 */
export interface UserProfileResponse {
    diploma: unknown;
    login: string;
    firstname: string;
    lastname: string;
    campus: {
        name: string;
        [key: string]: unknown;
    };
    cursus: {
        name: string;
        [key: string]: unknown;
    };
    promotion: number | string;
    speciality?: string | null;
    [key: string]: unknown;
}
