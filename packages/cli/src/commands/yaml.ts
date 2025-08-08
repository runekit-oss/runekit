import { Command } from 'commander';
import { formatYaml } from '@rune/core';
import * as fs from 'fs';

export const yamlCommand = new Command('yaml')
  .description('YAML formatting utilities')
  .command('format-yaml [yaml-data]')
  .description('Parses and outputs a clean, well-formatted YAML string')
  .action((yamlData, options) => {
    try {
      let input = '';
      
      // If yamlData is provided, use it
      if (yamlData) {
        // Check if it's a file path
        if (fs.existsSync(yamlData)) {
          input = fs.readFileSync(yamlData, 'utf-8');
        } else {
          input = yamlData;
        }
      } 
      // Otherwise read from stdin
      else {
        input = fs.readFileSync(process.stdin.fd, 'utf-8');
      }
      
      const formatted = formatYaml(input);
      console.log(formatted);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });
