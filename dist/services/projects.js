import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateProjectInstances = (() => {
    const _io0 = (input) =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.code &&
        Object.keys(input).every((key) => {
            if (["id", "name", "code"].some((prop) => key === prop))
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
            "string" === typeof input.name ||
                _report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                }),
            "string" === typeof input.code ||
                _report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["id", "name", "code"].some((prop) => key === prop))
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
                        expected: "Array<ProjectInstance>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "ProjectInstance",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "ProjectInstance",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<ProjectInstance>",
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
const validateUnitInstances = (() => {
    const _io0 = (input) =>
        Array.isArray(input.data) &&
        input.data.every(
            (elem) => "object" === typeof elem && null !== elem && _io1(elem)
        ) &&
        "object" === typeof input.meta &&
        null !== input.meta &&
        _io2(input.meta);
    const _io1 = (input) =>
        "number" === typeof input.id &&
        "string" === typeof input.code &&
        Object.keys(input).every((key) => {
            if (["id", "code"].some((prop) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _io2 = (input) =>
        "number" === typeof input.page &&
        "number" === typeof input.limit &&
        "number" === typeof input.total &&
        "number" === typeof input.pages &&
        "boolean" === typeof input.hasNext &&
        "boolean" === typeof input.hasPrev;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            ((Array.isArray(input.data) ||
                _report(_exceptionable, {
                    path: _path + ".data",
                    expected: "Array<UnitInstance>",
                    value: input.data,
                })) &&
                input.data
                    .map(
                        (elem, _index2) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path: _path + ".data[" + _index2 + "]",
                                    expected: "UnitInstance",
                                    value: elem,
                                })) &&
                                _vo1(
                                    elem,
                                    _path + ".data[" + _index2 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".data[" + _index2 + "]",
                                expected: "UnitInstance",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".data",
                    expected: "Array<UnitInstance>",
                    value: input.data,
                }),
            ((("object" === typeof input.meta && null !== input.meta) ||
                _report(_exceptionable, {
                    path: _path + ".meta",
                    expected:
                        "{ page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean; }",
                    value: input.meta,
                })) &&
                _vo2(input.meta, _path + ".meta", true && _exceptionable)) ||
                _report(_exceptionable, {
                    path: _path + ".meta",
                    expected:
                        "{ page: number; limit: number; total: number; pages: number; hasNext: boolean; hasPrev: boolean; }",
                    value: input.meta,
                }),
        ].every((flag) => flag);
    const _vo1 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.id ||
                _report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                }),
            "string" === typeof input.code ||
                _report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["id", "code"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return true;
                    })
                    .every((flag) => flag),
        ].every((flag) => flag);
    const _vo2 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.page ||
                _report(_exceptionable, {
                    path: _path + ".page",
                    expected: "number",
                    value: input.page,
                }),
            "number" === typeof input.limit ||
                _report(_exceptionable, {
                    path: _path + ".limit",
                    expected: "number",
                    value: input.limit,
                }),
            "number" === typeof input.total ||
                _report(_exceptionable, {
                    path: _path + ".total",
                    expected: "number",
                    value: input.total,
                }),
            "number" === typeof input.pages ||
                _report(_exceptionable, {
                    path: _path + ".pages",
                    expected: "number",
                    value: input.pages,
                }),
            "boolean" === typeof input.hasNext ||
                _report(_exceptionable, {
                    path: _path + ".hasNext",
                    expected: "boolean",
                    value: input.hasNext,
                }),
            "boolean" === typeof input.hasPrev ||
                _report(_exceptionable, {
                    path: _path + ".hasPrev",
                    expected: "boolean",
                    value: input.hasPrev,
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
                        expected: "PaginatedResponse<UnitInstance>",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "PaginatedResponse<UnitInstance>",
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
const validateUnit = (() => {
    const _io0 = (input) =>
        "number" === typeof input.id &&
        "string" === typeof input.code &&
        Object.keys(input).every((key) => {
            if (["id", "code"].some((prop) => key === prop)) return true;
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
            "string" === typeof input.code ||
                _report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["id", "code"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return true;
                    })
                    .every((flag) => flag),
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
                        expected: "UnitInstance",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "UnitInstance",
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
const validateInvitations = (() => {
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
                        expected: "Array<ProjectRegistrationInvitation>",
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
                                        expected:
                                            "ProjectRegistrationInvitation",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "ProjectRegistrationInvitation",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<ProjectRegistrationInvitation>",
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
const validateProject = (() => {
    const _io0 = (input) =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.code &&
        Object.keys(input).every((key) => {
            if (["id", "name", "code"].some((prop) => key === prop))
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
            "string" === typeof input.name ||
                _report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                }),
            "string" === typeof input.code ||
                _report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["id", "name", "code"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return true;
                    })
                    .every((flag) => flag),
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
                        expected: "ProjectInstance",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "ProjectInstance",
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
const validateTestResults = (() => {
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
                        expected: "Array<ProjectTestResult>",
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
                                        expected: "ProjectTestResult",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "ProjectTestResult",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<ProjectTestResult>",
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
const validateAchievements = (() => {
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
                        expected: "Array<ProjectAchievement>",
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
                                        expected: "ProjectAchievement",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "ProjectAchievement",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<ProjectAchievement>",
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
const validateActivities = (() => {
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
                        expected: "Array<ProjectActivity>",
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
                                        expected: "ProjectActivity",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "ProjectActivity",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<ProjectActivity>",
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
const validateCloud = (() => {
    const _io0 = (input) =>
        "string" === typeof input.projectName &&
        "string" === typeof input.groupName &&
        Object.keys(input).every((key) => {
            if (["projectName", "groupName"].some((prop) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.projectName ||
                _report(_exceptionable, {
                    path: _path + ".projectName",
                    expected: "string",
                    value: input.projectName,
                }),
            "string" === typeof input.groupName ||
                _report(_exceptionable, {
                    path: _path + ".groupName",
                    expected: "string",
                    value: input.groupName,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["projectName", "groupName"].some(
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
                        expected: "ProjectCloud",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "ProjectCloud",
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
const validateRegistrations = (() => {
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
                        expected: "Array<UnitRegistration>",
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
                                        expected: "UnitRegistration",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "UnitRegistration",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<UnitRegistration>",
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
function queryString(query) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value === undefined) continue;
        if (Array.isArray(value)) {
            for (const item of value) params.append(`${key}[]`, String(item));
        } else {
            params.set(key, String(value));
        }
    }
    return params.toString();
}
export class Projects extends ApiClient {
    getProjectInstances(query = {}) {
        const suffix = queryString(query);
        return this.getJson(
            `units/instances/projects${suffix ? `?${suffix}` : ""}`,
            validateProjectInstances
        );
    }
    getInstanceSchoolYears() {
        return this.getJson("units/instances/school-years", validateYears);
    }
    getUnitInstances(schoolYear, expanded = false) {
        return this.getJson(
            `units/instances?schoolYear=${schoolYear}&expanded=${expanded}`,
            validateUnitInstances
        );
    }
    getUnitInstance(schoolYear, unitCode, unitInstanceCode, expanded = false) {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(unitInstanceCode)}?expanded=${expanded}`,
            validateUnit
        );
    }
    getRegistrationInvitations() {
        return this.getJson(
            "units/projects/registrations/invitations/me",
            validateInvitations
        );
    }
    getProject(schoolYear, unitCode, unitInstanceCode, projectId) {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(unitInstanceCode)}/projects/${projectId}`,
            validateProject
        );
    }
    getProjectTestResults(projectId) {
        return this.getJson(
            `units/instances/projects/${projectId}/test-results`,
            validateTestResults
        );
    }
    getProjectAchievements(schoolYear, unitCode, unitInstanceCode, projectId) {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(unitInstanceCode)}/projects/${projectId}/achievements`,
            validateAchievements
        );
    }
    getProjectActivities(projectId) {
        return this.getJson(
            `units/instances/projects/${projectId}/my-activities`,
            validateActivities
        );
    }
    getProjectCloud(projectId) {
        return this.getJson(
            `units/instances/projects/${projectId}/cloud`,
            validateCloud
        );
    }
    getUnitRegistrations(schoolYear, unitCode, unitInstanceCode) {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(unitInstanceCode)}/registrations`,
            validateRegistrations
        );
    }
}
//# sourceMappingURL=projects.js.map
