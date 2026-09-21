export interface NotificationAction extends Record<string, unknown> {
    type: string;
    payload: Record<string, unknown>;
}
export interface Notification extends Record<string, unknown> {
    id: string;
    type: string;
    data: Record<string, unknown>;
    actions: NotificationAction[];
    createdAt: string;
    isSeenBell: boolean;
    isSeenSplash: boolean;
}
export interface NotificationBellCount {
    count: number;
}
//# sourceMappingURL=notification.d.ts.map
