import { Command } from 'commander';
import { formatJson } from '@runekit/core';
import * as fs from 'fs';

export const jsonCommand = new Command('json')
  .description('JSON formatting utilities')
  .command('format-json [json-data]')
  .description('Pretty-prints a JSON string or file')
  .option('-i, --indent <number>', 'indentation spaces', '2')
  .action((jsonData, options) => {
    try {
      let input = '';
      
      // If jsonData is provided, use it
      if (jsonData) {
        // Check if it's a file path
        if (fs.existsSync(jsonData)) {
          input = fs.readFileSync(jsonData, 'utf-8');
        } else {
          input = jsonData;
        }
      } 
      // Otherwise read from stdin
      else {
        input = fs.readFileSync(process.stdin.fd, 'utf-8');
      }
      
      const formatted = formatJson(input, { indent: parseInt(options.indent) });
      console.log(formatted);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });
