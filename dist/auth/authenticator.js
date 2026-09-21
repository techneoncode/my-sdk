import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateAuthRefreshResponse = (() => {
    const _io0 = (input) =>
        "string" === typeof input.access_token &&
        "string" === typeof input.refresh_token;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.access_token ||
                _report(_exceptionable, {
                    path: _path + ".access_token",
                    expected: "string",
                    value: input.access_token,
                }),
            "string" === typeof input.refresh_token ||
                _report(_exceptionable, {
                    path: _path + ".refresh_token",
                    expected: "string",
                    value: input.refresh_token,
                }),
        ].every((flag) => flag);
    const __is = (input) =>
        "object" === typeof input && null !== input && _io0(input);
    let errors;
    let _report;
    return _createStandardSchema_1._createStandardSchema((input) => {
        if (false === __is(input)) {
            errors = [];
            _report = _validateReport_1._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
                ((("object" === typeof input && null !== input) ||
                    _report(true, {
                        path: _path + "",
                        expected: "AuthRefreshResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "AuthRefreshResponse",
                    value: input,
                }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
                ? {
                      success,
                      data: input,
                  }
                : {
                      success,
                      errors,
                      data: input,
                  };
        }
        return {
            success: true,
            data: input,
        };
    });
})();
const validateVerifyResponse = (() => {
    const _io0 = (input) =>
        Array.isArray(input.cities) &&
        input.cities.every(
            (elem) => "object" === typeof elem && null !== elem && _io1(elem)
        ) &&
        "string" === typeof input.cursus &&
        "number" === typeof input.cursusSchoolYear &&
        "string" === typeof input.firstname &&
        "string" === typeof input.lastname &&
        "string" === typeof input.login &&
        "number" === typeof input.promotion &&
        Array.isArray(input.roles) &&
        input.roles.every((elem) => "string" === typeof elem) &&
        "number" === typeof input.semester &&
        "number" === typeof input.semesterId &&
        "number" === typeof input.tekYear;
    const _io1 = (input) =>
        "string" === typeof input.code &&
        "number" === typeof input.id &&
        "string" === typeof input.name;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            ((Array.isArray(input.cities) ||
                _report(_exceptionable, {
                    path: _path + ".cities",
                    expected: "Array<VerifyResponseCityItem>",
                    value: input.cities,
                })) &&
                input.cities
                    .map(
                        (elem, _index3) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path: _path + ".cities[" + _index3 + "]",
                                    expected: "VerifyResponseCityItem",
                                    value: elem,
                                })) &&
                                _vo1(
                                    elem,
                                    _path + ".cities[" + _index3 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".cities[" + _index3 + "]",
                                expected: "VerifyResponseCityItem",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".cities",
                    expected: "Array<VerifyResponseCityItem>",
                    value: input.cities,
                }),
            "string" === typeof input.cursus ||
                _report(_exceptionable, {
                    path: _path + ".cursus",
                    expected: "string",
                    value: input.cursus,
                }),
            "number" === typeof input.cursusSchoolYear ||
                _report(_exceptionable, {
                    path: _path + ".cursusSchoolYear",
                    expected: "number",
                    value: input.cursusSchoolYear,
                }),
            "string" === typeof input.firstname ||
                _report(_exceptionable, {
                    path: _path + ".firstname",
                    expected: "string",
                    value: input.firstname,
                }),
            "string" === typeof input.lastname ||
                _report(_exceptionable, {
                    path: _path + ".lastname",
                    expected: "string",
                    value: input.lastname,
                }),
            "string" === typeof input.login ||
                _report(_exceptionable, {
                    path: _path + ".login",
                    expected: "string",
                    value: input.login,
                }),
            "number" === typeof input.promotion ||
                _report(_exceptionable, {
                    path: _path + ".promotion",
                    expected: "number",
                    value: input.promotion,
                }),
            ((Array.isArray(input.roles) ||
                _report(_exceptionable, {
                    path: _path + ".roles",
                    expected: "Array<string>",
                    value: input.roles,
                })) &&
                input.roles
                    .map(
                        (elem, _index4) =>
                            "string" === typeof elem ||
                            _report(_exceptionable, {
                                path: _path + ".roles[" + _index4 + "]",
                                expected: "string",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".roles",
                    expected: "Array<string>",
                    value: input.roles,
                }),
            "number" === typeof input.semester ||
                _report(_exceptionable, {
                    path: _path + ".semester",
                    expected: "number",
                    value: input.semester,
                }),
            "number" === typeof input.semesterId ||
                _report(_exceptionable, {
                    path: _path + ".semesterId",
                    expected: "number",
                    value: input.semesterId,
                }),
            "number" === typeof input.tekYear ||
                _report(_exceptionable, {
                    path: _path + ".tekYear",
                    expected: "number",
                    value: input.tekYear,
                }),
        ].every((flag) => flag);
    const _vo1 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.code ||
                _report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                }),
            "number" === typeof input.id ||
                _report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                }),
            "string" === typeof input.name ||
                _report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                }),
        ].every((flag) => flag);
    const __is = (input) =>
        "object" === typeof input && null !== input && _io0(input);
    let errors;
    let _report;
    return _createStandardSchema_1._createStandardSchema((input) => {
        if (false === __is(input)) {
            errors = [];
            _report = _validateReport_1._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
                ((("object" === typeof input && null !== input) ||
                    _report(true, {
                        path: _path + "",
                        expected: "VerifyResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "VerifyResponse",
                    value: input,
                }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
                ? {
                      success,
                      data: input,
                  }
                : {
                      success,
                      errors,
                      data: input,
                  };
        }
        return {
            success: true,
            data: input,
        };
    });
})();
/**
 * Handles authentication tokens and authentication-related API requests.
 *
 * Authentication request details are delegated to {@link ApiClient}, which
 * automatically collects request metadata, parses JSON responses, and
 * validates response structures with typia.
 */
export class Authenticator extends ApiClient {
    /** Current refresh token, when available. */
    refreshToken;
    /**
     * Creates an authenticator.
     *
     * @param accessToken Initial access token.
     * @param refreshToken Initial refresh token.
     */
    constructor(accessToken = null, refreshToken = null) {
        super(accessToken);
        this.refreshToken = refreshToken;
    }
    /**
     * Gets or replaces the current access token.
     */
    get accessToken() {
        return this.getAccessToken();
    }
    set accessToken(accessToken) {
        this.setAccessToken(accessToken);
    }
    /**
     * Returns the authorization header for authenticated requests.
     *
     * @returns The Bearer authorization header.
     * @throws Error if no access token is available.
     */
    getAuthorizationHeader() {
        return this.authHeaders();
    }
    /**
     * Refreshes the current authentication tokens.
     *
     * @returns Detailed information about the refresh request and the new tokens.
     */
    async refresh() {
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
    async verify() {
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
    clear() {
        this.accessToken = null;
        this.refreshToken = null;
    }
}
//# sourceMappingURL=authenticator.js.map
