import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type { ChatbotAvailabilityResponse } from "../interfaces/system/system.js";
import type { StudentProfileCampus } from "../interfaces/user/student/user-student-profile.js";
export declare class System extends ApiClient {
    getChatbotAvailability(): Promise<ApiResult<ChatbotAvailabilityResponse>>;
    getCampus(): Promise<ApiResult<StudentProfileCampus>>;
}
//# sourceMappingURL=system.d.ts.map
