"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSaml = decodeSaml;
function decodeSaml(samlResponse) {
    if (!/^[A-Za-z0-9+/]*={0,2}$/i.test(samlResponse)) {
        throw new Error('Failed to decode SAML: Invalid base64 string');
    }
    try {
        const decoded = Buffer.from(samlResponse, 'base64').toString('utf-8');
        return decoded;
    }
    catch (error) {
        throw new Error(`Failed to decode SAML: ${error.message}`);
    }
}
//# sourceMappingURL=samlDecoder.js.map