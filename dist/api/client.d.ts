import type { IValidation } from "typia";
import type { ApiResult } from "../interfaces/api/api-result.js";
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
export declare class ApiClient {
    /** Base URL used by the My API. */
    static readonly BASE_URL = "https://my.epitech.eu/api/";
    /** Bearer token used for authenticated requests. */
    protected token: string | null;
    /**
     * Creates an API client.
     *
     * @param accessToken Bearer token used to authenticate requests.
     */
    constructor(accessToken?: string | null);
    /**
     * Returns the current access token.
     */
    protected getAccessToken(): string | null;
    /**
     * Replaces the current access token.
     *
     * @param accessToken New access token, or null to clear it.
     */
    protected setAccessToken(accessToken: string | null): void;
    /**
     * Builds the default headers used by authenticated API requests.
     *
     * @throws Error when no access token is available.
     */
    protected authHeaders(): Record<string, string>;
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
    protected getJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options?: ApiRequestInit,
        expectedStatuses?: number[]
    ): Promise<ApiResult<T>>;
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
    protected postJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options?: ApiRequestInit,
        expectedStatuses?: number[]
    ): Promise<ApiResult<T>>;
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
    protected putJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options?: ApiRequestInit,
        expectedStatuses?: number[]
    ): Promise<ApiResult<T>>;
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
    protected patchJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options?: ApiRequestInit,
        expectedStatuses?: number[]
    ): Promise<ApiResult<T>>;
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
    protected deleteJson<T>(
        endpoint: string,
        validator: JsonValidator<T>,
        options?: ApiRequestInit,
        expectedStatuses?: number[]
    ): Promise<ApiResult<T>>;
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
    protected getBlob(
        endpoint: string,
        options?: ApiRequestInit,
        expectedStatuses?: number[]
    ): Promise<ApiResult<Blob>>;
    private requestJson;
    private requestBlob;
    private buildJsonResult;
    /**
     * Converts a typia validation result into the SDK's public structure report.
     */
    private static structureFromValidation;
    /**
     * Returns a structure report for responses that could not be validated.
     */
    private static uncheckedStructure;
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
    protected createFailure<T>(
        error: string,
        method: HttpMethod,
        endpoint: string
    ): Promise<ApiResult<T>>;
    private createRequestFailure;
    private static resolveAddress;
}
export {};
//# sourceMappingURL=client.d.ts.map
