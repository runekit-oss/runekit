"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvToJson = csvToJson;
function csvToJson(csv) {
    try {
        const lines = csv.split('\n').filter(line => line.trim() !== '');
        if (lines.length === 0) {
            return [];
        }
        const headers = lines[0].split(',').map(header => header.trim());
        const result = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];
                const value = values[j] ? values[j].trim() : '';
                if (value === 'null') {
                    obj[header] = null;
                }
                else if (value === 'true') {
                    obj[header] = true;
                }
                else if (value === 'false') {
                    obj[header] = false;
                }
                else if (!isNaN(Number(value)) && value !== '') {
                    obj[header] = Number(value);
                }
                else {
                    obj[header] = value;
                }
            }
            result.push(obj);
        }
        return result;
    }
    catch (error) {
        throw new Error(`Failed to convert CSV to JSON: ${error.message}`);
    }
}
//# sourceMappingURL=csvToJson.js.map