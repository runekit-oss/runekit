"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJwt = decodeJwt;
function decodeJwt(token) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('Invalid JWT token format');
        }
        const [headerPart, payloadPart] = parts;
        const header = JSON.parse(Buffer.from(headerPart, 'base64').toString('utf-8'));
        const payload = JSON.parse(Buffer.from(payloadPart, 'base64').toString('utf-8'));
        return { header, payload };
    }
    catch (error) {
        throw new Error(`Failed to decode JWT: ${error.message}`);
    }
}
//# sourceMappingURL=jwtDecoder.js.map