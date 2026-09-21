import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateYears = (() => {
    const __is = (input) =>
        Array.isArray(input) && input.every((elem) => "number" === typeof elem);
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
                        expected: "Array<number>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                "number" === typeof elem ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "number",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<number>",
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
const validateSchoolYears = (() => {
    const _io0 = (input) =>
        "number" === typeof input.id &&
        "number" === typeof input.year &&
        "string" === typeof input.createdAt &&
        "string" === typeof input.updatedAt &&
        Object.keys(input).every((key) => {
            if (
                ["id", "year", "createdAt", "updatedAt"].some(
                    (prop) => key === prop
                )
            )
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
            "number" === typeof input.year ||
                _report(_exceptionable, {
                    path: _path + ".year",
                    expected: "number",
                    value: input.year,
                }),
            "string" === typeof input.createdAt ||
                _report(_exceptionable, {
                    path: _path + ".createdAt",
                    expected: "string",
                    value: input.createdAt,
                }),
            "string" === typeof input.updatedAt ||
                _report(_exceptionable, {
                    path: _path + ".updatedAt",
                    expected: "string",
                    value: input.updatedAt,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["id", "year", "createdAt", "updatedAt"].some(
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
                        expected: "Array<SchoolYear>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "SchoolYear",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "SchoolYear",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<SchoolYear>",
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
export class Settings extends ApiClient {
    getSelectableSchoolYears() {
        return this.getJson("settings/school-years/selectable", validateYears);
    }
    getSchoolYears() {
        return this.getJson("settings/school-years", validateSchoolYears);
    }
}
//# sourceMappingURL=settings.js.map
