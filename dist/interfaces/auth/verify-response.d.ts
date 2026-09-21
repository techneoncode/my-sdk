/**
 * Represents a city returned by the authentication verification endpoint.
 */
export interface VerifyResponseCityItem {
    code: string;
    id: number;
    name: string;
}
/**
 * Represents the authenticated user information returned by the verification endpoint.
 */
export interface VerifyResponse {
    cities: VerifyResponseCityItem[];
    cursus: string;
    cursusSchoolYear: number;
    firstname: string;
    lastname: string;
    login: string;
    promotion: number;
    roles: string[];
    semester: number;
    semesterId: number;
    tekYear: number;
}
//# sourceMappingURL=verify-response.d.ts.map
