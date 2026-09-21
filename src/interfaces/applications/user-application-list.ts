export interface UserApplicationListName {
    en: string;
    fr: string;
}

export interface UserApplicationListCategory {
    icon: string;
    id: number;
    isActive: boolean;
    name: UserApplicationListName;
    order: number;
}

export interface UserApplicationListApplicationItem {
    category?: UserApplicationListCategory;
    color: string;
    icon: string | null;
    logo: string | null;
    name: string;
    url: string;
}

export interface UserApplicationListResponseItem {
    applications: UserApplicationListApplicationItem[];
    icon: string;
    id: number;
    name: UserApplicationListName;
    order: number;
}

/**
 * Response of `GET applications/user`.
 */
export type UserApplicationListResponse = UserApplicationListResponseItem[];
