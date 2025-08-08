#!/usr/bin/env node

import { Command } from 'commander';
import { jsonCommand } from './commands/json';
import { xmlCommand } from './commands/xml';
import { yamlCommand } from './commands/yaml';
import { csvToJsonCommand, csvToCsvCommand } from './commands/csv';
import { jwtCommand } from './commands/jwt';
import { samlCommand } from './commands/saml';

const program = new Command();

program
  .name('rune')
  .description('Rune - The Offline Developer Suite')
  .version('1.0.0')
  .addCommand(jsonCommand)
  .addCommand(xmlCommand)
  .addCommand(yamlCommand)
  .addCommand(csvToJsonCommand)
  .addCommand(csvToCsvCommand)
  .addCommand(jwtCommand)
  .addCommand(samlCommand);

program.parse();
