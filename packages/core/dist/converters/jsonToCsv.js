"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToCsv = jsonToCsv;
function jsonToCsv(json) {
    try {
        if (!Array.isArray(json)) {
            throw new Error('Input must be an array');
        }
        if (json.length === 0) {
            return '';
        }
        const headers = Object.keys(json[0]);
        const csvRows = [headers.join(',')];
        for (const obj of json) {
            if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
                throw new Error('All items in the array must be flat objects');
            }
            const values = headers.map(header => {
                const value = obj[header];
                if (value === null || value === undefined) {
                    return '';
                }
                else if (typeof value === 'string') {
                    if (value.includes(',') || value.includes('"')) {
                        return `"${value.replace(/"/g, '""')}"`;
                    }
                    return value;
                }
                else {
                    return String(value);
                }
            });
            csvRows.push(values.join(','));
        }
        return csvRows.join('\n');
    }
    catch (error) {
        throw new Error(`Failed to convert JSON to CSV: ${error.message}`);
    }
}
//# sourceMappingURL=jsonToCsv.js.map