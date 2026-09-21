import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { SchoolYear } from "../interfaces/applications/application.js";
export declare class Settings extends ApiClient {
    getSelectableSchoolYears(): Promise<ApiResult<number[]>>;
    getSchoolYears(): Promise<ApiResult<SchoolYear[]>>;
}
//# sourceMappingURL=settings.d.ts.map
