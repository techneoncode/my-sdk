export interface CampusRoomListClassItem {
    color: string;
    id: number;
    name: string;
    section: string;
}

export interface CampusRoomListEdsquare {
    campusId: number;
    classes: CampusRoomListClassItem[];
    syncEnabled: boolean;
}

export interface CampusRoomListMetadata {
    edsquare: CampusRoomListEdsquare;
}

export interface CampusRoomListCampus {
    address: string;
    code: string;
    country: string;
    createdAt: string;
    id: number;
    isActive: boolean;
    metadata: CampusRoomListMetadata;
    name: string;
    timezone: string;
    updatedAt: string;
}

export interface CampusRoomListFloor {
    campusId: number;
    createdAt: string;
    id: number;
    name: string;
    order: number;
    updatedAt: string;
}

export interface CampusRoomListResponseItem {
    campus: CampusRoomListCampus;
    campusId: number;
    capacity: number;
    createdAt: string;
    deletedAt: unknown;
    floor: CampusRoomListFloor;
    floorId: number;
    id: number;
    name: string;
    officeMode: boolean;
    studentsAllowed: boolean;
    updatedAt: string;
}

/**
 * Response of `GET campus/rooms/by-user`.
 */
export type CampusRoomListResponse = CampusRoomListResponseItem[];
