/**
 * Filters accepted by `GET events`.
 */
export interface EventListQuery {
    /** Cursus code (e.g. `PGE`). */
    cursus?: string;
    /** End of the period (`YYYY-MM-DD` or ISO date-time). */
    endDate?: string;
    /** Only return events the authenticated user is registered to. */
    registered?: "me";
    /** Semester number. */
    semester?: number;
    /** Start of the period (`YYYY-MM-DD` or ISO date-time). */
    startDate?: string;
}
