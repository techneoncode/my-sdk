import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validators = {
    exams: (() => {
        const _ip0 = (input) => "number" === typeof input["requiredScore"];
        const _ip1 = (input) => "string" === typeof input["date"];
        const _ip2 = (input) => "number" === typeof input["scholarYear"];
        const _ip3 = (input) => "number" === typeof input["score"];
        const _vp0 = (input, _path, _exceptionable = true) =>
            "number" === typeof input["requiredScore"] ||
            _report(_exceptionable, {
                path: _path + ".requiredScore",
                expected: "number",
                value: input["requiredScore"],
            });
        const _vp1 = (input, _path, _exceptionable = true) =>
            "string" === typeof input["date"] ||
            _report(_exceptionable, {
                path: _path + ".date",
                expected: "string",
                value: input["date"],
            });
        const _vp2 = (input, _path, _exceptionable = true) =>
            "number" === typeof input["scholarYear"] ||
            _report(_exceptionable, {
                path: _path + ".scholarYear",
                expected: "number",
                value: input["scholarYear"],
            });
        const _vp3 = (input, _path, _exceptionable = true) =>
            "number" === typeof input["score"] ||
            _report(_exceptionable, {
                path: _path + ".score",
                expected: "number",
                value: input["score"],
            });
        const _io0 = (input) =>
            Array.isArray(input.exams) &&
            input.exams.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io1(elem)
            );
        const _io1 = (input) =>
            "object" === typeof input.best &&
            null !== input.best &&
            _io2(input.best) &&
            "string" === typeof input.examLineageKey &&
            "string" === typeof input.label &&
            "number" === typeof input.maxMark &&
            _ip0(input) &&
            Array.isArray(input.requiredScores) &&
            input.requiredScores.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io3(elem)
            ) &&
            Array.isArray(input.results) &&
            input.results.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io4(elem)
            ) &&
            "string" === typeof input.type;
        const _io2 = (input) =>
            _ip1(input) &&
            _ip2(input) &&
            _ip3(input) &&
            "string" === typeof input.title;
        const _io3 = (input) =>
            _ip3(input) && "number" === typeof input.tekYear;
        const _io4 = (input) =>
            _ip1(input) &&
            "boolean" === typeof input.isSelfAssessment &&
            _ip0(input) &&
            _ip2(input) &&
            _ip3(input);
        const _vo0 = (input, _path, _exceptionable = true) =>
            [
                ((Array.isArray(input.exams) ||
                    _report(_exceptionable, {
                        path: _path + ".exams",
                        expected: "Array<StudentExamListResponseExamItem>",
                        value: input.exams,
                    })) &&
                    input.exams
                        .map(
                            (elem, _index4) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path: _path + ".exams[" + _index4 + "]",
                                        expected:
                                            "StudentExamListResponseExamItem",
                                        value: elem,
                                    })) &&
                                    _vo1(
                                        elem,
                                        _path + ".exams[" + _index4 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".exams[" + _index4 + "]",
                                    expected: "StudentExamListResponseExamItem",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".exams",
                        expected: "Array<StudentExamListResponseExamItem>",
                        value: input.exams,
                    }),
            ].every((flag) => flag);
        const _vo1 = (input, _path, _exceptionable = true) =>
            [
                ((("object" === typeof input.best && null !== input.best) ||
                    _report(_exceptionable, {
                        path: _path + ".best",
                        expected: "StudentExamListResponseExamItemBest",
                        value: input.best,
                    })) &&
                    _vo2(
                        input.best,
                        _path + ".best",
                        true && _exceptionable
                    )) ||
                    _report(_exceptionable, {
                        path: _path + ".best",
                        expected: "StudentExamListResponseExamItemBest",
                        value: input.best,
                    }),
                "string" === typeof input.examLineageKey ||
                    _report(_exceptionable, {
                        path: _path + ".examLineageKey",
                        expected: "string",
                        value: input.examLineageKey,
                    }),
                "string" === typeof input.label ||
                    _report(_exceptionable, {
                        path: _path + ".label",
                        expected: "string",
                        value: input.label,
                    }),
                "number" === typeof input.maxMark ||
                    _report(_exceptionable, {
                        path: _path + ".maxMark",
                        expected: "number",
                        value: input.maxMark,
                    }),
                _vp0(input, _path, true && _exceptionable),
                ((Array.isArray(input.requiredScores) ||
                    _report(_exceptionable, {
                        path: _path + ".requiredScores",
                        expected:
                            "Array<StudentExamListResponseExamItemRequiredScoreItem>",
                        value: input.requiredScores,
                    })) &&
                    input.requiredScores
                        .map(
                            (elem, _index5) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path +
                                            ".requiredScores[" +
                                            _index5 +
                                            "]",
                                        expected:
                                            "StudentExamListResponseExamItemRequiredScoreItem",
                                        value: elem,
                                    })) &&
                                    _vo3(
                                        elem,
                                        _path +
                                            ".requiredScores[" +
                                            _index5 +
                                            "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".requiredScores[" +
                                        _index5 +
                                        "]",
                                    expected:
                                        "StudentExamListResponseExamItemRequiredScoreItem",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".requiredScores",
                        expected:
                            "Array<StudentExamListResponseExamItemRequiredScoreItem>",
                        value: input.requiredScores,
                    }),
                ((Array.isArray(input.results) ||
                    _report(_exceptionable, {
                        path: _path + ".results",
                        expected:
                            "Array<StudentExamListResponseExamItemResultItem>",
                        value: input.results,
                    })) &&
                    input.results
                        .map(
                            (elem, _index6) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path + ".results[" + _index6 + "]",
                                        expected:
                                            "StudentExamListResponseExamItemResultItem",
                                        value: elem,
                                    })) &&
                                    _vo4(
                                        elem,
                                        _path + ".results[" + _index6 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".results[" + _index6 + "]",
                                    expected:
                                        "StudentExamListResponseExamItemResultItem",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".results",
                        expected:
                            "Array<StudentExamListResponseExamItemResultItem>",
                        value: input.results,
                    }),
                "string" === typeof input.type ||
                    _report(_exceptionable, {
                        path: _path + ".type",
                        expected: "string",
                        value: input.type,
                    }),
            ].every((flag) => flag);
        const _vo2 = (input, _path, _exceptionable = true) =>
            [
                _vp1(input, _path, true && _exceptionable),
                _vp2(input, _path, true && _exceptionable),
                _vp3(input, _path, true && _exceptionable),
                "string" === typeof input.title ||
                    _report(_exceptionable, {
                        path: _path + ".title",
                        expected: "string",
                        value: input.title,
                    }),
            ].every((flag) => flag);
        const _vo3 = (input, _path, _exceptionable = true) =>
            [
                _vp3(input, _path, true && _exceptionable),
                "number" === typeof input.tekYear ||
                    _report(_exceptionable, {
                        path: _path + ".tekYear",
                        expected: "number",
                        value: input.tekYear,
                    }),
            ].every((flag) => flag);
        const _vo4 = (input, _path, _exceptionable = true) =>
            [
                _vp1(input, _path, true && _exceptionable),
                "boolean" === typeof input.isSelfAssessment ||
                    _report(_exceptionable, {
                        path: _path + ".isSelfAssessment",
                        expected: "boolean",
                        value: input.isSelfAssessment,
                    }),
                _vp0(input, _path, true && _exceptionable),
                _vp2(input, _path, true && _exceptionable),
                _vp3(input, _path, true && _exceptionable),
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
                            expected: "StudentExamListResponse",
                            value: input,
                        })) &&
                        _vo0(input, _path + "", true)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "StudentExamListResponse",
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
    })(),
    evaluations: (() => {
        const _io0 = (input) =>
            Array.isArray(input.data) &&
            input.data.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io1(elem)
            ) &&
            "object" === typeof input.meta &&
            null !== input.meta &&
            _io2(input.meta);
        const _io1 = (input) =>
            "string" === typeof input.activityTitle &&
            "string" === typeof input.comment &&
            "string" === typeof input.date &&
            "string" === typeof input.evaluator &&
            "number" === typeof input.eventId &&
            "string" === typeof input.eventTitle &&
            "number" === typeof input.examTypeId &&
            "number" === typeof input.id &&
            "number" === typeof input.mark &&
            "string" === typeof input.type;
        const _io2 = (input) =>
            "boolean" === typeof input.hasNext &&
            "boolean" === typeof input.hasPrev &&
            "number" === typeof input.limit &&
            "number" === typeof input.page &&
            "number" === typeof input.pages &&
            "number" === typeof input.total;
        const _vo0 = (input, _path, _exceptionable = true) =>
            [
                ((Array.isArray(input.data) ||
                    _report(_exceptionable, {
                        path: _path + ".data",
                        expected:
                            "Array<StudentEvaluationListResponseDataItem>",
                        value: input.data,
                    })) &&
                    input.data
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path: _path + ".data[" + _index2 + "]",
                                        expected:
                                            "StudentEvaluationListResponseDataItem",
                                        value: elem,
                                    })) &&
                                    _vo1(
                                        elem,
                                        _path + ".data[" + _index2 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".data[" + _index2 + "]",
                                    expected:
                                        "StudentEvaluationListResponseDataItem",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".data",
                        expected:
                            "Array<StudentEvaluationListResponseDataItem>",
                        value: input.data,
                    }),
                ((("object" === typeof input.meta && null !== input.meta) ||
                    _report(_exceptionable, {
                        path: _path + ".meta",
                        expected: "StudentEvaluationListResponseMeta",
                        value: input.meta,
                    })) &&
                    _vo2(
                        input.meta,
                        _path + ".meta",
                        true && _exceptionable
                    )) ||
                    _report(_exceptionable, {
                        path: _path + ".meta",
                        expected: "StudentEvaluationListResponseMeta",
                        value: input.meta,
                    }),
            ].every((flag) => flag);
        const _vo1 = (input, _path, _exceptionable = true) =>
            [
                "string" === typeof input.activityTitle ||
                    _report(_exceptionable, {
                        path: _path + ".activityTitle",
                        expected: "string",
                        value: input.activityTitle,
                    }),
                "string" === typeof input.comment ||
                    _report(_exceptionable, {
                        path: _path + ".comment",
                        expected: "string",
                        value: input.comment,
                    }),
                "string" === typeof input.date ||
                    _report(_exceptionable, {
                        path: _path + ".date",
                        expected: "string",
                        value: input.date,
                    }),
                "string" === typeof input.evaluator ||
                    _report(_exceptionable, {
                        path: _path + ".evaluator",
                        expected: "string",
                        value: input.evaluator,
                    }),
                "number" === typeof input.eventId ||
                    _report(_exceptionable, {
                        path: _path + ".eventId",
                        expected: "number",
                        value: input.eventId,
                    }),
                "string" === typeof input.eventTitle ||
                    _report(_exceptionable, {
                        path: _path + ".eventTitle",
                        expected: "string",
                        value: input.eventTitle,
                    }),
                "number" === typeof input.examTypeId ||
                    _report(_exceptionable, {
                        path: _path + ".examTypeId",
                        expected: "number",
                        value: input.examTypeId,
                    }),
                "number" === typeof input.id ||
                    _report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    }),
                "number" === typeof input.mark ||
                    _report(_exceptionable, {
                        path: _path + ".mark",
                        expected: "number",
                        value: input.mark,
                    }),
                "string" === typeof input.type ||
                    _report(_exceptionable, {
                        path: _path + ".type",
                        expected: "string",
                        value: input.type,
                    }),
            ].every((flag) => flag);
        const _vo2 = (input, _path, _exceptionable = true) =>
            [
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
                "number" === typeof input.limit ||
                    _report(_exceptionable, {
                        path: _path + ".limit",
                        expected: "number",
                        value: input.limit,
                    }),
                "number" === typeof input.page ||
                    _report(_exceptionable, {
                        path: _path + ".page",
                        expected: "number",
                        value: input.page,
                    }),
                "number" === typeof input.pages ||
                    _report(_exceptionable, {
                        path: _path + ".pages",
                        expected: "number",
                        value: input.pages,
                    }),
                "number" === typeof input.total ||
                    _report(_exceptionable, {
                        path: _path + ".total",
                        expected: "number",
                        value: input.total,
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
                            expected: "StudentEvaluationListResponse",
                            value: input,
                        })) &&
                        _vo0(input, _path + "", true)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "StudentEvaluationListResponse",
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
    })(),
    derogations: (() => {
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
                            expected: "Array<ExamDerogation>",
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
                                            expected: "ExamDerogation",
                                            value: elem,
                                        })) &&
                                        _vo0(
                                            elem,
                                            _path + "[" + _index2 + "]",
                                            true
                                        )) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "ExamDerogation",
                                        value: elem,
                                    })
                            )
                            .every((flag) => flag)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "Array<ExamDerogation>",
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
    })(),
    alerts: (() => {
        const _ip0 = (input) => "number" === typeof input["blockId"];
        const _ip1 = (input) => "string" === typeof input["alertLevel"];
        const _vp0 = (input, _path, _exceptionable = true) =>
            "number" === typeof input["blockId"] ||
            _report(_exceptionable, {
                path: _path + ".blockId",
                expected: "number",
                value: input["blockId"],
            });
        const _vp1 = (input, _path, _exceptionable = true) =>
            "string" === typeof input["alertLevel"] ||
            _report(_exceptionable, {
                path: _path + ".alertLevel",
                expected: "string",
                value: input["alertLevel"],
            });
        const _io0 = (input) =>
            "string" === typeof input.globalAlert &&
            "string" === typeof input.creditsAlert &&
            "number" === typeof input.creditsThreshold &&
            "number" === typeof input.totalAcquiredCredits &&
            "number" === typeof input.secureCredits &&
            "number" === typeof input.reachableCredits &&
            Array.isArray(input.creditsAtRisk) &&
            input.creditsAtRisk.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io1(elem)
            ) &&
            Array.isArray(input.creditsLost) &&
            input.creditsLost.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io1(elem)
            ) &&
            Array.isArray(input.competencyBlocks) &&
            input.competencyBlocks.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io2(elem)
            ) &&
            Array.isArray(input.exams) &&
            input.exams.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io3(elem)
            ) &&
            Array.isArray(input.units) &&
            input.units.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io4(elem)
            ) &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "globalAlert",
                        "creditsAlert",
                        "creditsThreshold",
                        "totalAcquiredCredits",
                        "secureCredits",
                        "reachableCredits",
                        "creditsAtRisk",
                        "creditsLost",
                        "competencyBlocks",
                        "exams",
                        "units",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io1 = (input) =>
            _ip0(input) &&
            "string" === typeof input.title &&
            "number" === typeof input.credits &&
            Object.keys(input).every((key) => {
                if (
                    ["blockId", "title", "credits"].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io2 = (input) =>
            "number" === typeof input.competencyBlockId &&
            "string" === typeof input.name &&
            _ip1(input) &&
            Object.keys(input).every((key) => {
                if (
                    ["competencyBlockId", "name", "alertLevel"].some(
                        (prop) => key === prop
                    )
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io3 = (input) =>
            "string" === typeof input.examLineageKey &&
            "number" === typeof input.requiredScore &&
            "number" === typeof input.bestScore &&
            "boolean" === typeof input.validated &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "examLineageKey",
                        "requiredScore",
                        "bestScore",
                        "validated",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io4 = (input) =>
            _ip0(input) &&
            "string" === typeof input.blockTitle &&
            _ip1(input) &&
            Object.keys(input).every((key) => {
                if (
                    ["blockId", "blockTitle", "alertLevel"].some(
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
                "string" === typeof input.globalAlert ||
                    _report(_exceptionable, {
                        path: _path + ".globalAlert",
                        expected: "string",
                        value: input.globalAlert,
                    }),
                "string" === typeof input.creditsAlert ||
                    _report(_exceptionable, {
                        path: _path + ".creditsAlert",
                        expected: "string",
                        value: input.creditsAlert,
                    }),
                "number" === typeof input.creditsThreshold ||
                    _report(_exceptionable, {
                        path: _path + ".creditsThreshold",
                        expected: "number",
                        value: input.creditsThreshold,
                    }),
                "number" === typeof input.totalAcquiredCredits ||
                    _report(_exceptionable, {
                        path: _path + ".totalAcquiredCredits",
                        expected: "number",
                        value: input.totalAcquiredCredits,
                    }),
                "number" === typeof input.secureCredits ||
                    _report(_exceptionable, {
                        path: _path + ".secureCredits",
                        expected: "number",
                        value: input.secureCredits,
                    }),
                "number" === typeof input.reachableCredits ||
                    _report(_exceptionable, {
                        path: _path + ".reachableCredits",
                        expected: "number",
                        value: input.reachableCredits,
                    }),
                ((Array.isArray(input.creditsAtRisk) ||
                    _report(_exceptionable, {
                        path: _path + ".creditsAtRisk",
                        expected: "Array<CreditAlert>",
                        value: input.creditsAtRisk,
                    })) &&
                    input.creditsAtRisk
                        .map(
                            (elem, _index6) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path +
                                            ".creditsAtRisk[" +
                                            _index6 +
                                            "]",
                                        expected: "CreditAlert",
                                        value: elem,
                                    })) &&
                                    _vo1(
                                        elem,
                                        _path +
                                            ".creditsAtRisk[" +
                                            _index6 +
                                            "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".creditsAtRisk[" +
                                        _index6 +
                                        "]",
                                    expected: "CreditAlert",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".creditsAtRisk",
                        expected: "Array<CreditAlert>",
                        value: input.creditsAtRisk,
                    }),
                ((Array.isArray(input.creditsLost) ||
                    _report(_exceptionable, {
                        path: _path + ".creditsLost",
                        expected: "Array<CreditAlert>",
                        value: input.creditsLost,
                    })) &&
                    input.creditsLost
                        .map(
                            (elem, _index7) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path +
                                            ".creditsLost[" +
                                            _index7 +
                                            "]",
                                        expected: "CreditAlert",
                                        value: elem,
                                    })) &&
                                    _vo1(
                                        elem,
                                        _path + ".creditsLost[" + _index7 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path:
                                        _path + ".creditsLost[" + _index7 + "]",
                                    expected: "CreditAlert",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".creditsLost",
                        expected: "Array<CreditAlert>",
                        value: input.creditsLost,
                    }),
                ((Array.isArray(input.competencyBlocks) ||
                    _report(_exceptionable, {
                        path: _path + ".competencyBlocks",
                        expected: "Array<CompetencyBlockAlert>",
                        value: input.competencyBlocks,
                    })) &&
                    input.competencyBlocks
                        .map(
                            (elem, _index8) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path +
                                            ".competencyBlocks[" +
                                            _index8 +
                                            "]",
                                        expected: "CompetencyBlockAlert",
                                        value: elem,
                                    })) &&
                                    _vo2(
                                        elem,
                                        _path +
                                            ".competencyBlocks[" +
                                            _index8 +
                                            "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".competencyBlocks[" +
                                        _index8 +
                                        "]",
                                    expected: "CompetencyBlockAlert",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".competencyBlocks",
                        expected: "Array<CompetencyBlockAlert>",
                        value: input.competencyBlocks,
                    }),
                ((Array.isArray(input.exams) ||
                    _report(_exceptionable, {
                        path: _path + ".exams",
                        expected: "Array<EvaluationExamAlert>",
                        value: input.exams,
                    })) &&
                    input.exams
                        .map(
                            (elem, _index9) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path: _path + ".exams[" + _index9 + "]",
                                        expected: "EvaluationExamAlert",
                                        value: elem,
                                    })) &&
                                    _vo3(
                                        elem,
                                        _path + ".exams[" + _index9 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".exams[" + _index9 + "]",
                                    expected: "EvaluationExamAlert",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".exams",
                        expected: "Array<EvaluationExamAlert>",
                        value: input.exams,
                    }),
                ((Array.isArray(input.units) ||
                    _report(_exceptionable, {
                        path: _path + ".units",
                        expected: "Array<EvaluationUnitAlert>",
                        value: input.units,
                    })) &&
                    input.units
                        .map(
                            (elem, _index10) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path + ".units[" + _index10 + "]",
                                        expected: "EvaluationUnitAlert",
                                        value: elem,
                                    })) &&
                                    _vo4(
                                        elem,
                                        _path + ".units[" + _index10 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".units[" + _index10 + "]",
                                    expected: "EvaluationUnitAlert",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".units",
                        expected: "Array<EvaluationUnitAlert>",
                        value: input.units,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "globalAlert",
                                    "creditsAlert",
                                    "creditsThreshold",
                                    "totalAcquiredCredits",
                                    "secureCredits",
                                    "reachableCredits",
                                    "creditsAtRisk",
                                    "creditsLost",
                                    "competencyBlocks",
                                    "exams",
                                    "units",
                                ].some((prop) => key === prop)
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
                "string" === typeof input.title ||
                    _report(_exceptionable, {
                        path: _path + ".title",
                        expected: "string",
                        value: input.title,
                    }),
                "number" === typeof input.credits ||
                    _report(_exceptionable, {
                        path: _path + ".credits",
                        expected: "number",
                        value: input.credits,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["blockId", "title", "credits"].some(
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
                "number" === typeof input.competencyBlockId ||
                    _report(_exceptionable, {
                        path: _path + ".competencyBlockId",
                        expected: "number",
                        value: input.competencyBlockId,
                    }),
                "string" === typeof input.name ||
                    _report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    }),
                _vp1(input, _path, true && _exceptionable),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "competencyBlockId",
                                    "name",
                                    "alertLevel",
                                ].some((prop) => key === prop)
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
                "string" === typeof input.examLineageKey ||
                    _report(_exceptionable, {
                        path: _path + ".examLineageKey",
                        expected: "string",
                        value: input.examLineageKey,
                    }),
                "number" === typeof input.requiredScore ||
                    _report(_exceptionable, {
                        path: _path + ".requiredScore",
                        expected: "number",
                        value: input.requiredScore,
                    }),
                "number" === typeof input.bestScore ||
                    _report(_exceptionable, {
                        path: _path + ".bestScore",
                        expected: "number",
                        value: input.bestScore,
                    }),
                "boolean" === typeof input.validated ||
                    _report(_exceptionable, {
                        path: _path + ".validated",
                        expected: "boolean",
                        value: input.validated,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "examLineageKey",
                                    "requiredScore",
                                    "bestScore",
                                    "validated",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return true;
                        })
                        .every((flag) => flag),
            ].every((flag) => flag);
        const _vo4 = (input, _path, _exceptionable = true) =>
            [
                _vp0(input, _path, true && _exceptionable),
                "string" === typeof input.blockTitle ||
                    _report(_exceptionable, {
                        path: _path + ".blockTitle",
                        expected: "string",
                        value: input.blockTitle,
                    }),
                _vp1(input, _path, true && _exceptionable),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["blockId", "blockTitle", "alertLevel"].some(
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
                            expected: "EvaluationValidationAlertsResponse",
                            value: input,
                        })) &&
                        _vo0(input, _path + "", true)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "EvaluationValidationAlertsResponse",
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
    })(),
    validations: (() => {
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
            "number" === typeof input.referentialId &&
            "number" === typeof input.viewedSemesterId &&
            "number" === typeof input.cursusId &&
            Array.isArray(input.blocks) &&
            input.blocks.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io1(elem)
            ) &&
            Array.isArray(input.competencyBlocks) &&
            input.competencyBlocks.every(
                (elem) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    false === Array.isArray(elem) &&
                    _io3(elem)
            ) &&
            "number" === typeof input.acquiredCredits &&
            "number" === typeof input.totalAcquiredCredits &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "referentialId",
                        "viewedSemesterId",
                        "cursusId",
                        "blocks",
                        "competencyBlocks",
                        "acquiredCredits",
                        "totalAcquiredCredits",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io1 = (input) =>
            _ip0(input) &&
            _ip1(input) &&
            Array.isArray(input.learningOutcomes) &&
            input.learningOutcomes.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io2(elem)
            ) &&
            "number" === typeof input.averageScore &&
            "number" === typeof input.credits &&
            "string" === typeof input.grade &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "id",
                        "title",
                        "learningOutcomes",
                        "averageScore",
                        "credits",
                        "grade",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io2 = (input) =>
            _ip0(input) &&
            _ip1(input) &&
            "number" === typeof input.acquiredPoints &&
            "number" === typeof input.totalPoints &&
            "number" === typeof input.score &&
            "boolean" === typeof input.isValidated &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "id",
                        "title",
                        "acquiredPoints",
                        "totalPoints",
                        "score",
                        "isValidated",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io3 = (input) =>
            Object.keys(input).every((key) => {
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _vo0 = (input, _path, _exceptionable = true) =>
            [
                "number" === typeof input.referentialId ||
                    _report(_exceptionable, {
                        path: _path + ".referentialId",
                        expected: "number",
                        value: input.referentialId,
                    }),
                "number" === typeof input.viewedSemesterId ||
                    _report(_exceptionable, {
                        path: _path + ".viewedSemesterId",
                        expected: "number",
                        value: input.viewedSemesterId,
                    }),
                "number" === typeof input.cursusId ||
                    _report(_exceptionable, {
                        path: _path + ".cursusId",
                        expected: "number",
                        value: input.cursusId,
                    }),
                ((Array.isArray(input.blocks) ||
                    _report(_exceptionable, {
                        path: _path + ".blocks",
                        expected: "Array<EvaluationBlock>",
                        value: input.blocks,
                    })) &&
                    input.blocks
                        .map(
                            (elem, _index4) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path + ".blocks[" + _index4 + "]",
                                        expected: "EvaluationBlock",
                                        value: elem,
                                    })) &&
                                    _vo1(
                                        elem,
                                        _path + ".blocks[" + _index4 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".blocks[" + _index4 + "]",
                                    expected: "EvaluationBlock",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".blocks",
                        expected: "Array<EvaluationBlock>",
                        value: input.blocks,
                    }),
                ((Array.isArray(input.competencyBlocks) ||
                    _report(_exceptionable, {
                        path: _path + ".competencyBlocks",
                        expected: "Array<Record<string, unknown>>",
                        value: input.competencyBlocks,
                    })) &&
                    input.competencyBlocks
                        .map(
                            (elem, _index5) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path +
                                            ".competencyBlocks[" +
                                            _index5 +
                                            "]",
                                        expected: "Record<string, unknown>",
                                        value: elem,
                                    })) &&
                                    _vo3(
                                        elem,
                                        _path +
                                            ".competencyBlocks[" +
                                            _index5 +
                                            "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".competencyBlocks[" +
                                        _index5 +
                                        "]",
                                    expected: "Record<string, unknown>",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".competencyBlocks",
                        expected: "Array<Record<string, unknown>>",
                        value: input.competencyBlocks,
                    }),
                "number" === typeof input.acquiredCredits ||
                    _report(_exceptionable, {
                        path: _path + ".acquiredCredits",
                        expected: "number",
                        value: input.acquiredCredits,
                    }),
                "number" === typeof input.totalAcquiredCredits ||
                    _report(_exceptionable, {
                        path: _path + ".totalAcquiredCredits",
                        expected: "number",
                        value: input.totalAcquiredCredits,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "referentialId",
                                    "viewedSemesterId",
                                    "cursusId",
                                    "blocks",
                                    "competencyBlocks",
                                    "acquiredCredits",
                                    "totalAcquiredCredits",
                                ].some((prop) => key === prop)
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
                ((Array.isArray(input.learningOutcomes) ||
                    _report(_exceptionable, {
                        path: _path + ".learningOutcomes",
                        expected: "Array<LearningOutcome>",
                        value: input.learningOutcomes,
                    })) &&
                    input.learningOutcomes
                        .map(
                            (elem, _index6) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path +
                                            ".learningOutcomes[" +
                                            _index6 +
                                            "]",
                                        expected: "LearningOutcome",
                                        value: elem,
                                    })) &&
                                    _vo2(
                                        elem,
                                        _path +
                                            ".learningOutcomes[" +
                                            _index6 +
                                            "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".learningOutcomes[" +
                                        _index6 +
                                        "]",
                                    expected: "LearningOutcome",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".learningOutcomes",
                        expected: "Array<LearningOutcome>",
                        value: input.learningOutcomes,
                    }),
                "number" === typeof input.averageScore ||
                    _report(_exceptionable, {
                        path: _path + ".averageScore",
                        expected: "number",
                        value: input.averageScore,
                    }),
                "number" === typeof input.credits ||
                    _report(_exceptionable, {
                        path: _path + ".credits",
                        expected: "number",
                        value: input.credits,
                    }),
                "string" === typeof input.grade ||
                    _report(_exceptionable, {
                        path: _path + ".grade",
                        expected: "string",
                        value: input.grade,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "id",
                                    "title",
                                    "learningOutcomes",
                                    "averageScore",
                                    "credits",
                                    "grade",
                                ].some((prop) => key === prop)
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
                "number" === typeof input.acquiredPoints ||
                    _report(_exceptionable, {
                        path: _path + ".acquiredPoints",
                        expected: "number",
                        value: input.acquiredPoints,
                    }),
                "number" === typeof input.totalPoints ||
                    _report(_exceptionable, {
                        path: _path + ".totalPoints",
                        expected: "number",
                        value: input.totalPoints,
                    }),
                "number" === typeof input.score ||
                    _report(_exceptionable, {
                        path: _path + ".score",
                        expected: "number",
                        value: input.score,
                    }),
                "boolean" === typeof input.isValidated ||
                    _report(_exceptionable, {
                        path: _path + ".isValidated",
                        expected: "boolean",
                        value: input.isValidated,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "id",
                                    "title",
                                    "acquiredPoints",
                                    "totalPoints",
                                    "score",
                                    "isValidated",
                                ].some((prop) => key === prop)
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
                            expected: "EvaluationValidationResponse",
                            value: input,
                        })) &&
                        _vo0(input, _path + "", true)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "EvaluationValidationResponse",
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
    })(),
    credits: (() => {
        const _io0 = (input) =>
            "number" === typeof input.acquiredCredits &&
            "number" === typeof input.priorCredits &&
            "number" === typeof input.totalAcquiredCredits;
        const _vo0 = (input, _path, _exceptionable = true) =>
            [
                "number" === typeof input.acquiredCredits ||
                    _report(_exceptionable, {
                        path: _path + ".acquiredCredits",
                        expected: "number",
                        value: input.acquiredCredits,
                    }),
                "number" === typeof input.priorCredits ||
                    _report(_exceptionable, {
                        path: _path + ".priorCredits",
                        expected: "number",
                        value: input.priorCredits,
                    }),
                "number" === typeof input.totalAcquiredCredits ||
                    _report(_exceptionable, {
                        path: _path + ".totalAcquiredCredits",
                        expected: "number",
                        value: input.totalAcquiredCredits,
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
                            expected: "EvaluationCreditsResponse",
                            value: input,
                        })) &&
                        _vo0(input, _path + "", true)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "EvaluationCreditsResponse",
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
    })(),
    graph: (() => {
        const _ip0 = (input) => "string" === typeof input["id"];
        const _ip1 = (input) => "string" === typeof input["kind"];
        const _vp0 = (input, _path, _exceptionable = true) =>
            "string" === typeof input["id"] ||
            _report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input["id"],
            });
        const _vp1 = (input, _path, _exceptionable = true) =>
            "string" === typeof input["kind"] ||
            _report(_exceptionable, {
                path: _path + ".kind",
                expected: "string",
                value: input["kind"],
            });
        const _io0 = (input) =>
            "number" === typeof input.referentialId &&
            "number" === typeof input.semester &&
            "number" === typeof input.semesterId &&
            "number" === typeof input.currentSemester &&
            "number" === typeof input.currentSemesterId &&
            Array.isArray(input.availableSemesters) &&
            input.availableSemesters.every(
                (elem) => "number" === typeof elem
            ) &&
            Array.isArray(input.attendedSemesters) &&
            input.attendedSemesters.every(
                (elem) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    false === Array.isArray(elem) &&
                    _io1(elem)
            ) &&
            Array.isArray(input.nodes) &&
            input.nodes.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io2(elem)
            ) &&
            Array.isArray(input.links) &&
            input.links.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io3(elem)
            ) &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "referentialId",
                        "semester",
                        "semesterId",
                        "currentSemester",
                        "currentSemesterId",
                        "availableSemesters",
                        "attendedSemesters",
                        "nodes",
                        "links",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io1 = (input) =>
            Object.keys(input).every((key) => {
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io2 = (input) =>
            _ip0(input) &&
            _ip1(input) &&
            "string" === typeof input.label &&
            "string" === typeof input.status &&
            Object.keys(input).every((key) => {
                if (
                    ["id", "kind", "label", "status"].some(
                        (prop) => key === prop
                    )
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io3 = (input) =>
            _ip0(input) &&
            "string" === typeof input.source &&
            "string" === typeof input.target &&
            _ip1(input) &&
            Object.keys(input).every((key) => {
                if (
                    ["id", "source", "target", "kind"].some(
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
                "number" === typeof input.referentialId ||
                    _report(_exceptionable, {
                        path: _path + ".referentialId",
                        expected: "number",
                        value: input.referentialId,
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
                "number" === typeof input.currentSemester ||
                    _report(_exceptionable, {
                        path: _path + ".currentSemester",
                        expected: "number",
                        value: input.currentSemester,
                    }),
                "number" === typeof input.currentSemesterId ||
                    _report(_exceptionable, {
                        path: _path + ".currentSemesterId",
                        expected: "number",
                        value: input.currentSemesterId,
                    }),
                ((Array.isArray(input.availableSemesters) ||
                    _report(_exceptionable, {
                        path: _path + ".availableSemesters",
                        expected: "Array<number>",
                        value: input.availableSemesters,
                    })) &&
                    input.availableSemesters
                        .map(
                            (elem, _index5) =>
                                "number" === typeof elem ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".availableSemesters[" +
                                        _index5 +
                                        "]",
                                    expected: "number",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".availableSemesters",
                        expected: "Array<number>",
                        value: input.availableSemesters,
                    }),
                ((Array.isArray(input.attendedSemesters) ||
                    _report(_exceptionable, {
                        path: _path + ".attendedSemesters",
                        expected: "Array<Record<string, unknown>>",
                        value: input.attendedSemesters,
                    })) &&
                    input.attendedSemesters
                        .map(
                            (elem, _index6) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path +
                                            ".attendedSemesters[" +
                                            _index6 +
                                            "]",
                                        expected: "Record<string, unknown>",
                                        value: elem,
                                    })) &&
                                    _vo1(
                                        elem,
                                        _path +
                                            ".attendedSemesters[" +
                                            _index6 +
                                            "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path:
                                        _path +
                                        ".attendedSemesters[" +
                                        _index6 +
                                        "]",
                                    expected: "Record<string, unknown>",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".attendedSemesters",
                        expected: "Array<Record<string, unknown>>",
                        value: input.attendedSemesters,
                    }),
                ((Array.isArray(input.nodes) ||
                    _report(_exceptionable, {
                        path: _path + ".nodes",
                        expected: "Array<EvaluationGraphNode>",
                        value: input.nodes,
                    })) &&
                    input.nodes
                        .map(
                            (elem, _index7) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path: _path + ".nodes[" + _index7 + "]",
                                        expected: "EvaluationGraphNode",
                                        value: elem,
                                    })) &&
                                    _vo2(
                                        elem,
                                        _path + ".nodes[" + _index7 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".nodes[" + _index7 + "]",
                                    expected: "EvaluationGraphNode",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".nodes",
                        expected: "Array<EvaluationGraphNode>",
                        value: input.nodes,
                    }),
                ((Array.isArray(input.links) ||
                    _report(_exceptionable, {
                        path: _path + ".links",
                        expected: "Array<EvaluationGraphLink>",
                        value: input.links,
                    })) &&
                    input.links
                        .map(
                            (elem, _index8) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path: _path + ".links[" + _index8 + "]",
                                        expected: "EvaluationGraphLink",
                                        value: elem,
                                    })) &&
                                    _vo3(
                                        elem,
                                        _path + ".links[" + _index8 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".links[" + _index8 + "]",
                                    expected: "EvaluationGraphLink",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".links",
                        expected: "Array<EvaluationGraphLink>",
                        value: input.links,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "referentialId",
                                    "semester",
                                    "semesterId",
                                    "currentSemester",
                                    "currentSemesterId",
                                    "availableSemesters",
                                    "attendedSemesters",
                                    "nodes",
                                    "links",
                                ].some((prop) => key === prop)
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
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
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
                "string" === typeof input.label ||
                    _report(_exceptionable, {
                        path: _path + ".label",
                        expected: "string",
                        value: input.label,
                    }),
                "string" === typeof input.status ||
                    _report(_exceptionable, {
                        path: _path + ".status",
                        expected: "string",
                        value: input.status,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["id", "kind", "label", "status"].some(
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
                "string" === typeof input.source ||
                    _report(_exceptionable, {
                        path: _path + ".source",
                        expected: "string",
                        value: input.source,
                    }),
                "string" === typeof input.target ||
                    _report(_exceptionable, {
                        path: _path + ".target",
                        expected: "string",
                        value: input.target,
                    }),
                _vp1(input, _path, true && _exceptionable),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["id", "source", "target", "kind"].some(
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
                            expected: "EvaluationGraphResponse",
                            value: input,
                        })) &&
                        _vo0(input, _path + "", true)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "EvaluationGraphResponse",
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
    })(),
    rncp: (() => {
        const _ip0 = (input) => "string" === typeof input["validationStatus"];
        const _ip1 = (input) => "string" === typeof input["title"];
        const _vp0 = (input, _path, _exceptionable = true) =>
            "string" === typeof input["validationStatus"] ||
            _report(_exceptionable, {
                path: _path + ".validationStatus",
                expected: "string",
                value: input["validationStatus"],
            });
        const _vp1 = (input, _path, _exceptionable = true) =>
            "string" === typeof input["title"] ||
            _report(_exceptionable, {
                path: _path + ".title",
                expected: "string",
                value: input["title"],
            });
        const _io0 = (input) =>
            "string" === typeof input.login &&
            "string" === typeof input.city &&
            "number" === typeof input.promo &&
            _ip0(input) &&
            Array.isArray(input.blocks) &&
            input.blocks.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io1(elem)
            ) &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "login",
                        "city",
                        "promo",
                        "validationStatus",
                        "blocks",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io1 = (input) =>
            _ip1(input) &&
            _ip0(input) &&
            Array.isArray(input.skills) &&
            input.skills.every(
                (elem) =>
                    "object" === typeof elem && null !== elem && _io2(elem)
            ) &&
            Object.keys(input).every((key) => {
                if (
                    ["title", "validationStatus", "skills"].some(
                        (prop) => key === prop
                    )
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _io2 = (input) =>
            _ip1(input) &&
            "boolean" === typeof input.certificativeValidation &&
            "boolean" === typeof input.formativeValidation &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "title",
                        "certificativeValidation",
                        "formativeValidation",
                    ].some((prop) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return true;
            });
        const _vo0 = (input, _path, _exceptionable = true) =>
            [
                "string" === typeof input.login ||
                    _report(_exceptionable, {
                        path: _path + ".login",
                        expected: "string",
                        value: input.login,
                    }),
                "string" === typeof input.city ||
                    _report(_exceptionable, {
                        path: _path + ".city",
                        expected: "string",
                        value: input.city,
                    }),
                "number" === typeof input.promo ||
                    _report(_exceptionable, {
                        path: _path + ".promo",
                        expected: "number",
                        value: input.promo,
                    }),
                _vp0(input, _path, true && _exceptionable),
                ((Array.isArray(input.blocks) ||
                    _report(_exceptionable, {
                        path: _path + ".blocks",
                        expected: "Array<RncpBlock>",
                        value: input.blocks,
                    })) &&
                    input.blocks
                        .map(
                            (elem, _index3) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path + ".blocks[" + _index3 + "]",
                                        expected: "RncpBlock",
                                        value: elem,
                                    })) &&
                                    _vo1(
                                        elem,
                                        _path + ".blocks[" + _index3 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".blocks[" + _index3 + "]",
                                    expected: "RncpBlock",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".blocks",
                        expected: "Array<RncpBlock>",
                        value: input.blocks,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "login",
                                    "city",
                                    "promo",
                                    "validationStatus",
                                    "blocks",
                                ].some((prop) => key === prop)
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
                _vp1(input, _path, true && _exceptionable),
                _vp0(input, _path, true && _exceptionable),
                ((Array.isArray(input.skills) ||
                    _report(_exceptionable, {
                        path: _path + ".skills",
                        expected: "Array<RncpSkill>",
                        value: input.skills,
                    })) &&
                    input.skills
                        .map(
                            (elem, _index4) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(_exceptionable, {
                                        path:
                                            _path + ".skills[" + _index4 + "]",
                                        expected: "RncpSkill",
                                        value: elem,
                                    })) &&
                                    _vo2(
                                        elem,
                                        _path + ".skills[" + _index4 + "]",
                                        true && _exceptionable
                                    )) ||
                                _report(_exceptionable, {
                                    path: _path + ".skills[" + _index4 + "]",
                                    expected: "RncpSkill",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                    _report(_exceptionable, {
                        path: _path + ".skills",
                        expected: "Array<RncpSkill>",
                        value: input.skills,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["title", "validationStatus", "skills"].some(
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
                _vp1(input, _path, true && _exceptionable),
                "boolean" === typeof input.certificativeValidation ||
                    _report(_exceptionable, {
                        path: _path + ".certificativeValidation",
                        expected: "boolean",
                        value: input.certificativeValidation,
                    }),
                "boolean" === typeof input.formativeValidation ||
                    _report(_exceptionable, {
                        path: _path + ".formativeValidation",
                        expected: "boolean",
                        value: input.formativeValidation,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "title",
                                    "certificativeValidation",
                                    "formativeValidation",
                                ].some((prop) => key === prop)
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
                            expected: "RncpValidationResponse",
                            value: input,
                        })) &&
                        _vo0(input, _path + "", true)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "RncpValidationResponse",
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
    })(),
    examTypes: (() => {
        const _io0 = (input) =>
            "number" === typeof input.id &&
            "string" === typeof input.label &&
            "string" === typeof input.type &&
            "number" === typeof input.maxMark &&
            "boolean" === typeof input.isSelfAssessment &&
            "number" === typeof input.schoolYear &&
            Object.keys(input).every((key) => {
                if (
                    [
                        "id",
                        "label",
                        "type",
                        "maxMark",
                        "isSelfAssessment",
                        "schoolYear",
                    ].some((prop) => key === prop)
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
                "string" === typeof input.label ||
                    _report(_exceptionable, {
                        path: _path + ".label",
                        expected: "string",
                        value: input.label,
                    }),
                "string" === typeof input.type ||
                    _report(_exceptionable, {
                        path: _path + ".type",
                        expected: "string",
                        value: input.type,
                    }),
                "number" === typeof input.maxMark ||
                    _report(_exceptionable, {
                        path: _path + ".maxMark",
                        expected: "number",
                        value: input.maxMark,
                    }),
                "boolean" === typeof input.isSelfAssessment ||
                    _report(_exceptionable, {
                        path: _path + ".isSelfAssessment",
                        expected: "boolean",
                        value: input.isSelfAssessment,
                    }),
                "number" === typeof input.schoolYear ||
                    _report(_exceptionable, {
                        path: _path + ".schoolYear",
                        expected: "number",
                        value: input.schoolYear,
                    }),
                false === _exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                [
                                    "id",
                                    "label",
                                    "type",
                                    "maxMark",
                                    "isSelfAssessment",
                                    "schoolYear",
                                ].some((prop) => key === prop)
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
                (elem) =>
                    "object" === typeof elem && null !== elem && _io0(elem)
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
                            expected: "Array<ExamType>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem, _index2) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        _report(true, {
                                            path: _path + "[" + _index2 + "]",
                                            expected: "ExamType",
                                            value: elem,
                                        })) &&
                                        _vo0(
                                            elem,
                                            _path + "[" + _index2 + "]",
                                            true
                                        )) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "ExamType",
                                        value: elem,
                                    })
                            )
                            .every((flag) => flag)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "Array<ExamType>",
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
    })(),
};
export class Evaluations extends ApiClient {
    getStudentExams() {
        return this.getJson("students/exams", validators.exams);
    }
    getStudentExamDerogations() {
        return this.getJson(
            "students/exam-derogations",
            validators.derogations
        );
    }
    getStudentEvaluations(page = 1, limit = 100) {
        const effectiveLimit = Math.min(Math.max(limit, 1), 100);
        const params = new URLSearchParams({
            page: String(page),
            limit: String(effectiveLimit),
        });
        return this.getJson(
            `students/evaluations?${params}`,
            validators.evaluations
        );
    }
    getValidationAlerts() {
        return this.getJson(
            "evaluations/validations/alerts/me",
            validators.alerts
        );
    }
    getValidations() {
        return this.getJson(
            "evaluations/validations/me",
            validators.validations
        );
    }
    getCredits() {
        return this.getJson(
            "evaluations/validations/credits/me",
            validators.credits
        );
    }
    getValidationGraph() {
        return this.getJson(
            "evaluations/validations/graph/me",
            validators.graph
        );
    }
    getRncp() {
        return this.getJson("evaluations/rncp/me", validators.rncp);
    }
    getExamTypes(schoolYear) {
        return this.getJson(
            `config/exam-types?schoolYear=${encodeURIComponent(schoolYear)}`,
            validators.examTypes
        );
    }
}
//# sourceMappingURL=evaluations.js.map
