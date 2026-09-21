import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateOverview = (() => {
    const _ip0 = (input) => "number" === typeof input["id"];
    const _ip1 = (input) => "string" === typeof input["title"];
    const _vp0 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["id"] ||
        _report(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input["id"],
        });
    const _vp1 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["title"] ||
        _report(_exceptionable, {
            path: _path + ".title",
            expected: "string",
            value: input["title"],
        });
    const _io0 = (input) =>
        Array.isArray(input.categories) &&
        input.categories.every(
            (elem) => "object" === typeof elem && null !== elem && _io1(elem)
        );
    const _io1 = (input) =>
        _ip0(input) &&
        _ip1(input) &&
        Array.isArray(input.modules) &&
        input.modules.every(
            (elem) => "object" === typeof elem && null !== elem && _io2(elem)
        ) &&
        Object.keys(input).every((key) => {
            if (["id", "title", "modules"].some((prop) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _io2 = (input) =>
        _ip0(input) &&
        _ip1(input) &&
        Array.isArray(input.chapters) &&
        input.chapters.every(
            (elem) => "object" === typeof elem && null !== elem && _io3(elem)
        ) &&
        Object.keys(input).every((key) => {
            if (["id", "title", "chapters"].some((prop) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _io3 = (input) =>
        _ip0(input) &&
        _ip1(input) &&
        Object.keys(input).every((key) => {
            if (["id", "title"].some((prop) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            ((Array.isArray(input.categories) ||
                _report(_exceptionable, {
                    path: _path + ".categories",
                    expected: "Array<ELearningCategory>",
                    value: input.categories,
                })) &&
                input.categories
                    .map(
                        (elem, _index4) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path:
                                        _path + ".categories[" + _index4 + "]",
                                    expected: "ELearningCategory",
                                    value: elem,
                                })) &&
                                _vo1(
                                    elem,
                                    _path + ".categories[" + _index4 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".categories[" + _index4 + "]",
                                expected: "ELearningCategory",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".categories",
                    expected: "Array<ELearningCategory>",
                    value: input.categories,
                }),
        ].every((flag) => flag);
    const _vo1 = (input, _path, _exceptionable = true) =>
        [
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            ((Array.isArray(input.modules) ||
                _report(_exceptionable, {
                    path: _path + ".modules",
                    expected: "Array<ELearningModule>",
                    value: input.modules,
                })) &&
                input.modules
                    .map(
                        (elem, _index5) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path: _path + ".modules[" + _index5 + "]",
                                    expected: "ELearningModule",
                                    value: elem,
                                })) &&
                                _vo2(
                                    elem,
                                    _path + ".modules[" + _index5 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".modules[" + _index5 + "]",
                                expected: "ELearningModule",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".modules",
                    expected: "Array<ELearningModule>",
                    value: input.modules,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["id", "title", "modules"].some(
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
    const _vo2 = (input, _path, _exceptionable = true) =>
        [
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            ((Array.isArray(input.chapters) ||
                _report(_exceptionable, {
                    path: _path + ".chapters",
                    expected: "Array<ELearningChapter>",
                    value: input.chapters,
                })) &&
                input.chapters
                    .map(
                        (elem, _index6) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path: _path + ".chapters[" + _index6 + "]",
                                    expected: "ELearningChapter",
                                    value: elem,
                                })) &&
                                _vo3(
                                    elem,
                                    _path + ".chapters[" + _index6 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".chapters[" + _index6 + "]",
                                expected: "ELearningChapter",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".chapters",
                    expected: "Array<ELearningChapter>",
                    value: input.chapters,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["id", "title", "chapters"].some(
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
    const _vo3 = (input, _path, _exceptionable = true) =>
        [
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["id", "title"].some((prop) => key === prop))
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
                        expected: "ELearningOverview",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "ELearningOverview",
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
const validateModule = (() => {
    const _ip0 = (input) => "number" === typeof input["id"];
    const _ip1 = (input) => "string" === typeof input["title"];
    const _vp0 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["id"] ||
        _report(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input["id"],
        });
    const _vp1 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["title"] ||
        _report(_exceptionable, {
            path: _path + ".title",
            expected: "string",
            value: input["title"],
        });
    const _io0 = (input) =>
        _ip0(input) &&
        _ip1(input) &&
        Array.isArray(input.chapters) &&
        input.chapters.every(
            (elem) => "object" === typeof elem && null !== elem && _io1(elem)
        ) &&
        Object.keys(input).every((key) => {
            if (["id", "title", "chapters"].some((prop) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _io1 = (input) =>
        _ip0(input) &&
        _ip1(input) &&
        Object.keys(input).every((key) => {
            if (["id", "title"].some((prop) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            ((Array.isArray(input.chapters) ||
                _report(_exceptionable, {
                    path: _path + ".chapters",
                    expected: "Array<ELearningChapter>",
                    value: input.chapters,
                })) &&
                input.chapters
                    .map(
                        (elem, _index2) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path: _path + ".chapters[" + _index2 + "]",
                                    expected: "ELearningChapter",
                                    value: elem,
                                })) &&
                                _vo1(
                                    elem,
                                    _path + ".chapters[" + _index2 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".chapters[" + _index2 + "]",
                                expected: "ELearningChapter",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".chapters",
                    expected: "Array<ELearningChapter>",
                    value: input.chapters,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["id", "title", "chapters"].some(
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
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["id", "title"].some((prop) => key === prop))
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
                        expected: "ELearningModule",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "ELearningModule",
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
const validateUrl = (() => {
    const _io0 = (input) => "string" === typeof input.url;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.url ||
                _report(_exceptionable, {
                    path: _path + ".url",
                    expected: "string",
                    value: input.url,
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
                        expected: "SignedUrlResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "SignedUrlResponse",
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
export class Learning extends ApiClient {
    getOverview() {
        return this.getJson("e-learning/overview", validateOverview);
    }
    getModule(moduleId) {
        return this.getJson(`e-learning/modules/${moduleId}`, validateModule);
    }
    getChapterUrl(chapterId) {
        return this.getJson(
            `e-learning/chapters/${chapterId}/url`,
            validateUrl
        );
    }
}
//# sourceMappingURL=learning.js.map
