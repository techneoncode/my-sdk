import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateApplications = (() => {
    const _io0 = (input) =>
        "number" === typeof input.id &&
        "object" === typeof input.name &&
        null !== input.name &&
        _io1(input.name) &&
        Array.isArray(input.applications) &&
        input.applications.every(
            (elem) => "object" === typeof elem && null !== elem && _io2(elem)
        ) &&
        Object.keys(input).every((key) => {
            if (["id", "name", "applications"].some((prop) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _io1 = (input) =>
        "string" === typeof input.en && "string" === typeof input.fr;
    const _io2 = (input) =>
        "string" === typeof input.name &&
        "string" === typeof input.url &&
        "string" === typeof input.color &&
        Object.keys(input).every((key) => {
            if (["name", "url", "color"].some((prop) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.id ||
                _report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                }),
            ((("object" === typeof input.name && null !== input.name) ||
                _report(_exceptionable, {
                    path: _path + ".name",
                    expected: "LocalizedName",
                    value: input.name,
                })) &&
                _vo1(input.name, _path + ".name", true && _exceptionable)) ||
                _report(_exceptionable, {
                    path: _path + ".name",
                    expected: "LocalizedName",
                    value: input.name,
                }),
            ((Array.isArray(input.applications) ||
                _report(_exceptionable, {
                    path: _path + ".applications",
                    expected: "Array<Application>",
                    value: input.applications,
                })) &&
                input.applications
                    .map(
                        (elem, _index4) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".applications[" +
                                        _index4 +
                                        "]",
                                    expected: "Application",
                                    value: elem,
                                })) &&
                                _vo2(
                                    elem,
                                    _path + ".applications[" + _index4 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".applications[" + _index4 + "]",
                                expected: "Application",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".applications",
                    expected: "Array<Application>",
                    value: input.applications,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["id", "name", "applications"].some(
                                (prop) => key === prop
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return true;
                    })
                    .every((flag) => flag),
        ].every((flag) => flag);
    const _vo1 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.en ||
                _report(_exceptionable, {
                    path: _path + ".en",
                    expected: "string",
                    value: input.en,
                }),
            "string" === typeof input.fr ||
                _report(_exceptionable, {
                    path: _path + ".fr",
                    expected: "string",
                    value: input.fr,
                }),
        ].every((flag) => flag);
    const _vo2 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.name ||
                _report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                }),
            "string" === typeof input.url ||
                _report(_exceptionable, {
                    path: _path + ".url",
                    expected: "string",
                    value: input.url,
                }),
            "string" === typeof input.color ||
                _report(_exceptionable, {
                    path: _path + ".color",
                    expected: "string",
                    value: input.color,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["name", "url", "color"].some(
                                (prop) => key === prop
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return true;
                    })
                    .every((flag) => flag),
        ].every((flag) => flag);
    const __is = (input) =>
        Array.isArray(input) &&
        input.every(
            (elem) => "object" === typeof elem && null !== elem && _io0(elem)
        );
    let errors;
    let _report;
    return _createStandardSchema_1._createStandardSchema((input) => {
        if (false === __is(input)) {
            errors = [];
            _report = _validateReport_1._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
                ((Array.isArray(input) ||
                    _report(true, {
                        path: _path + "",
                        expected: "Array<ApplicationCategory>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index3) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index3 + "]",
                                        expected: "ApplicationCategory",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index3 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index3 + "]",
                                    expected: "ApplicationCategory",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<ApplicationCategory>",
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
const validateCursus = (() => {
    const _io0 = (input) =>
        Object.keys(input).every((key) => {
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        return true;
                    })
                    .every((flag) => flag),
        ].every((flag) => flag);
    const __is = (input) =>
        Array.isArray(input) &&
        input.every(
            (elem) =>
                "object" === typeof elem &&
                null !== elem &&
                false === Array.isArray(elem) &&
                _io0(elem)
        );
    let errors;
    let _report;
    return _createStandardSchema_1._createStandardSchema((input) => {
        if (false === __is(input)) {
            errors = [];
            _report = _validateReport_1._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
                ((Array.isArray(input) ||
                    _report(true, {
                        path: _path + "",
                        expected: "Array<Cursus>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "Cursus",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "Cursus",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<Cursus>",
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
export class Applications extends ApiClient {
    getUserApplications() {
        return this.getJson("applications/user", validateApplications);
    }
    getCursus(schoolYear, expanded = false) {
        return this.getJson(
            `cursus?schoolYear=${schoolYear}&expanded=${expanded}`,
            validateCursus
        );
    }
}
//# sourceMappingURL=applications.js.map
