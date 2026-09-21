import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { SchoolYearListResponse } from "../interfaces/settings/school-year-list.js";
import type { SelectableSchoolYearsResponse } from "../interfaces/settings/selectable-school-years.js";

const validateSchoolYearListResponse =
    typia.createValidate<SchoolYearListResponse>();
const validateSelectableSchoolYearsResponse =
    typia.createValidate<SelectableSchoolYearsResponse>();

/**
 * Service responsible for settings API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Settings extends ApiClient {
    /**
     * Retrieves the school years.
     *
     * @returns The school years.
     */
    public async getSchoolYears(): Promise<ApiResult<SchoolYearListResponse>> {
        return this.getJson(
            "settings/school-years",
            validateSchoolYearListResponse,
            {},
            [200, 201, 304]
        );
    }

    /**
     * Retrieves the school years that can be selected.
     *
     * @returns The selectable school years.
     */
    public async getSelectableSchoolYears(): Promise<
        ApiResult<SelectableSchoolYearsResponse>
    > {
        return this.getJson(
            "settings/school-years/selectable",
            validateSelectableSchoolYearsResponse,
            {},
            [200, 201, 304]
        );
    }
}
