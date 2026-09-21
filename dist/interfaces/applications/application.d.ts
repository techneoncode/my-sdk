export interface LocalizedName {
    en: string;
    fr: string;
}
export interface Application extends Record<string, unknown> {
    name: string;
    url: string;
    color: string;
}
export interface ApplicationCategory extends Record<string, unknown> {
    id: number;
    name: LocalizedName;
    applications: Application[];
}
export interface SchoolYear extends Record<string, unknown> {
    id: number;
    year: number;
    createdAt: string;
    updatedAt: string;
}
export type Cursus = Record<string, unknown>;
//# sourceMappingURL=application.d.ts.map
