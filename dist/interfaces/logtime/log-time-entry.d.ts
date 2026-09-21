export interface LogTimeEntry {
    date: string;
    log_time: string;
}
export type UserLogTimeResponse = Record<string, LogTimeEntry>;
