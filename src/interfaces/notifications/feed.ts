export interface NotificationFeedPayload {
    cursusCode: string;
    eventDate: string;
    eventId: number;
    kind: string;
    semesterNums: number[];
}

export interface NotificationFeedActionItem {
    payload: NotificationFeedPayload;
    type: string;
}

export interface NotificationFeedData {
    actorFirstname: string;
    actorLastname: string;
    actorLogin: string;
    changed: string;
    endIso: string;
    eventId: number;
    eventTitle: string;
    roomNames: string[];
    startIso: string;
}

export interface NotificationFeedResponseItem {
    actions: NotificationFeedActionItem[];
    actionStatus: unknown;
    createdAt: string;
    data: NotificationFeedData;
    id: string;
    isSeenBell: boolean;
    isSeenSplash: boolean;
    isSplash: boolean;
    type: string;
}

/**
 * Response of `GET notifications/feed`.
 */
export type NotificationFeedResponse = NotificationFeedResponseItem[];
