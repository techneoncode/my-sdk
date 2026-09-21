export interface TestResultContext {
    assignment: unknown;
    instance: string;
    projectCode: string;
    title: string;
    unitCode: string;
    year: number;
}

export interface TestResultGroup {
    members: string[];
}

export interface TestResultProperties {
    commit: string;
    date: string;
    group: TestResultGroup;
    jobUrl: string | null;
    styleRequirement: boolean;
    type: string;
}

export interface TestResultSkillBreakdown {
    count: number;
    crashed: number;
    mandatoryFailed: number;
    passed: number;
}

export interface TestResultAchievementSummary {
    passed: number;
    total: number;
}

/**
 * Test result item returned by `GET students/test-results` and related project
 * test-result list endpoints.
 */
export interface TestResult {
    achievementSummary: TestResultAchievementSummary;
    codingStyle: unknown;
    context: TestResultContext;
    coverage: unknown;
    failureFlags: string[];
    id: number;
    prerequisitesMark: number;
    properties: TestResultProperties;
    repoLink: string;
    skillBreakdowns: Record<string, TestResultSkillBreakdown>;
}

/**
 * Response of endpoints returning a list of test results.
 */
export interface TestResultListResponse {
    results: TestResult[];
}
