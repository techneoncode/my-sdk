import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateStudentProfileResponse = (() => {
    const _ip0 = (input) => "string" === typeof input["code"];
    const _ip1 = (input) => "string" === typeof input["createdAt"];
    const _ip2 = (input) => "number" === typeof input["id"];
    const _ip3 = (input) => "boolean" === typeof input["isActive"];
    const _ip4 = (input) => "string" === typeof input["name"];
    const _ip5 = (input) => "string" === typeof input["updatedAt"];
    const _vp0 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["code"] ||
        _report(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input["code"],
        });
    const _vp1 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["createdAt"] ||
        _report(_exceptionable, {
            path: _path + ".createdAt",
            expected: "string",
            value: input["createdAt"],
        });
    const _vp2 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["id"] ||
        _report(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input["id"],
        });
    const _vp3 = (input, _path, _exceptionable = true) =>
        "boolean" === typeof input["isActive"] ||
        _report(_exceptionable, {
            path: _path + ".isActive",
            expected: "boolean",
            value: input["isActive"],
        });
    const _vp4 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["name"] ||
        _report(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input["name"],
        });
    const _vp5 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["updatedAt"] ||
        _report(_exceptionable, {
            path: _path + ".updatedAt",
            expected: "string",
            value: input["updatedAt"],
        });
    const _io0 = (input) =>
        "object" === typeof input.campus &&
        null !== input.campus &&
        _io1(input.campus) &&
        "string" === typeof input.civility &&
        "object" === typeof input.cursus &&
        null !== input.cursus &&
        _io5(input.cursus) &&
        "string" === typeof input.cursusYear &&
        true &&
        "string" === typeof input.firstname &&
        true &&
        "boolean" === typeof input.isRepeating &&
        "string" === typeof input.lastname &&
        "string" === typeof input.login &&
        "number" === typeof input.promotion &&
        "number" === typeof input.semester &&
        true;
    const _io1 = (input) =>
        "string" === typeof input.address &&
        _ip0(input) &&
        "string" === typeof input.country &&
        _ip1(input) &&
        _ip2(input) &&
        _ip3(input) &&
        "object" === typeof input.metadata &&
        null !== input.metadata &&
        _io2(input.metadata) &&
        _ip4(input) &&
        "string" === typeof input.timezone &&
        _ip5(input);
    const _io2 = (input) =>
        "object" === typeof input.edsquare &&
        null !== input.edsquare &&
        _io3(input.edsquare);
    const _io3 = (input) =>
        "number" === typeof input.campusId &&
        Array.isArray(input.classes) &&
        input.classes.every(
            (elem) => "object" === typeof elem && null !== elem && _io4(elem)
        ) &&
        "boolean" === typeof input.syncEnabled;
    const _io4 = (input) =>
        "string" === typeof input.color &&
        _ip2(input) &&
        _ip4(input) &&
        "string" === typeof input.section;
    const _io5 = (input) =>
        _ip0(input) &&
        _ip1(input) &&
        "string" === typeof input.description &&
        "number" === typeof input.durationInYears &&
        _ip2(input) &&
        _ip3(input) &&
        "boolean" === typeof input.iseePromotionOnCursusFrame &&
        _ip4(input) &&
        "string" === typeof input.repositoryUrl &&
        "number" === typeof input.schoolYear &&
        _ip5(input);
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            ((("object" === typeof input.campus && null !== input.campus) ||
                _report(_exceptionable, {
                    path: _path + ".campus",
                    expected: "StudentProfileCampus",
                    value: input.campus,
                })) &&
                _vo1(
                    input.campus,
                    _path + ".campus",
                    true && _exceptionable
                )) ||
                _report(_exceptionable, {
                    path: _path + ".campus",
                    expected: "StudentProfileCampus",
                    value: input.campus,
                }),
            "string" === typeof input.civility ||
                _report(_exceptionable, {
                    path: _path + ".civility",
                    expected: "string",
                    value: input.civility,
                }),
            ((("object" === typeof input.cursus && null !== input.cursus) ||
                _report(_exceptionable, {
                    path: _path + ".cursus",
                    expected: "StudentProfileCursus",
                    value: input.cursus,
                })) &&
                _vo5(
                    input.cursus,
                    _path + ".cursus",
                    true && _exceptionable
                )) ||
                _report(_exceptionable, {
                    path: _path + ".cursus",
                    expected: "StudentProfileCursus",
                    value: input.cursus,
                }),
            "string" === typeof input.cursusYear ||
                _report(_exceptionable, {
                    path: _path + ".cursusYear",
                    expected: "string",
                    value: input.cursusYear,
                }),
            true,
            "string" === typeof input.firstname ||
                _report(_exceptionable, {
                    path: _path + ".firstname",
                    expected: "string",
                    value: input.firstname,
                }),
            true,
            "boolean" === typeof input.isRepeating ||
                _report(_exceptionable, {
                    path: _path + ".isRepeating",
                    expected: "boolean",
                    value: input.isRepeating,
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
            "number" === typeof input.semester ||
                _report(_exceptionable, {
                    path: _path + ".semester",
                    expected: "number",
                    value: input.semester,
                }),
            true,
        ].every((flag) => flag);
    const _vo1 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.address ||
                _report(_exceptionable, {
                    path: _path + ".address",
                    expected: "string",
                    value: input.address,
                }),
            _vp0(input, _path, true && _exceptionable),
            "string" === typeof input.country ||
                _report(_exceptionable, {
                    path: _path + ".country",
                    expected: "string",
                    value: input.country,
                }),
            _vp1(input, _path, true && _exceptionable),
            _vp2(input, _path, true && _exceptionable),
            _vp3(input, _path, true && _exceptionable),
            ((("object" === typeof input.metadata && null !== input.metadata) ||
                _report(_exceptionable, {
                    path: _path + ".metadata",
                    expected: "StudentProfileCampusMetadata",
                    value: input.metadata,
                })) &&
                _vo2(
                    input.metadata,
                    _path + ".metadata",
                    true && _exceptionable
                )) ||
                _report(_exceptionable, {
                    path: _path + ".metadata",
                    expected: "StudentProfileCampusMetadata",
                    value: input.metadata,
                }),
            _vp4(input, _path, true && _exceptionable),
            "string" === typeof input.timezone ||
                _report(_exceptionable, {
                    path: _path + ".timezone",
                    expected: "string",
                    value: input.timezone,
                }),
            _vp5(input, _path, true && _exceptionable),
        ].every((flag) => flag);
    const _vo2 = (input, _path, _exceptionable = true) =>
        [
            ((("object" === typeof input.edsquare && null !== input.edsquare) ||
                _report(_exceptionable, {
                    path: _path + ".edsquare",
                    expected: "StudentProfileCampusMetadataEdsquare",
                    value: input.edsquare,
                })) &&
                _vo3(
                    input.edsquare,
                    _path + ".edsquare",
                    true && _exceptionable
                )) ||
                _report(_exceptionable, {
                    path: _path + ".edsquare",
                    expected: "StudentProfileCampusMetadataEdsquare",
                    value: input.edsquare,
                }),
        ].every((flag) => flag);
    const _vo3 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.campusId ||
                _report(_exceptionable, {
                    path: _path + ".campusId",
                    expected: "number",
                    value: input.campusId,
                }),
            ((Array.isArray(input.classes) ||
                _report(_exceptionable, {
                    path: _path + ".classes",
                    expected:
                        "Array<StudentProfileCampusMetadataEdsquareClassItem>",
                    value: input.classes,
                })) &&
                input.classes
                    .map(
                        (elem, _index2) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path: _path + ".classes[" + _index2 + "]",
                                    expected:
                                        "StudentProfileCampusMetadataEdsquareClassItem",
                                    value: elem,
                                })) &&
                                _vo4(
                                    elem,
                                    _path + ".classes[" + _index2 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".classes[" + _index2 + "]",
                                expected:
                                    "StudentProfileCampusMetadataEdsquareClassItem",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".classes",
                    expected:
                        "Array<StudentProfileCampusMetadataEdsquareClassItem>",
                    value: input.classes,
                }),
            "boolean" === typeof input.syncEnabled ||
                _report(_exceptionable, {
                    path: _path + ".syncEnabled",
                    expected: "boolean",
                    value: input.syncEnabled,
                }),
        ].every((flag) => flag);
    const _vo4 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.color ||
                _report(_exceptionable, {
                    path: _path + ".color",
                    expected: "string",
                    value: input.color,
                }),
            _vp2(input, _path, true && _exceptionable),
            _vp4(input, _path, true && _exceptionable),
            "string" === typeof input.section ||
                _report(_exceptionable, {
                    path: _path + ".section",
                    expected: "string",
                    value: input.section,
                }),
        ].every((flag) => flag);
    const _vo5 = (input, _path, _exceptionable = true) =>
        [
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            "string" === typeof input.description ||
                _report(_exceptionable, {
                    path: _path + ".description",
                    expected: "string",
                    value: input.description,
                }),
            "number" === typeof input.durationInYears ||
                _report(_exceptionable, {
                    path: _path + ".durationInYears",
                    expected: "number",
                    value: input.durationInYears,
                }),
            _vp2(input, _path, true && _exceptionable),
            _vp3(input, _path, true && _exceptionable),
            "boolean" === typeof input.iseePromotionOnCursusFrame ||
                _report(_exceptionable, {
                    path: _path + ".iseePromotionOnCursusFrame",
                    expected: "boolean",
                    value: input.iseePromotionOnCursusFrame,
                }),
            _vp4(input, _path, true && _exceptionable),
            "string" === typeof input.repositoryUrl ||
                _report(_exceptionable, {
                    path: _path + ".repositoryUrl",
                    expected: "string",
                    value: input.repositoryUrl,
                }),
            "number" === typeof input.schoolYear ||
                _report(_exceptionable, {
                    path: _path + ".schoolYear",
                    expected: "number",
                    value: input.schoolYear,
                }),
            _vp5(input, _path, true && _exceptionable),
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
                        expected: "StudentProfileResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentProfileResponse",
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
const validateStudentLogTimeResponse = (() => {
    const _io0 = (input) =>
        "string" === typeof input.date &&
        "string" === typeof input.log_time &&
        "string" === typeof input.promo_log_time;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.date ||
                _report(_exceptionable, {
                    path: _path + ".date",
                    expected: "string",
                    value: input.date,
                }),
            "string" === typeof input.log_time ||
                _report(_exceptionable, {
                    path: _path + ".log_time",
                    expected: "string",
                    value: input.log_time,
                }),
            "string" === typeof input.promo_log_time ||
                _report(_exceptionable, {
                    path: _path + ".promo_log_time",
                    expected: "string",
                    value: input.promo_log_time,
                }),
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
                        expected: "StudentLogTimeResponse",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "StudentLogTimeResponseItem",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "StudentLogTimeResponseItem",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentLogTimeResponse",
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
const validateStudentProjectListResponse = (() => {
    const _ip0 = (input) => "number" === typeof input["absenceRatio"];
    const _ip1 = (input) => "number" === typeof input["absentCount"];
    const _ip2 = (input) => "number" === typeof input["absentDurationMinutes"];
    const _ip3 = (input) => "string" === typeof input["endDate"];
    const _ip4 = (input) => "string" === typeof input["groupName"];
    const _ip5 = (input) =>
        "boolean" === typeof input["hasExceededAbsenceThreshold"];
    const _ip6 = (input) => "number" === typeof input["justifiedCount"];
    const _ip7 = (input) =>
        "number" === typeof input["justifiedDurationMinutes"];
    const _ip8 = (input) => "string" === typeof input["login"];
    const _ip9 = (input) => "number" === typeof input["presentCount"];
    const _ip10 = (input) =>
        "number" === typeof input["presentDurationMinutes"];
    const _ip11 = (input) => "number" === typeof input["projectInstanceId"];
    const _ip12 = (input) => "string" === typeof input["projectName"];
    const _ip13 = (input) => "number" === typeof input["registrationId"];
    const _ip14 = (input) => "string" === typeof input["startDate"];
    const _ip15 = (input) => "boolean" === typeof input["tooManyAbsences"];
    const _ip16 = (input) => true;
    const _ip17 = (input) =>
        "string" === typeof input["tooManyAbsencesManualOverrideComment"];
    const _ip18 = (input) =>
        "number" === typeof input["totalTrackedDurationMinutes"];
    const _ip19 = (input) => "number" === typeof input["trackedEventsCount"];
    const _vp0 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["absenceRatio"] ||
        _report(_exceptionable, {
            path: _path + ".absenceRatio",
            expected: "number",
            value: input["absenceRatio"],
        });
    const _vp1 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["absentCount"] ||
        _report(_exceptionable, {
            path: _path + ".absentCount",
            expected: "number",
            value: input["absentCount"],
        });
    const _vp2 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["absentDurationMinutes"] ||
        _report(_exceptionable, {
            path: _path + ".absentDurationMinutes",
            expected: "number",
            value: input["absentDurationMinutes"],
        });
    const _vp3 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["endDate"] ||
        _report(_exceptionable, {
            path: _path + ".endDate",
            expected: "string",
            value: input["endDate"],
        });
    const _vp4 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["groupName"] ||
        _report(_exceptionable, {
            path: _path + ".groupName",
            expected: "string",
            value: input["groupName"],
        });
    const _vp5 = (input, _path, _exceptionable = true) =>
        "boolean" === typeof input["hasExceededAbsenceThreshold"] ||
        _report(_exceptionable, {
            path: _path + ".hasExceededAbsenceThreshold",
            expected: "boolean",
            value: input["hasExceededAbsenceThreshold"],
        });
    const _vp6 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["justifiedCount"] ||
        _report(_exceptionable, {
            path: _path + ".justifiedCount",
            expected: "number",
            value: input["justifiedCount"],
        });
    const _vp7 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["justifiedDurationMinutes"] ||
        _report(_exceptionable, {
            path: _path + ".justifiedDurationMinutes",
            expected: "number",
            value: input["justifiedDurationMinutes"],
        });
    const _vp8 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["login"] ||
        _report(_exceptionable, {
            path: _path + ".login",
            expected: "string",
            value: input["login"],
        });
    const _vp9 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["presentCount"] ||
        _report(_exceptionable, {
            path: _path + ".presentCount",
            expected: "number",
            value: input["presentCount"],
        });
    const _vp10 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["presentDurationMinutes"] ||
        _report(_exceptionable, {
            path: _path + ".presentDurationMinutes",
            expected: "number",
            value: input["presentDurationMinutes"],
        });
    const _vp11 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["projectInstanceId"] ||
        _report(_exceptionable, {
            path: _path + ".projectInstanceId",
            expected: "number",
            value: input["projectInstanceId"],
        });
    const _vp12 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["projectName"] ||
        _report(_exceptionable, {
            path: _path + ".projectName",
            expected: "string",
            value: input["projectName"],
        });
    const _vp13 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["registrationId"] ||
        _report(_exceptionable, {
            path: _path + ".registrationId",
            expected: "number",
            value: input["registrationId"],
        });
    const _vp14 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["startDate"] ||
        _report(_exceptionable, {
            path: _path + ".startDate",
            expected: "string",
            value: input["startDate"],
        });
    const _vp15 = (input, _path, _exceptionable = true) =>
        "boolean" === typeof input["tooManyAbsences"] ||
        _report(_exceptionable, {
            path: _path + ".tooManyAbsences",
            expected: "boolean",
            value: input["tooManyAbsences"],
        });
    const _vp16 = (input, _path, _exceptionable = true) => true;
    const _vp17 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["tooManyAbsencesManualOverrideComment"] ||
        _report(_exceptionable, {
            path: _path + ".tooManyAbsencesManualOverrideComment",
            expected: "string",
            value: input["tooManyAbsencesManualOverrideComment"],
        });
    const _vp18 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["totalTrackedDurationMinutes"] ||
        _report(_exceptionable, {
            path: _path + ".totalTrackedDurationMinutes",
            expected: "number",
            value: input["totalTrackedDurationMinutes"],
        });
    const _vp19 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["trackedEventsCount"] ||
        _report(_exceptionable, {
            path: _path + ".trackedEventsCount",
            expected: "number",
            value: input["trackedEventsCount"],
        });
    const _io0 = (input) =>
        _ip0(input) &&
        _ip1(input) &&
        _ip2(input) &&
        _ip3(input) &&
        _ip4(input) &&
        _ip5(input) &&
        _ip6(input) &&
        _ip7(input) &&
        _ip8(input) &&
        _ip9(input) &&
        _ip10(input) &&
        _ip11(input) &&
        _ip12(input) &&
        _ip13(input) &&
        _ip14(input) &&
        _ip15(input) &&
        _ip16(input) &&
        _ip17(input) &&
        _ip18(input) &&
        _ip19(input);
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            _vp2(input, _path, true && _exceptionable),
            _vp3(input, _path, true && _exceptionable),
            _vp4(input, _path, true && _exceptionable),
            _vp5(input, _path, true && _exceptionable),
            _vp6(input, _path, true && _exceptionable),
            _vp7(input, _path, true && _exceptionable),
            _vp8(input, _path, true && _exceptionable),
            _vp9(input, _path, true && _exceptionable),
            _vp10(input, _path, true && _exceptionable),
            _vp11(input, _path, true && _exceptionable),
            _vp12(input, _path, true && _exceptionable),
            _vp13(input, _path, true && _exceptionable),
            _vp14(input, _path, true && _exceptionable),
            _vp15(input, _path, true && _exceptionable),
            _vp16(input, _path, true && _exceptionable),
            _vp17(input, _path, true && _exceptionable),
            _vp18(input, _path, true && _exceptionable),
            _vp19(input, _path, true && _exceptionable),
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
                        expected: "StudentProjectListResponse",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected:
                                            "StudentProjectListResponseItem",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "StudentProjectListResponseItem",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentProjectListResponse",
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
const validateStudentProjectAbsence = (() => {
    const _io0 = (input) =>
        "number" === typeof input.projectInstanceId &&
        "string" === typeof input.projectName &&
        "string" === typeof input.login &&
        "number" === typeof input.absenceRatio &&
        Object.keys(input).every((key) => {
            if (
                [
                    "projectInstanceId",
                    "projectName",
                    "login",
                    "absenceRatio",
                ].some((prop) => key === prop)
            )
                return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.projectInstanceId ||
                _report(_exceptionable, {
                    path: _path + ".projectInstanceId",
                    expected: "number",
                    value: input.projectInstanceId,
                }),
            "string" === typeof input.projectName ||
                _report(_exceptionable, {
                    path: _path + ".projectName",
                    expected: "string",
                    value: input.projectName,
                }),
            "string" === typeof input.login ||
                _report(_exceptionable, {
                    path: _path + ".login",
                    expected: "string",
                    value: input.login,
                }),
            "number" === typeof input.absenceRatio ||
                _report(_exceptionable, {
                    path: _path + ".absenceRatio",
                    expected: "number",
                    value: input.absenceRatio,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            [
                                "projectInstanceId",
                                "projectName",
                                "login",
                                "absenceRatio",
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
                        expected: "StudentProjectAbsence",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentProjectAbsence",
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
const validateFieldsVisibility = (() => {
    const _io0 = (input) =>
        "boolean" === typeof input.logTime &&
        "boolean" === typeof input.exams &&
        "boolean" === typeof input.rncp;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "boolean" === typeof input.logTime ||
                _report(_exceptionable, {
                    path: _path + ".logTime",
                    expected: "boolean",
                    value: input.logTime,
                }),
            "boolean" === typeof input.exams ||
                _report(_exceptionable, {
                    path: _path + ".exams",
                    expected: "boolean",
                    value: input.exams,
                }),
            "boolean" === typeof input.rncp ||
                _report(_exceptionable, {
                    path: _path + ".rncp",
                    expected: "boolean",
                    value: input.rncp,
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
                        expected: "StudentFieldsVisibilityResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentFieldsVisibilityResponse",
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
const validatePhotoUrls = (() => {
    const _io0 = (input) =>
        "string" === typeof input.login && "string" === typeof input.url;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.login ||
                _report(_exceptionable, {
                    path: _path + ".login",
                    expected: "string",
                    value: input.login,
                }),
            "string" === typeof input.url ||
                _report(_exceptionable, {
                    path: _path + ".url",
                    expected: "string",
                    value: input.url,
                }),
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
                        expected: "Array<StudentPhotoUrl>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "StudentPhotoUrl",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "StudentPhotoUrl",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<StudentPhotoUrl>",
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
const validateGithubStats = (() => {
    const _io0 = (input) =>
        "number" === typeof input.c &&
        "number" === typeof input.a &&
        "number" === typeof input.d;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.c ||
                _report(_exceptionable, {
                    path: _path + ".c",
                    expected: "number",
                    value: input.c,
                }),
            "number" === typeof input.a ||
                _report(_exceptionable, {
                    path: _path + ".a",
                    expected: "number",
                    value: input.a,
                }),
            "number" === typeof input.d ||
                _report(_exceptionable, {
                    path: _path + ".d",
                    expected: "number",
                    value: input.d,
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
                        expected: "StudentGithubStatsResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentGithubStatsResponse",
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
const validateFollowUps = (() => {
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
                        expected: "Array<StudentFollowUp>",
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
                                        expected: "StudentFollowUp",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "StudentFollowUp",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<StudentFollowUp>",
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
const validateDocuments = (() => {
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
                        expected: "Array<StudentDocument>",
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
                                        expected: "StudentDocument",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "StudentDocument",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<StudentDocument>",
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
        Array.isArray(input.results) &&
        input.results.every(
            (elem) =>
                "object" === typeof elem &&
                null !== elem &&
                false === Array.isArray(elem) &&
                _io1(elem)
        );
    const _io1 = (input) =>
        Object.keys(input).every((key) => {
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            ((Array.isArray(input.results) ||
                _report(_exceptionable, {
                    path: _path + ".results",
                    expected: "Array<StudentTestResult>",
                    value: input.results,
                })) &&
                input.results
                    .map(
                        (elem, _index2) =>
                            ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                _report(_exceptionable, {
                                    path: _path + ".results[" + _index2 + "]",
                                    expected: "StudentTestResult",
                                    value: elem,
                                })) &&
                                _vo1(
                                    elem,
                                    _path + ".results[" + _index2 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".results[" + _index2 + "]",
                                expected: "StudentTestResult",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".results",
                    expected: "Array<StudentTestResult>",
                    value: input.results,
                }),
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
                        expected: "StudentTestResultsResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentTestResultsResponse",
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
const validateCollaborators = (() => {
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
                        expected: "Array<StudentCollaborator>",
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
                                        expected: "StudentCollaborator",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "StudentCollaborator",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<StudentCollaborator>",
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
 * Service responsible for user-related API requests.
 *
 * Domain-specific methods should be added here as the corresponding API
 * response interfaces are documented. This class intentionally keeps no user
 * state: returned data belongs to the SDK consumer.
 */
export class User extends ApiClient {
    /**
     * Retrieves the authenticated student's profile.
     *
     * @returns The student's profile.
     */
    async getStudentProfile() {
        return this.getJson(
            "students/profile",
            validateStudentProfileResponse,
            {},
            [200, 201, 304]
        );
    }
    /**
     * Retrieves the authenticated student's log time.
     *
     * @returns The student's log time.
     */
    async getStudentLogTime() {
        return this.getJson(
            "students/logtime",
            validateStudentLogTimeResponse,
            {},
            [200, 201, 304]
        );
    }
    /**
     * Retrieves the authenticated student's projects.
     *
     * @returns The student's projects.
     */
    async getStudentProjects() {
        return this.getJson(
            "students/absences/projects",
            validateStudentProjectListResponse,
            {},
            [200, 201, 304]
        );
    }
    async getStudentProjectAbsence(projectInstanceId) {
        return this.getJson(
            `students/absences/projects/${projectInstanceId}`,
            validateStudentProjectAbsence
        );
    }
    async getStudentFieldsVisibility() {
        return this.getJson(
            "students/fields-visibility",
            validateFieldsVisibility
        );
    }
    async getStudentGithubStats(from, to) {
        const params = new URLSearchParams({ from, to });
        return this.getJson(
            `students/github-stats?${params}`,
            validateGithubStats
        );
    }
    async getUserPhotoUrls(logins) {
        return this.postJson("users/photos/urls", validatePhotoUrls, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(logins),
        });
    }
    async getStudentFollowUps() {
        return this.getJson("students/follow-ups", validateFollowUps);
    }
    async getStudentDocuments() {
        return this.getJson("students/documents", validateDocuments);
    }
    async getStudentResults(year) {
        return this.getJson(
            `students/test-results?year=${year}`,
            validateTestResults
        );
    }
    async getStudentCollaborators() {
        return this.getJson("students/collaborators", validateCollaborators);
    }
}
//# sourceMappingURL=user.js.map
