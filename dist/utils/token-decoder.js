function decodeBase64Url(data) {
    const padded = data + "=".repeat((4 - (data.length % 4)) % 4);
    const normalized = padded.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(normalized);
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}
function decodeBase64UrlJson(data) {
    const bytes = decodeBase64Url(data);
    const text = new TextDecoder().decode(bytes);
    return JSON.parse(text);
}
export class TokenDecoder {
    token;
    header;
    payload;
    signature;
    constructor(token) {
        this.token = token;
        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("Invalid JWT: expected 3 parts");
        }
        [this.header, this.payload, this.signature] = parts;
    }
    decodeToken() {
        this.header = decodeBase64UrlJson(this.header);
        this.payload = decodeBase64UrlJson(this.payload);
        return {
            header: this.header,
            payload: this.payload,
            signature: this.signature,
        };
    }
}
//# sourceMappingURL=token-decoder.js.map
