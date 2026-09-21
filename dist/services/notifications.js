import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateBellCount = (() => {
    const _io0 = (input) => "number" === typeof input.count;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.count ||
                _report(_exceptionable, {
                    path: _path + ".count",
                    expected: "number",
                    value: input.count,
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
                        expected: "NotificationBellCount",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "NotificationBellCount",
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
const validateFeed = (() => {
    const _ip0 = (input) => "string" === typeof input["type"];
    const _vp0 = (input, _path, _exceptionable = true) =>
        "string" === typeof input["type"] ||
        _report(_exceptionable, {
            path: _path + ".type",
            expected: "string",
            value: input["type"],
        });
    const _io0 = (input) =>
        "string" === typeof input.id &&
        _ip0(input) &&
        "object" === typeof input.data &&
        null !== input.data &&
        false === Array.isArray(input.data) &&
        _io1(input.data) &&
        Array.isArray(input.actions) &&
        input.actions.every(
            (elem) => "object" === typeof elem && null !== elem && _io2(elem)
        ) &&
        "string" === typeof input.createdAt &&
        "boolean" === typeof input.isSeenBell &&
        "boolean" === typeof input.isSeenSplash &&
        Object.keys(input).every((key) => {
            if (
                [
                    "id",
                    "type",
                    "data",
                    "actions",
                    "createdAt",
                    "isSeenBell",
                    "isSeenSplash",
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
        "object" === typeof input.payload &&
        null !== input.payload &&
        false === Array.isArray(input.payload) &&
        _io1(input.payload) &&
        Object.keys(input).every((key) => {
            if (["type", "payload"].some((prop) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.id ||
                _report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id,
                }),
            _vp0(input, _path, true && _exceptionable),
            ((("object" === typeof input.data &&
                null !== input.data &&
                false === Array.isArray(input.data)) ||
                _report(_exceptionable, {
                    path: _path + ".data",
                    expected: "Record<string, unknown>",
                    value: input.data,
                })) &&
                _vo1(input.data, _path + ".data", true && _exceptionable)) ||
                _report(_exceptionable, {
                    path: _path + ".data",
                    expected: "Record<string, unknown>",
                    value: input.data,
                }),
            ((Array.isArray(input.actions) ||
                _report(_exceptionable, {
                    path: _path + ".actions",
                    expected: "Array<NotificationAction>",
                    value: input.actions,
                })) &&
                input.actions
                    .map(
                        (elem, _index4) =>
                            ((("object" === typeof elem && null !== elem) ||
                                _report(_exceptionable, {
                                    path: _path + ".actions[" + _index4 + "]",
                                    expected: "NotificationAction",
                                    value: elem,
                                })) &&
                                _vo2(
                                    elem,
                                    _path + ".actions[" + _index4 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".actions[" + _index4 + "]",
                                expected: "NotificationAction",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".actions",
                    expected: "Array<NotificationAction>",
                    value: input.actions,
                }),
            "string" === typeof input.createdAt ||
                _report(_exceptionable, {
                    path: _path + ".createdAt",
                    expected: "string",
                    value: input.createdAt,
                }),
            "boolean" === typeof input.isSeenBell ||
                _report(_exceptionable, {
                    path: _path + ".isSeenBell",
                    expected: "boolean",
                    value: input.isSeenBell,
                }),
            "boolean" === typeof input.isSeenSplash ||
                _report(_exceptionable, {
                    path: _path + ".isSeenSplash",
                    expected: "boolean",
                    value: input.isSeenSplash,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            [
                                "id",
                                "type",
                                "data",
                                "actions",
                                "createdAt",
                                "isSeenBell",
                                "isSeenSplash",
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
            ((("object" === typeof input.payload &&
                null !== input.payload &&
                false === Array.isArray(input.payload)) ||
                _report(_exceptionable, {
                    path: _path + ".payload",
                    expected: "Record<string, unknown>",
                    value: input.payload,
                })) &&
                _vo1(
                    input.payload,
                    _path + ".payload",
                    true && _exceptionable
                )) ||
                _report(_exceptionable, {
                    path: _path + ".payload",
                    expected: "Record<string, unknown>",
                    value: input.payload,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["type", "payload"].some((prop) => key === prop))
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
                        expected: "Array<Notification>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index3) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index3 + "]",
                                        expected: "Notification",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index3 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index3 + "]",
                                    expected: "Notification",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<Notification>",
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
export class Notifications extends ApiClient {
    getBellCount() {
        return this.getJson("notifications/bell/count", validateBellCount);
    }
    getFeed(limit = 30) {
        return this.getJson(
            `notifications/feed?limit=${encodeURIComponent(limit)}`,
            validateFeed
        );
    }
}
//# sourceMappingURL=notifications.js.map
