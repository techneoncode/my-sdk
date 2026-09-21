import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { AuthRefreshResponse } from "../interfaces/auth/auth-refresh-response.js";
import type { VerifyResponse } from "../interfaces/auth/verify-response.js";
/**
 * Handles authentication tokens and authentication-related API requests.
 *
 * Authentication request details are delegated to {@link ApiClient}, which
 * automatically collects request metadata, parses JSON responses, and
 * validates response structures with typia.
 */
export declare class Authenticator extends ApiClient {
    /** Current refresh token, when available. */
    refreshToken: string | null;
    /**
     * Creates an authenticator.
     *
     * @param accessToken Initial access token.
     * @param refreshToken Initial refresh token.
     */
    constructor(accessToken?: string | null, refreshToken?: string | null);
    /**
     * Gets or replaces the current access token.
     */
    get accessToken(): string | null;
    set accessToken(accessToken: string | null);
    /**
     * Returns the authorization header for authenticated requests.
     *
     * @returns The Bearer authorization header.
     * @throws Error if no access token is available.
     */
    getAuthorizationHeader(): Record<string, string>;
    /**
     * Refreshes the current authentication tokens.
     *
     * @returns Detailed information about the refresh request and the new tokens.
     */
    refresh(): Promise<ApiResult<AuthRefreshResponse>>;
    /**
     * Verifies the current access token and returns the authenticated user's
     * information.
     *
     * @returns Detailed information about the verification request.
     */
    verify(): Promise<ApiResult<VerifyResponse>>;
    /**
     * Clears both authentication tokens.
     */
    clear(): void;
}
//# sourceMappingURL=authenticator.d.ts.map
