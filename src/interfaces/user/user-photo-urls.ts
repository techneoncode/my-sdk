export interface UserPhotoUrlsResponseItem {
    login: string;
    url: string;
}

/**
 * Response of `POST users/photos/urls`.
 */
export type UserPhotoUrlsResponse = UserPhotoUrlsResponseItem[];
