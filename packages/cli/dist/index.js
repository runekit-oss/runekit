#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const json_1 = require("./commands/json");
const xml_1 = require("./commands/xml");
const yaml_1 = require("./commands/yaml");
const csv_1 = require("./commands/csv");
const jwt_1 = require("./commands/jwt");
const saml_1 = require("./commands/saml");
const program = new commander_1.Command();
program
    .name('rune')
    .description('Rune - The Offline Developer Suite')
    .version('1.0.0')
    .addCommand(json_1.jsonCommand)
    .addCommand(xml_1.xmlCommand)
    .addCommand(yaml_1.yamlCommand)
    .addCommand(csv_1.csvToJsonCommand)
    .addCommand(csv_1.csvToCsvCommand)
    .addCommand(jwt_1.jwtCommand)
    .addCommand(saml_1.samlCommand);
program.parse();
//# sourceMappingURL=index.js.map