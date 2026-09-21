import type { IValidation } from "typia";

/**
 * Validator that accepts any response body.
 *
 * Used by endpoints whose response schema has not been documented yet.
 */
export const validateUnknown = (input: unknown): IValidation<unknown> => ({
    success: true,
    data: input,
});
