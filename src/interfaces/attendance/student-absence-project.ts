import type { StudentAbsenceProjectListResponseItem } from "./student-absence-project-list.js";

/**
 * Response of `GET students/absences/projects/{projectInstanceId}`.
 *
 * Same statistics as a list entry, plus the tracked events of the project.
 */
export interface StudentAbsenceProjectResponse extends StudentAbsenceProjectListResponseItem {
    events: unknown[];
}
