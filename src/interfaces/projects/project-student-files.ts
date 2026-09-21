export interface ProjectStudentFileBlob {
    checksum: string;
    createdAt: string;
    id: number;
    mimeType: string;
    ownerId: unknown;
    ownerType: unknown;
    s3Key: string;
    size: number;
}

export interface ProjectStudentFileItem {
    blob: ProjectStudentFileBlob;
    childrens: unknown[];
    createdAt: string;
    id: number;
    kind: string;
    name: string;
    updatedAt: string;
}

/**
 * Response of `GET units/{schoolYear}/{unitCode}/{instanceCode}/projects/{projectId}/files/students`.
 */
export type ProjectStudentFilesResponse = ProjectStudentFileItem[];
