import { ApiClient } from "../api/client.js";
import type { ApiResult } from "../interfaces/api/api-result.js";
import type {
    Notification,
    NotificationBellCount,
} from "../interfaces/notifications/notification.js";
export declare class Notifications extends ApiClient {
    getBellCount(): Promise<ApiResult<NotificationBellCount>>;
    getFeed(limit?: number): Promise<ApiResult<Notification[]>>;
}
//# sourceMappingURL=notifications.d.ts.map
