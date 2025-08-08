import { Command } from 'commander';
import { formatXml } from '@rune/core';
import * as fs from 'fs';

export const xmlCommand = new Command('xml')
  .description('XML formatting utilities')
  .command('format-xml [xml-data]')
  .description('Pretty-prints an XML string or file')
  .action((xmlData, options) => {
    try {
      let input = '';
      
      // If xmlData is provided, use it
      if (xmlData) {
        // Check if it's a file path
        if (fs.existsSync(xmlData)) {
          input = fs.readFileSync(xmlData, 'utf-8');
        } else {
          input = xmlData;
        }
      } 
      // Otherwise read from stdin
      else {
        input = fs.readFileSync(process.stdin.fd, 'utf-8');
      }
      
      const formatted = formatXml(input);
      console.log(formatted);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });
