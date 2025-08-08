"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonCommand = void 0;
const commander_1 = require("commander");
const core_1 = require("@rune/core");
const fs = __importStar(require("fs"));
exports.jsonCommand = new commander_1.Command('json')
    .description('JSON formatting utilities')
    .command('format-json [json-data]')
    .description('Pretty-prints a JSON string or file')
    .option('-i, --indent <number>', 'indentation spaces', '2')
    .action((jsonData, options) => {
    try {
        let input = '';
        if (jsonData) {
            if (fs.existsSync(jsonData)) {
                input = fs.readFileSync(jsonData, 'utf-8');
            }
            else {
                input = jsonData;
            }
        }
        else {
            input = fs.readFileSync(process.stdin.fd, 'utf-8');
        }
        const formatted = (0, core_1.formatJson)(input, { indent: parseInt(options.indent) });
        console.log(formatted);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
});
//# sourceMappingURL=json.js.map