import type { IValidation } from "typia";

/**
 * Describes the result of validating a response body against its expected
 * TypeScript structure.
 *
 * The validation is performed at runtime by typia. When a structure has been
 * checked successfully, `valid` is true and `errors` is empty. When validation
 * fails, `errors` contains every detected mismatch.
 */
export interface ApiStructureValidation {
    checked: boolean;
    valid: boolean;
    errors: IValidation.IError[];
}

/**
 * Common metadata collected for every API response.
 */
export interface ApiResponseMetadata {
    status: number;
    expectedStatus: boolean;
    expectedStructure: ApiStructureValidation;
    raw: unknown;
    delay: number;
    address: string;
    url: string;
    method: string;
    responseHeaders: Record<string, string>;
    contentType: string | null;
}

/**
 * Represents a successful HTTP/API call whose response body matches the
 * expected TypeScript structure.
 *
 * @template T Expected response type.
 */
export interface ApiSuccess<T> extends ApiResponseMetadata {
    success: true;
    expectedStructure: ApiStructureValidation;
    data: T;
    error?: never;
}

/**
 * Represents a completed HTTP/API call whose response body could not be
 * safely exposed as the expected TypeScript type, or whose HTTP status was
 * unexpected.
 *
 * @template T Expected response type.
 */
export interface ApiFailure<T> extends ApiResponseMetadata {
    success: false;
    data: null;
    error: string;
    expectedStructure: ApiStructureValidation;
}

/**
 * Generic result returned by the SDK for an API request.
 *
 * `success` indicates whether the request completed with the expected
 * application-level outcome. `expectedStatus` independently indicates whether
 * the HTTP status was one of the statuses requested by the caller, while
 * `expectedStructure.valid` indicates whether the response body matched `T`.
 *
 * @template T Expected response type.
 */
export type ApiResult<T> = ApiSuccess<T> | ApiFailure<T>;
