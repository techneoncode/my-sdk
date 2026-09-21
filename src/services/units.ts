import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { UnitDetailResponse } from "../interfaces/units/unit-detail.js";
import type { UnitInstanceListResponse } from "../interfaces/units/unit-instance-list.js";
import type { UnitInstanceSchoolYearsResponse } from "../interfaces/units/unit-instance-school-years.js";
import type { UnitRegistrationListResponse } from "../interfaces/units/unit-registration-list.js";
import { withQuery } from "../utils/query.js";

const validateUnitInstanceListResponse =
    typia.createValidate<UnitInstanceListResponse>();
const validateUnitInstanceSchoolYearsResponse =
    typia.createValidate<UnitInstanceSchoolYearsResponse>();
const validateUnitDetailResponse = typia.createValidate<UnitDetailResponse>();
const validateUnitRegistrationListResponse =
    typia.createValidate<UnitRegistrationListResponse>();

/**
 * Service responsible for unit instance API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Units extends ApiClient {
    /**
     * Retrieves the unit instances of a school year.
     *
     * @param schoolYear School year.
     * @param expanded Whether to return expanded unit instances.
     * @returns The unit instances and their pagination metadata.
     */
    public async getUnitInstances(
        schoolYear: number,
        expanded: boolean = false
    ): Promise<ApiResult<UnitInstanceListResponse>> {
        return this.getJson(
            withQuery("units/instances", { schoolYear, expanded }),
            validateUnitInstanceListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the school years that have unit instances.
     *
     * @returns The school years.
     */
    public async getUnitInstanceSchoolYears(): Promise<
        ApiResult<UnitInstanceSchoolYearsResponse>
    > {
        return this.getJson(
            "units/instances/school-years",
            validateUnitInstanceSchoolYearsResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves a unit instance.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code (e.g. `G-ENG-100`).
     * @param instanceCode Unit instance code (e.g. `STG-1`).
     * @param expanded Whether to return the expanded unit instance.
     * @returns The unit instance.
     */
    public async getUnit(
        schoolYear: number,
        unitCode: string,
        instanceCode: string,
        expanded: boolean = false
    ): Promise<ApiResult<UnitDetailResponse>> {
        return this.getJson(
            withQuery(
                `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(instanceCode)}`,
                { expanded }
            ),
            validateUnitDetailResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the registrations of a unit instance.
     *
     * @param schoolYear School year.
     * @param unitCode Unit code (e.g. `G-ENG-100`).
     * @param instanceCode Unit instance code (e.g. `STG-1`).
     * @returns The unit registrations.
     */
    public async getUnitRegistrations(
        schoolYear: number,
        unitCode: string,
        instanceCode: string
    ): Promise<ApiResult<UnitRegistrationListResponse>> {
        return this.getJson(
            `units/${schoolYear}/${encodeURIComponent(unitCode)}/${encodeURIComponent(instanceCode)}/registrations`,
            validateUnitRegistrationListResponse,
            {},
            [200, 201, 304]
        );
    }
}
