export interface ProjectRegistrationTaRequester {
    civility: string;
    firstname: string;
    isForecast: boolean;
    isRepeating: boolean;
    lastname: string;
    login: string;
    promotion: number;
    specialty: string | null;
}

export interface ProjectRegistrationTaRun {
    buildNumber: number | null;
    buildUrl: string | null;
    finishedAt: string;
    id: number;
    jobUrl: string | null;
    requestedAt: string;
    requestedBy: ProjectRegistrationTaRequester;
    startedAt: string;
    state: string;
    testRunId: string;
}

export interface ProjectRegistrationTaQuota {
    consumed: number;
    override: number | null;
    remaining: number;
    total: number;
}

/**
 * Response of `GET units/{schoolYear}/{unitCode}/{instanceCode}/projects/{projectId}/registrations/{registrationId}/ta`.
 */
export interface ProjectRegistrationTaResponse {
    quota: ProjectRegistrationTaQuota;
    runs: ProjectRegistrationTaRun[];
}
