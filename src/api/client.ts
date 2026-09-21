import { lookup } from "node:dns/promises";
import type { IValidation } from "typia";
import type {
    ApiResult,
    ApiStructureValidation,
} from "../interfaces/api/api-result.js";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type ApiRequestInit = RequestInit & {
    /** Whether the request should automatically include the Bearer token. */
    authenticated?: boolean;
};

type JsonValidator<T> = (input: unknown) => IValidation<T>;

/**
 * Low-level HTTP client shared by the SDK services.
 *
 * This class centralizes request metadata collection, JSON parsing, runtime
 * structure validation, authentication headers, error handling, and response
 * construction so domain services only need to describe the endpoint and
 * expected response type.
 */
export class ApiClient {
    /** Base URL used by the My API. */
    public static readonly BASE_URL = "https://my.epitech.eu/api/";

    /** Bearer token used for authenticated requests. */
    protected token: string | null;

    /**
     * Creates an API client.
     *
     * @param accessToken Bearer token used to authenticate requests.
     */
    constructor(accessToken: string | null = null) {
        this.token = accessToken;
    }

    /**
     * Returns the current access token.
     */
    protected getAccessToken(): string | null {
        return this.token;
    }

    /**
     * Replaces the current access token.
     *
     * @param accessToken New access token, or null to clear it.
     */
    protected setAccessToken(accessToken: string | null): void {
        this.token = accessToken;
    }

    /**
     * Builds the default headers used by authenticated API requests.
     *
     * @throws Error when no access token is available.
     */
    protected authHeaders(): Record<string, string> {
        if (this.token === null) {
            throw new Error("No access token provided");
        }

        return {
            Authorization: `Bearer ${this.token}`,
        };
    }

