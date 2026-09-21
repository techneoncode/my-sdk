import type { CursusSummary } from "./cursus-summary.js";

/**
 * Short description of a semester, embedded in other responses.
 */
export interface SemesterSummary {
    cursus: CursusSummary;
    cursusId: number;
    id: number;
    num: number;
    tekYear: number;
}
