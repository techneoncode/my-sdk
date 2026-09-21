import typia from "typia";
import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { CursusListResponse } from "../interfaces/cursus/cursus-list.js";
import { withQuery } from "../utils/query.js";

const validateCursusListResponse = typia.createValidate<CursusListResponse>();

/**
 * Service responsible for cursus API requests.
 *
 * This class intentionally keeps no state besides the access token: returned
 * data belongs to the SDK consumer.
 */
export class Cursus extends ApiClient {
    /**
     * Retrieves the cursus of a school year.
     *
     * @param schoolYear School year.
     * @param expanded Whether to return expanded cursus.
     * @returns The cursus.
     */
    public async getCursusList(
        schoolYear: number,
        expanded: boolean = false
    ): Promise<ApiResult<CursusListResponse>> {
        return this.getJson(
            withQuery("cursus", { schoolYear, expanded }),
            validateCursusListResponse,
            {},
            [200, 201, 304]
        );
    }
}
