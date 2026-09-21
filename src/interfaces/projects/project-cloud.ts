/**
 * Response of `GET units/instances/projects/{projectId}/cloud`.
 */
export interface ProjectCloudResponse {
    allocation: unknown;
    group: unknown;
    policy: unknown;
    projectName: string;
    sshKey: unknown;
    vms: unknown[];
}
