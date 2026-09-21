/**
 * Response of `GET units/{schoolYear}/{unitCode}/{instanceCode}/projects/{projectId}/files/students/{fileName}`.
 *
 * The captured endpoint returns a presigned object-storage URL as plain text.
 */
export type ProjectStudentFileUrlResponse = string;
