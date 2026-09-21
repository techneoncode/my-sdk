/**
 * Pagination metadata returned by paginated endpoints.
 */
export interface PaginationMeta {
    hasNext: boolean;
    hasPrev: boolean;
    limit: number;
    page: number;
    pages: number;
    total: number;
}
