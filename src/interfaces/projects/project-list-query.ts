/**
 * Filters accepted by `GET units/instances/projects`.
 */
export interface ProjectListQuery {
    /** Cursus codes (e.g. `["PGE"]`). */
    cursus?: string[];
    /** Maximum number of items per page. */
    limit?: number;
    /** Page number. */
    page?: number;
    /** Only return projects the authenticated user is registered to. */
    registeredOnly?: boolean;
    /** School year. */
    schoolYear?: number;
    /** Project status (e.g. `ongoing`). */
    status?: string;
}
