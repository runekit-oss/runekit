"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatXml = formatXml;
function formatXml(xml) {
    try {
        let formatted = xml.replace(/\s+/g, ' ').trim();
        let indent = 0;
        const indentSize = 2;
        let result = '';
        const tokens = formatted.split(/(<\/[^>]+>|<[^/][^>]*\/?>|<[^>]*>)/g);
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (!token || token.trim() === '')
                continue;
            if (!token.match(/<[^>]*>/)) {
                const text = token.trim();
                if (text) {
                    result += ' '.repeat(indent * indentSize) + text + '\n';
                }
                continue;
            }
            if (token.match(/<\//)) {
                indent--;
                result += ' '.repeat(indent * indentSize) + token + '\n';
            }
            else if (token.match(/\/>/)) {
                result += ' '.repeat(indent * indentSize) + token + '\n';
            }
            else {
                result += ' '.repeat(indent * indentSize) + token + '\n';
                indent++;
            }
        }
        return result.trim();
    }
    catch (error) {
        throw new Error(`Invalid XML: ${error.message}`);
    }
}
//# sourceMappingURL=xmlFormatter.js.map