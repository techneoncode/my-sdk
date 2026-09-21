import type {
    TestResultContext,
    TestResultGroup,
} from "./test-result.js";

export interface TestResultDetailProperties {
    commit: string;
    date: string;
    group: TestResultGroup;
    jobUrl: string | null;
    styleRequirement: boolean;
    type: string;
}

export interface TestResultDetailSkillBreakdown {
    count: number;
    crashed: number;
    mandatoryFailed: number;
    passed: number;
}

export interface TestResultDetailSkill {
    BreakdownSkillReport: {
        breakdown: TestResultDetailSkillBreakdown;
        name: string;
    };
}

/**
 * Response of `GET students/test-results/{testResultId}`.
 */
export interface TestResultDetailResponse {
    bannedFunctions: unknown;
    codingStyle: unknown;
    context: TestResultContext;
    coverage: unknown;
    deliveryError: unknown;
    failureFlags: string[];
    makeError: unknown;
    poolTrace: string;
    properties: TestResultDetailProperties;
    repoLink: string;
    skills: TestResultDetailSkill[];
    staticTrace: unknown;
    achievements: unknown[];
}
