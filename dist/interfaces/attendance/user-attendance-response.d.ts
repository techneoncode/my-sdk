import type { ActivityAttendanceResponse } from "./activity-attendance-response.js";
import type { ProjectAttendanceResponse } from "./project-attendance-response.js";
export interface UserAttendanceResponse {
    activities: ActivityAttendanceResponse[];
    projects: ProjectAttendanceResponse[];
}
