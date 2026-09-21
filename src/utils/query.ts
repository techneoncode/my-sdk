type QueryValue = string | number | boolean | null | undefined;

/**
 * Appends query parameters to an endpoint.
 *
 * `null` and `undefined` values are skipped. Array values are serialized with
 * the `key[]=value` convention used by the My API (e.g. `cursus[]=PGE`).
 *
 * @param endpoint Endpoint relative to the API base URL.
 * @param params Query parameters.
 * @returns The endpoint followed by its query string, when there is one.
 */
export function withQuery(endpoint: string, params: object): string {
    const search = new URLSearchParams();

    for (const [key, value] of Object.entries(params) as [
        string,
        QueryValue | QueryValue[],
    ][]) {
        if (value === null || value === undefined) {
            continue;
        }

        if (Array.isArray(value)) {
            for (const item of value) {
                if (item !== null && item !== undefined) {
                    search.append(`${key}[]`, String(item));
                }
            }
        } else {
            search.append(key, String(value));
        }
    }

    const query = search.toString();

    return query === "" ? endpoint : `${endpoint}?${query}`;
}
