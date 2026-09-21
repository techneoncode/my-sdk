import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateChatbotAvailability = (() => {
    const _io0 = (input) =>
        "string" === typeof input.message &&
        "string" === typeof input.error &&
        "number" === typeof input.statusCode;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.message ||
                _report(_exceptionable, {
                    path: _path + ".message",
                    expected: "string",
                    value: input.message,
                }),
            "string" === typeof input.error ||
                _report(_exceptionable, {
                    path: _path + ".error",
                    expected: "string",
                    value: input.error,
                }),
            "number" === typeof input.statusCode ||
                _report(_exceptionable, {
                    path: _path + ".statusCode",
                    expected: "number",
                    value: input.statusCode,
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
                        expected: "ChatbotAvailabilityResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "ChatbotAvailabilityResponse",
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
const validateCampus = (() => {
    const _ip0 = (input) => "number" === typeof input["id"];
    const _ip1 = (input) => "string" === typeof input["name"];
    const _vp0 = (input, _path, _exceptionable = true) =>
        "number" === typeof input["id"] ||
        _report(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input["id"],
        });
    const _vp1 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["name"] ||
        _report(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input["name"],
        });
    const _io0 = (input) =>
        "string" === typeof input.address &&
        "string" === typeof input.code &&
        "string" === typeof input.country &&
        "string" === typeof input.createdAt &&
        _ip0(input) &&
        "boolean" === typeof input.isActive &&
        "object" === typeof input.metadata &&
        null !== input.metadata &&
        _io1(input.metadata) &&
        _ip1(input) &&
        "string" === typeof input.timezone &&
        "string" === typeof input.updatedAt;
    const _io1 = (input) =>
        "object" === typeof input.edsquare &&
        null !== input.edsquare &&
        _io2(input.edsquare);
    const _io2 = (input) =>
        "number" === typeof input.campusId &&
        Array.isArray(input.classes) &&
        input.classes.every(
            (elem) => "object" === typeof elem && null !== elem && _io3(elem)
        ) &&
        "boolean" === typeof input.syncEnabled;
    const _io3 = (input) =>
        "string" === typeof input.color &&
        _ip0(input) &&
        _ip1(input) &&
        "string" === typeof input.section;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.address ||
                _report(_exceptionable, {
                    path: _path + ".address",
                    expected: "string",
                    value: input.address,
                }),
            "string" === typeof input.code ||
                _report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                }),
            "string" === typeof input.country ||
                _report(_exceptionable, {
                    path: _path + ".country",
                    expected: "string",
                    value: input.country,
                }),
            "string" === typeof input.createdAt ||
                _report(_exceptionable, {
                    path: _path + ".createdAt",
                    expected: "string",
                    value: input.createdAt,
                }),
            _vp0(input, _path, true && _exceptionable),
            "boolean" === typeof input.isActive ||
                _report(_exceptionable, {
                    path: _path + ".isActive",
                    expected: "boolean",
                    value: input.isActive,
                }),
            ((("object" === typeof input.metadata && null !== input.metadata) ||
                _report(_exceptionable, {
                    path: _path + ".metadata",
                    expected: "StudentProfileCampusMetadata",
                    value: input.metadata,
                })) &&
                _vo1(
                    input.metadata,
                    _path + ".metadata",
                    true && _exceptionable
                )) ||
                _report(_exceptionable, {
                    path: _path + ".metadata",
                    expected: "StudentProfileCampusMetadata",
                    value: input.metadata,
                }),
            _vp1(input, _path, true && _exceptionable),
            "string" === typeof input.timezone ||
                _report(_exceptionable, {
                    path: _path + ".timezone",
                    expected: "string",
                    value: input.timezone,
                }),
            "string" === typeof input.updatedAt ||
                _report(_exceptionable, {
                    path: _path + ".updatedAt",
                    expected: "string",
                    value: input.updatedAt,
                }),
        ].every((flag) => flag);
    const _vo1 = (input, _path, _exceptionable = true) =>
        [
            ((("object" === typeof input.edsquare && null !== input.edsquare) ||
                _report(_exceptionable, {
                    path: _path + ".edsquare",
                    expected: "StudentProfileCampusMetadataEdsquare",
                    value: input.edsquare,
                })) &&
                _vo2(
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
    const _vo2 = (input, _path, _exceptionable = true) =>
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
                                _vo3(
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
    const _vo3 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.color ||
                _report(_exceptionable, {
                    path: _path + ".color",
                    expected: "string",
                    value: input.color,
                }),
            _vp0(input, _path, true && _exceptionable),
            _vp1(input, _path, true && _exceptionable),
            "string" === typeof input.section ||
                _report(_exceptionable, {
                    path: _path + ".section",
                    expected: "string",
                    value: input.section,
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
                        expected: "StudentProfileCampus",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "StudentProfileCampus",
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
export class System extends ApiClient {
    getChatbotAvailability() {
        return this.getJson(
            "ai/chatbot/availability",
            validateChatbotAvailability
        );
    }
    getCampus() {
        return this.getJson("campus", validateCampus);
    }
}
//# sourceMappingURL=system.js.map
