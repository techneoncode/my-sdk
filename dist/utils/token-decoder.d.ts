export declare class TokenDecoder {
    readonly token: string;
    header: string | Record<string, unknown>;
    payload: string | Record<string, unknown>;
    readonly signature: string;
    constructor(token: string);
    decodeToken(): {
        header: Record<string, unknown>;
        payload: Record<string, unknown>;
        signature: string;
    };
}
//# sourceMappingURL=token-decoder.d.ts.map
