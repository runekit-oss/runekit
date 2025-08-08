"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatJson = formatJson;
function formatJson(json, options = {}) {
    const indent = options.indent ?? 2;
    try {
        const parsed = JSON.parse(json);
        return JSON.stringify(parsed, null, indent);
    }
    catch (error) {
        throw new Error(`Invalid JSON: ${error.message}`);
    }
}
//# sourceMappingURL=jsonFormatter.js.map