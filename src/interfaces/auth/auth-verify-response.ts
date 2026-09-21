export interface AuthVerifySuccess {
    success: true;
    data: VerifyResponse;
}

export interface AuthVerifyFailure {
    success: false;
    data: null;
    error: string;
}

export interface VerifyResponseCityItem {
    code: string;
    id: number;
    name: string;
}

export interface VerifyResponse {
    cities: VerifyResponseCityItem[];
    cursus: string;
    cursusSchoolYear: number;
    firstname: string;
    lastname: string;
    login: string;
    promotion: number;
    roles: string[];
    semester: number;
    semesterId: number;
    tekYear: number;
}

export type AuthVerifyResult =
    AuthVerifySuccess | AuthVerifyFailure | { error: string };
