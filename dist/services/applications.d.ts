import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type {
    ApplicationCategory,
    Cursus,
} from "../interfaces/applications/application.js";
export declare class Applications extends ApiClient {
    getUserApplications(): Promise<ApiResult<ApplicationCategory[]>>;
    getCursus(
        schoolYear: number,
        expanded?: boolean
    ): Promise<ApiResult<Cursus[]>>;
}
//# sourceMappingURL=applications.d.ts.map
