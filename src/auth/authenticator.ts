import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { AuthRefreshResponse } from "../interfaces/auth/auth-refresh-response.js";
import type { VerifyResponse } from "../interfaces/auth/verify-response.js";

const validateAuthRefreshResponse = typia.createValidate<AuthRefreshResponse>();

const validateVerifyResponse = typia.createValidate<VerifyResponse>();

/**
 * Handles authentication tokens and authentication-related API requests.
 *
 * Authentication request details are delegated to {@link ApiClient}, which
 * automatically collects request metadata, parses JSON responses, and
 * validates response structures with typia.
 */
export class Authenticator extends ApiClient {
    /** Current refresh token, when available. */
    public refreshToken: string | null;

    /**
     * Creates an authenticator.
     *
     * @param accessToken Initial access token.
     * @param refreshToken Initial refresh token.
     */
    constructor(
        accessToken: string | null = null,
        refreshToken: string | null = null
    ) {
        super(accessToken);
        this.refreshToken = refreshToken;
    }

    /**
     * Gets or replaces the current access token.
     */
    public get accessToken(): string | null {
        return this.getAccessToken();
    }

    public set accessToken(accessToken: string | null) {
        this.setAccessToken(accessToken);
    }

    /**
     * Returns the authorization header for authenticated requests.
     *
     * @returns The Bearer authorization header.
     * @throws Error if no access token is available.
     */
    public getAuthorizationHeader(): Record<string, string> {
        return this.authHeaders();
    }

    /**
     * Refreshes the current authentication tokens.
     *
     * @returns Detailed information about the refresh request and the new tokens.
     */
    public async refresh(): Promise<ApiResult<AuthRefreshResponse>> {
        if (this.refreshToken === null) {
            return this.createFailure(
                "No refresh token provided",
                "POST",
                "auth/refresh"
            );
        }

        const result = await this.postJson(
            "auth/refresh",
            validateAuthRefreshResponse,
            {
                authenticated: false,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    refresh_token: this.refreshToken,
                }),
            },
            [200, 201]
        );

        if (!result.success) {
            this.clear();
            return result;
        }

        this.accessToken = result.data.access_token;
        this.refreshToken = result.data.refresh_token;

        return result;
    }

    /**
     * Verifies the current access token and returns the authenticated user's
     * information.
     *
     * @returns Detailed information about the verification request.
     */
    public async verify(): Promise<ApiResult<VerifyResponse>> {
        return this.getJson(
            "auth/verify",
            validateVerifyResponse,
            {},
            [200, 304]
        );
    }

    /**
     * Clears both authentication tokens.
     */
    public clear(): void {
        this.accessToken = null;
        this.refreshToken = null;
    }
}
