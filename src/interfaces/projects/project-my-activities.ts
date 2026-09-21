export interface ProjectMyActivityItem {
    endDate: string;
    eventId: number;
    hasStudentDocuments: boolean;
    id: number;
    mandatory: boolean;
    name: string;
    startDate: string;
    status: string;
}

/**
 * Response of `GET units/instances/projects/{projectId}/my-activities`.
 */
export type ProjectMyActivitiesResponse = ProjectMyActivityItem[];
