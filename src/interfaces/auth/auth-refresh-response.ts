/**
 * Represents the tokens returned by the authentication refresh endpoint.
 */
export interface AuthRefreshResponse {
    access_token: string;
    refresh_token: string;
}
