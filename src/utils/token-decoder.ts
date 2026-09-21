function decodeBase64Url(data: string): Uint8Array {
    const padded = data + "=".repeat((4 - (data.length % 4)) % 4);
    const normalized = padded.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(normalized);
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function decodeBase64UrlJson<T>(data: string): T {
    const bytes = decodeBase64Url(data);
    const text = new TextDecoder().decode(bytes);
    return JSON.parse(text) as T;
}

export class TokenDecoder {
    public readonly token: string;
    public header: string | Record<string, unknown>;
    public payload: string | Record<string, unknown>;
    public readonly signature: string;

    constructor(token: string) {
        this.token = token;

        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("Invalid JWT: expected 3 parts");
        }

        [this.header, this.payload, this.signature] = parts;
    }

    decodeToken(): {
        header: Record<string, unknown>;
        payload: Record<string, unknown>;
        signature: string;
    } {
        this.header = decodeBase64UrlJson<Record<string, unknown>>(
            this.header as string
        );
        this.payload = decodeBase64UrlJson<Record<string, unknown>>(
            this.payload as string
        );

        return {
            header: this.header as Record<string, unknown>,
            payload: this.payload as Record<string, unknown>,
            signature: this.signature,
        };
    }
}
