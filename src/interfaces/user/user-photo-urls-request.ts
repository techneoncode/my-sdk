/**
 * Payload of `POST users/photos/urls`.
 *
 * The request body was not part of the network capture, this shape is an
 * assumption to verify.
 */
export interface UserPhotoUrlsRequest {
    logins: string[];
}