    /**
     * Performs a GET request and parses the response body as JSON.
     *
     * The request duration, URL, HTTP method, response headers, content type,
     * server address, JSON parsing, runtime structure validation, and
     * authentication headers are handled automatically.
     *
     * @template T Expected JSON response type.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param validator Runtime validator generated for the expected response type.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and typed response data.
     */
    protected async getJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200]
    ): Promise<ApiResult<T>> {
        return this.requestJson(
            "GET",
            endpoint,
            validator,
            options,
            expectedStatuses
        );
    }

    /**
     * Performs a POST request and parses the response body as JSON.
     *
     * @template T Expected JSON response type.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param validator Runtime validator generated for the expected response type.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and typed response data.
     */
    protected async postJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200]
    ): Promise<ApiResult<T>> {
        return this.requestJson(
            "POST",
            endpoint,
            validator,
            options,
            expectedStatuses
        );
    }

    /**
     * Performs a PUT request and parses the response body as JSON.
     *
     * @template T Expected JSON response type.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param validator Runtime validator generated for the expected response type.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and typed response data.
     */
    protected async putJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200]
    ): Promise<ApiResult<T>> {
        return this.requestJson(
            "PUT",
            endpoint,
            validator,
            options,
            expectedStatuses
        );
    }

    /**
     * Performs a PATCH request and parses the response body as JSON.
     *
     * @template T Expected JSON response type.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param validator Runtime validator generated for the expected response type.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and typed response data.
     */
    protected async patchJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200]
    ): Promise<ApiResult<T>> {
        return this.requestJson(
            "PATCH",
            endpoint,
            validator,
            options,
            expectedStatuses
        );
    }

    /**
     * Performs a DELETE request and parses the response body as JSON.
     *
     * @template T Expected JSON response type.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param validator Runtime validator generated for the expected response type.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and typed response data.
     */
    protected async deleteJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200]
    ): Promise<ApiResult<T>> {
        return this.requestJson(
            "DELETE",
            endpoint,
            validator,
            options,
            expectedStatuses
        );
    }

    /**
     * Performs a GET request and returns its body as text.
     *
     * This is useful for endpoints that return URLs or other plain-text payloads
     * instead of JSON.
     *
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and the response body as text.
     */
    protected async getText(
        endpoint: string,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200]
    ): Promise<ApiResult<string>> {
        return this.requestText("GET", endpoint, options, expectedStatuses);
    }

    /**
     * Performs a DELETE request and returns its body as text.
     *
     * This is useful for DELETE endpoints that do not expose a JSON response
     * schema, including endpoints that return an empty body on success.
     *
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and the response body as text.
     */
    protected async deleteText(
        endpoint: string,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200, 204]
    ): Promise<ApiResult<string>> {
        return this.requestText("DELETE", endpoint, options, expectedStatuses);
    }

    /**
     * Performs a GET request and returns its body as a `Blob`.
     *
     * Binary responses do not need typia validation because `Blob` is the
     * concrete runtime representation returned by the Fetch API.
     *
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and the response body as a `Blob`.
     */
    protected async getBlob(
        endpoint: string,
        options: ApiRequestInit = {},
        expectedStatuses: number[] = [200]
    ): Promise<ApiResult<Blob>> {
        return this.requestBlob("GET", endpoint, options, expectedStatuses);
    }

    /**
     * Performs an HTTP request and parses its body as JSON.
     *
     * Typia validation is deliberately supplied by the caller rather than
     * generated from this method's generic `T`. This is required because the
     * response type must be concrete at Typia's transform site.
     *
     * @template T Expected JSON response type.
     * @param method HTTP method used for the request.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param validator Runtime validator generated for the expected response type.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and typed response data.
     */
    private async requestJson<T>(
        method: HttpMethod,
        endpoint: string,
        validator: JsonValidator<T>,
        options: ApiRequestInit,
        expectedStatuses: number[]
    ): Promise<ApiResult<T>> {
        const startedAt = performance.now();
        const url = new URL(endpoint, ApiClient.BASE_URL).toString();
        const { authenticated = true, ...requestOptions } = options;

        try {
            const headers = new Headers(requestOptions.headers);

            if (authenticated) {
                for (const [key, value] of Object.entries(this.authHeaders())) {
                    headers.set(key, value);
                }
            }

            const response = await fetch(url, {
                ...requestOptions,
                method,
                headers,
            });

            return await this.buildJsonResult(
                response,
                startedAt,
                url,
                method,
                validator,
                expectedStatuses
            );
        } catch (error) {
            return this.createRequestFailure(
                error instanceof Error ? error.message : String(error),
                startedAt,
                url,
                method
            );
        }
    }

    /**
     * Performs an HTTP request and returns its body as text.
     *
     * @param method HTTP method used for the request.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and the response body as text.
     */
    private async requestText(
        method: HttpMethod,
        endpoint: string,
        options: ApiRequestInit,
        expectedStatuses: number[]
    ): Promise<ApiResult<string>> {
        const startedAt = performance.now();
        const url = new URL(endpoint, ApiClient.BASE_URL).toString();
        const { authenticated = true, ...requestOptions } = options;

        try {
            const headers = new Headers(requestOptions.headers);

            if (authenticated) {
                for (const [key, value] of Object.entries(this.authHeaders())) {
                    headers.set(key, value);
                }
            }

            const response = await fetch(url, {
                ...requestOptions,
                method,
                headers,
            });

            const delay = Math.round(performance.now() - startedAt);
            const responseHeaders = Object.fromEntries(
                response.headers.entries()
            );
            const contentType = response.headers.get("content-type");
            const address = await ApiClient.resolveAddress(url);
            const expectedStatus = expectedStatuses.includes(response.status);
            const raw = await response.text();

            const expectedStructure: ApiStructureValidation = {
                checked: true,
                valid: expectedStatus,
                errors: [],
            };

            if (!expectedStatus) {
                return {
                    success: false,
                    status: response.status,
                    expectedStatus,
                    expectedStructure,
                    raw,
                    data: null,
                    error: `The request has not responded with an expected status: ${response.status}`,
                    delay,
                    address,
                    url,
                    method,
                    responseHeaders,
                    contentType,
                };
            }

            return {
                success: true,
                status: response.status,
                expectedStatus: true,
                expectedStructure,
                raw,
                data: raw,
                delay,
                address,
                url,
                method,
                responseHeaders,
                contentType,
            };
        } catch (error) {
            return this.createRequestFailure(
                error instanceof Error ? error.message : String(error),
                startedAt,
                url,
                method
            );
        }
    }

    /**
     * Performs an HTTP request and returns its body as a `Blob`.
     *
     * @param method HTTP method used for the request.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     * @param options Additional fetch options.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     * @returns Detailed request metadata and binary response data.
     */
    private async requestBlob(
        method: HttpMethod,
        endpoint: string,
        options: ApiRequestInit,
        expectedStatuses: number[]
    ): Promise<ApiResult<Blob>> {
        const startedAt = performance.now();
        const url = new URL(endpoint, ApiClient.BASE_URL).toString();
        const { authenticated = true, ...requestOptions } = options;

        try {
            const headers = new Headers(requestOptions.headers);

            if (authenticated) {
                for (const [key, value] of Object.entries(this.authHeaders())) {
                    headers.set(key, value);
                }
            }

            const response = await fetch(url, {
                ...requestOptions,
                method,
                headers,
            });

            const delay = Math.round(performance.now() - startedAt);
            const responseHeaders = Object.fromEntries(
                response.headers.entries()
            );
            const contentType = response.headers.get("content-type");
            const address = await ApiClient.resolveAddress(url);
            const expectedStatus = expectedStatuses.includes(response.status);
            const raw = await response.blob();

            const expectedStructure: ApiStructureValidation = {
                checked: true,
                valid: true,
                errors: [],
            };

            if (!expectedStatus) {
                return {
                    success: false,
                    status: response.status,
                    expectedStatus,
                    expectedStructure,
                    raw,
                    data: null,
                    error: `The request has not responded with an expected status: ${response.status}`,
                    delay,
                    address,
                    url,
                    method,
                    responseHeaders,
                    contentType,
                };
            }

            return {
                success: true,
                status: response.status,
                expectedStatus,
                expectedStructure,
                raw,
                data: raw,
                delay,
                address,
                url,
                method,
                responseHeaders,
                contentType,
            };
        } catch (error) {
            return this.createRequestFailure(
                error instanceof Error ? error.message : String(error),
                startedAt,
                url,
                method
            );
        }
    }

    /**
     * Builds the standardized result for a JSON response.
     *
     * @template T Expected JSON response type.
     * @param response HTTP response.
     * @param startedAt Request start timestamp.
     * @param url Requested URL.
     * @param method HTTP method used for the request.
     * @param validator Runtime validator for the expected response type.
     * @param expectedStatuses HTTP statuses considered successful for this call.
     */
    private async buildJsonResult<T>(
        response: Response,
        startedAt: number,
        url: string,
        method: HttpMethod,
        validator: JsonValidator<T>,
        expectedStatuses: number[]
    ): Promise<ApiResult<T>> {
        const delay = Math.round(performance.now() - startedAt);
        const responseHeaders = Object.fromEntries(response.headers.entries());
        const contentType = response.headers.get("content-type");
        const address = await ApiClient.resolveAddress(url);
        const expectedStatus = expectedStatuses.includes(response.status);

        let raw: unknown;

        try {
            raw = await response.json();
        } catch (error) {
            return {
                success: false,
                status: response.status,
                expectedStatus,
                expectedStructure: ApiClient.uncheckedStructure(),
                raw: null,
                data: null,
                error: `The response body is not valid JSON: ${
                    error instanceof Error ? error.message : String(error)
                }`,
                delay,
                address,
                url,
                method,
                responseHeaders,
                contentType,
            };
        }

        const validation = validator(raw);
        const expectedStructure = ApiClient.structureFromValidation(validation);

        if (!expectedStatus) {
            return {
                success: false,
                status: response.status,
                expectedStatus: false,
                expectedStructure,
                raw,
                data: null,
                error: `The request has not responded with an expected status: ${response.status}`,
                delay,
                address,
                url,
                method,
                responseHeaders,
                contentType,
            };
        }

        if (!validation.success) {
            return {
                success: false,
                status: response.status,
                expectedStatus: true,
                expectedStructure,
                raw,
                data: null,
                error: "The response structure does not match the expected TypeScript type.",
                delay,
                address,
                url,
                method,
                responseHeaders,
                contentType,
            };
        }

        return {
            success: true,
            status: response.status,
            expectedStatus: true,
            expectedStructure,
            raw,
            data: validation.data,
            delay,
            address,
            url,
            method,
            responseHeaders,
            contentType,
        };
    }

    /**
     * Converts a typia validation result into the SDK's public structure report.
     */
    private static structureFromValidation<T>(
        validation: IValidation<T>
    ): ApiStructureValidation {
        if (validation.success) {
            return {
                checked: true,
                valid: true,
                errors: [],
            };
        }

        return {
            checked: true,
            valid: false,
            errors: validation.errors,
        };
    }

    /**
     * Returns a structure report for responses that could not be validated.
     */
    private static uncheckedStructure(): ApiStructureValidation {
        return {
            checked: false,
            valid: false,
            errors: [],
        };
    }

    /**
     * Creates a standardized failure for a request that could not be sent.
     *
     * The request metadata is derived automatically from the endpoint and
     * method, so callers do not need to create a timestamp or URL manually.
     *
     * @template T Expected response type.
     * @param error Error message.
     * @param method HTTP method that would have been used.
     * @param endpoint API endpoint relative to {@link BASE_URL}.
     */
    protected async createFailure<T>(
        error: string,
        method: HttpMethod,
        endpoint: string
    ): Promise<ApiResult<T>> {
        const startedAt = performance.now();
        const url = new URL(endpoint, ApiClient.BASE_URL).toString();

        return {
            success: false,
            status: 0,
            expectedStatus: false,
            expectedStructure: ApiClient.uncheckedStructure(),
            raw: null,
            data: null,
            error,
            delay: Math.round(performance.now() - startedAt),
            address: await ApiClient.resolveAddress(url),
            url,
            method,
            responseHeaders: {},
            contentType: null,
        };
    }

    /**
     * Creates a standardized failure after a request has already started.
     *
     * @template T Expected response type.
     * @param error Error message.
     * @param startedAt Request start timestamp.
     * @param url Requested URL.
     * @param method HTTP method used for the request.
     */
    private async createRequestFailure<T>(
        error: string,
        startedAt: number,
        url: string,
        method: HttpMethod
    ): Promise<ApiResult<T>> {
        return {
            success: false,
            status: 0,
            expectedStatus: false,
            expectedStructure: ApiClient.uncheckedStructure(),
            raw: null,
            data: null,
            error,
            delay: Math.round(performance.now() - startedAt),
            address: await ApiClient.resolveAddress(url),
            url,
            method,
            responseHeaders: {},
            contentType: null,
        };
    }

    /**
     * Resolves the address associated with the response hostname.
     *
     * Fetch does not expose the remote socket address. This method therefore
     * resolves the hostname through DNS as a best-effort approximation of the
     * server address. With CDNs, load balancers, or multi-address DNS records,
     * this may not be the exact IP used by the underlying connection.
     */
    private static async resolveAddress(url: string): Promise<string> {
        try {
            const hostname = new URL(url).hostname;
            const result = await lookup(hostname);
            return result.address;
        } catch {
            return "";
        }
    }
}
