import * as _accessExpressionAsString_1 from "typia/lib/internal/_accessExpressionAsString";
const __typia_transform__accessExpressionAsString =
    _accessExpressionAsString_1._accessExpressionAsString;
import * as _validateReport_1 from "typia/lib/internal/_validateReport";
import * as _createStandardSchema_1 from "typia/lib/internal/_createStandardSchema";
import typia from "typia";
import { ApiClient } from "../api/client.js";
const validateXp = (() => {
    const _io0 = (input) =>
        "string" === typeof input.login &&
        "number" === typeof input.effortXp &&
        "number" === typeof input.achievementXp &&
        "number" === typeof input.totalXp &&
        "number" === typeof input.level &&
        "number" === typeof input.xpInLevel &&
        "number" === typeof input.xpToNext;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.login ||
                _report(_exceptionable, {
                    path: _path + ".login",
                    expected: "string",
                    value: input.login,
                }),
            "number" === typeof input.effortXp ||
                _report(_exceptionable, {
                    path: _path + ".effortXp",
                    expected: "number",
                    value: input.effortXp,
                }),
            "number" === typeof input.achievementXp ||
                _report(_exceptionable, {
                    path: _path + ".achievementXp",
                    expected: "number",
                    value: input.achievementXp,
                }),
            "number" === typeof input.totalXp ||
                _report(_exceptionable, {
                    path: _path + ".totalXp",
                    expected: "number",
                    value: input.totalXp,
                }),
            "number" === typeof input.level ||
                _report(_exceptionable, {
                    path: _path + ".level",
                    expected: "number",
                    value: input.level,
                }),
            "number" === typeof input.xpInLevel ||
                _report(_exceptionable, {
                    path: _path + ".xpInLevel",
                    expected: "number",
                    value: input.xpInLevel,
                }),
            "number" === typeof input.xpToNext ||
                _report(_exceptionable, {
                    path: _path + ".xpToNext",
                    expected: "number",
                    value: input.xpToNext,
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
                        expected: "GamificationXpResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "GamificationXpResponse",
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
const validateStreak = (() => {
    const _io0 = (input) =>
        "string" === typeof input.login &&
        "number" === typeof input.currentCount &&
        "number" === typeof input.longestCount &&
        (null === input.lastActiveDay ||
            "string" === typeof input.lastActiveDay) &&
        "number" === typeof input.savesAvailable &&
        "boolean" === typeof input.requiresActivityToday;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "string" === typeof input.login ||
                _report(_exceptionable, {
                    path: _path + ".login",
                    expected: "string",
                    value: input.login,
                }),
            "number" === typeof input.currentCount ||
                _report(_exceptionable, {
                    path: _path + ".currentCount",
                    expected: "number",
                    value: input.currentCount,
                }),
            "number" === typeof input.longestCount ||
                _report(_exceptionable, {
                    path: _path + ".longestCount",
                    expected: "number",
                    value: input.longestCount,
                }),
            null === input.lastActiveDay ||
                "string" === typeof input.lastActiveDay ||
                _report(_exceptionable, {
                    path: _path + ".lastActiveDay",
                    expected: "(null | string)",
                    value: input.lastActiveDay,
                }),
            "number" === typeof input.savesAvailable ||
                _report(_exceptionable, {
                    path: _path + ".savesAvailable",
                    expected: "number",
                    value: input.savesAvailable,
                }),
            "boolean" === typeof input.requiresActivityToday ||
                _report(_exceptionable, {
                    path: _path + ".requiresActivityToday",
                    expected: "boolean",
                    value: input.requiresActivityToday,
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
                        expected: "GamificationStreakResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "GamificationStreakResponse",
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
const validatePreferences = (() => {
    const _io0 = (input) =>
        "boolean" === typeof input.optedOut &&
        "boolean" === typeof input.streakDangerNotificationEnabled &&
        "boolean" === typeof input.cursusGamificationEnabled;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "boolean" === typeof input.optedOut ||
                _report(_exceptionable, {
                    path: _path + ".optedOut",
                    expected: "boolean",
                    value: input.optedOut,
                }),
            "boolean" === typeof input.streakDangerNotificationEnabled ||
                _report(_exceptionable, {
                    path: _path + ".streakDangerNotificationEnabled",
                    expected: "boolean",
                    value: input.streakDangerNotificationEnabled,
                }),
            "boolean" === typeof input.cursusGamificationEnabled ||
                _report(_exceptionable, {
                    path: _path + ".cursusGamificationEnabled",
                    expected: "boolean",
                    value: input.cursusGamificationEnabled,
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
                        expected: "GamificationPreferencesResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "GamificationPreferencesResponse",
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
const validateXpFeed = (() => {
    const _io0 = (input) =>
        "string" === typeof input.login &&
        "number" === typeof input.effortXp &&
        "number" === typeof input.achievementXp &&
        "number" === typeof input.totalXp &&
        "number" === typeof input.level &&
        "number" === typeof input.xpInLevel &&
        "number" === typeof input.xpToNext &&
        Array.isArray(input.timeline) &&
        input.timeline.every(
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
            "string" === typeof input.login ||
                _report(_exceptionable, {
                    path: _path + ".login",
                    expected: "string",
                    value: input.login,
                }),
            "number" === typeof input.effortXp ||
                _report(_exceptionable, {
                    path: _path + ".effortXp",
                    expected: "number",
                    value: input.effortXp,
                }),
            "number" === typeof input.achievementXp ||
                _report(_exceptionable, {
                    path: _path + ".achievementXp",
                    expected: "number",
                    value: input.achievementXp,
                }),
            "number" === typeof input.totalXp ||
                _report(_exceptionable, {
                    path: _path + ".totalXp",
                    expected: "number",
                    value: input.totalXp,
                }),
            "number" === typeof input.level ||
                _report(_exceptionable, {
                    path: _path + ".level",
                    expected: "number",
                    value: input.level,
                }),
            "number" === typeof input.xpInLevel ||
                _report(_exceptionable, {
                    path: _path + ".xpInLevel",
                    expected: "number",
                    value: input.xpInLevel,
                }),
            "number" === typeof input.xpToNext ||
                _report(_exceptionable, {
                    path: _path + ".xpToNext",
                    expected: "number",
                    value: input.xpToNext,
                }),
            ((Array.isArray(input.timeline) ||
                _report(_exceptionable, {
                    path: _path + ".timeline",
                    expected: "Array<Record<string, unknown>>",
                    value: input.timeline,
                })) &&
                input.timeline
                    .map(
                        (elem, _index2) =>
                            ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                _report(_exceptionable, {
                                    path: _path + ".timeline[" + _index2 + "]",
                                    expected: "Record<string, unknown>",
                                    value: elem,
                                })) &&
                                _vo1(
                                    elem,
                                    _path + ".timeline[" + _index2 + "]",
                                    true && _exceptionable
                                )) ||
                            _report(_exceptionable, {
                                path: _path + ".timeline[" + _index2 + "]",
                                expected: "Record<string, unknown>",
                                value: elem,
                            })
                    )
                    .every((flag) => flag)) ||
                _report(_exceptionable, {
                    path: _path + ".timeline",
                    expected: "Array<Record<string, unknown>>",
                    value: input.timeline,
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
                        expected: "GamificationXpFeedResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "GamificationXpFeedResponse",
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
const validateEnabled = (() => {
    const _io0 = (input) => "boolean" === typeof input.enabled;
    const _vo0 = (input, _path, _exceptionable = true) =>
        [
            "boolean" === typeof input.enabled ||
                _report(_exceptionable, {
                    path: _path + ".enabled",
                    expected: "boolean",
                    value: input.enabled,
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
                        expected: "GamificationCursusEnabledResponse",
                        value: input,
                    })) &&
                    _vo0(input, _path + "", true)) ||
                _report(true, {
                    path: _path + "",
                    expected: "GamificationCursusEnabledResponse",
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
const validateAwards = (() => {
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
                        expected: "Array<BadgeAward>",
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
                                        expected: "BadgeAward",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "BadgeAward",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<BadgeAward>",
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
const validateBadges = (() => {
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
                        expected: "Array<Badge>",
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
                                        expected: "Badge",
                                        value: elem,
                                    })) &&
                                    _vo0(
                                        elem,
                                        _path + "[" + _index2 + "]",
                                        true
                                    )) ||
                                _report(true, {
                                    path: _path + "[" + _index2 + "]",
                                    expected: "Badge",
                                    value: elem,
                                })
                        )
                        .every((flag) => flag)) ||
                _report(true, {
                    path: _path + "",
                    expected: "Array<Badge>",
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
export class Gamification extends ApiClient {
    getXp() {
        return this.getJson("gamification/xp/me", validateXp);
    }
    getStreak() {
        return this.getJson("gamification/streak/me", validateStreak);
    }
    getPreferences() {
        return this.getJson("gamification/preferences/me", validatePreferences);
    }
    getXpFeed(limit = 50) {
        return this.getJson(
            `gamification/xp/me/feed?limit=${encodeURIComponent(limit)}`,
            validateXpFeed
        );
    }
    getCursusEnabled() {
        return this.getJson(
            "gamification/preferences/me/cursus-enabled",
            validateEnabled
        );
    }
    getStudentBadgeAwards() {
        return this.getJson("badges/awards/student/me", validateAwards);
    }
    getBadges(visible = true) {
        return this.getJson(`badges?visible=${visible}`, validateBadges);
    }
}
//# sourceMappingURL=gamification.js.map
