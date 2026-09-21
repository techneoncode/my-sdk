import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateEvents = (() => {
    const _io0 = (input) =>
        "number" === typeof input.id &&
        "string" === typeof input.title &&
        "string" === typeof input.startDate &&
        "string" === typeof input.endDate &&
        "string" === typeof input.activityName &&
        "boolean" === typeof input.isExam &&
        Object.keys(input).every((key) => {
            if (
                [
                    "id",
                    "title",
                    "startDate",
                    "endDate",
                    "activityName",
                    "isExam",
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
            "string" === typeof input.title ||
                _report(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                }),
            "string" === typeof input.startDate ||
                _report(_exceptionable, {
                    path: _path + ".startDate",
                    expected: "string",
                    value: input.startDate,
                }),
            "string" === typeof input.endDate ||
                _report(_exceptionable, {
                    path: _path + ".endDate",
                    expected: "string",
                    value: input.endDate,
                }),
            "string" === typeof input.activityName ||
                _report(_exceptionable, {
                    path: _path + ".activityName",
                    expected: "string",
                    value: input.activityName,
                }),
            "boolean" === typeof input.isExam ||
                _report(_exceptionable, {
                    path: _path + ".isExam",
                    expected: "boolean",
                    value: input.isExam,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            [
                                "id",
                                "title",
                                "startDate",
                                "endDate",
                                "activityName",
                                "isExam",
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
                        expected: "Array<Event>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "Event",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "Event",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<Event>",
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
                        expected: "Array<AttendanceActivity>",
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
                                        expected: "AttendanceActivity",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "AttendanceActivity",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<AttendanceActivity>",
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
const validateSlots = (() => {
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
                        expected: "Array<EventSlot>",
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
                                        expected: "EventSlot",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "EventSlot",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<EventSlot>",
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
                        expected: "Array<EventRegistration>",
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
                                        expected: "EventRegistration",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "EventRegistration",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<EventRegistration>",
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
const validateMark = (() => {
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
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        _io0(input);
    let errors;
    let _report;
    return _createStandardSchema_1._createStandardSchema((input) => {
        if (false === __is(input)) {
            errors = [];
            _report = _validateReport_1._validateReport(errors);
            ((input, _path, _exceptionable = true) =>
                ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    _report(true, {
                        path: _path + "",
                        expected: "EventMark",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "EventMark",
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
const validateAttendance = (() => {
    const _io0 = (input) =>
        "number" === typeof input.eventId &&
        "string" === typeof input.status &&
        Object.keys(input).every((key) => {
            if (["eventId", "status"].some((prop) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "number" === typeof input.eventId ||
                _report(_exceptionable, {
                    path: _path + ".eventId",
                    expected: "number",
                    value: input.eventId,
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
                        if (["eventId", "status"].some((prop) => key === prop))
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
                        expected: "EventAttendance",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "EventAttendance",
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
const validateToken = (() => {
    const _io0 = (input) =>
        "string" === typeof input.token &&
        Object.keys(input).every((key) => {
            if (["token"].some((prop) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return true;
        });
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.token ||
                _report(_exceptionable, {
                    path: _path + ".token",
                    expected: "string",
                    value: input.token,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (["token"].some((prop) => key === prop)) return true;
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
                        expected: "CalendarToken",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "CalendarToken",
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
const validateCalendars = (() => {
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
                        expected: "Array<Calendar>",
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
                                        expected: "Calendar",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "Calendar",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<Calendar>",
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
const validateRooms = (() => {
    const _io0 = (input) =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "number" === typeof input.capacity &&
        "number" === typeof input.campusId &&
        Object.keys(input).every((key) => {
            if (
                ["id", "name", "capacity", "campusId"].some(
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
            "string" === typeof input.name ||
                _report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                }),
            "number" === typeof input.capacity ||
                _report(_exceptionable, {
                    path: _path + ".capacity",
                    expected: "number",
                    value: input.capacity,
                }),
            "number" === typeof input.campusId ||
                _report(_exceptionable, {
                    path: _path + ".campusId",
                    expected: "number",
                    value: input.campusId,
                }),
            false === _exceptionable ||
                Object.keys(input)
                    .map((key) => {
                        if (
                            ["id", "name", "capacity", "campusId"].some(
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
                        expected: "Array<Room>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem, _index2) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    _report(true, {
                                        path: _path + "[" + _index2 + "]",
                                        expected: "Room",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "Room",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<Room>",
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
export class Events extends ApiClient {
    getEvents(query = {}) {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(query)) {
            if (value !== undefined) params.set(key, String(value));
        }
        const suffix = params.toString();
        return this.getJson(
            `events${suffix ? `?${suffix}` : ""}`,
            validateEvents
        );
    }
    getAttendanceActivities() {
        return this.getJson("events/attendance/activities", validateActivities);
    }
    getSlots(eventId) {
        return this.getJson(`events/${eventId}/slots`, validateSlots);
    }
    getRegistrations(eventId) {
        return this.getJson(
            `events/${eventId}/registrations`,
            validateRegistrations
        );
    }
    getActivityRegistrations(activityId) {
        return this.getJson(
            `events/activities/${activityId}/registrations`,
            validateRegistrations
        );
    }
    getMyMark(eventId) {
        return this.getJson(`events/${eventId}/marks/me`, validateMark);
    }
    getMyAttendance(eventId) {
        return this.getJson(
            `events/${eventId}/attendance/me`,
            validateAttendance
        );
    }
    getCalendarToken() {
        return this.getJson("calendar_token", validateToken);
    }
    getCalendars() {
        return this.getJson("calendars", validateCalendars);
    }
    getRoomsByUser(campus) {
        return this.getJson(
            `campus/rooms/by-user?campus=${encodeURIComponent(campus)}`,
            validateRooms
        );
    }
}
//# sourceMappingURL=events.js.map
