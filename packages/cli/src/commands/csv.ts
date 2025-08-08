import { Command } from 'commander';
import { csvToJson, jsonToCsv } from '@rune/core';
import * as fs from 'fs';

export const csvToJsonCommand = new Command('csv-to-json')
  .description('Converts CSV data into a JSON array of objects')
  .argument('[csv-data]', 'CSV data to convert')
  .action((csvData, options) => {
    try {
      let input = '';
      
      // If csvData is provided, use it
      if (csvData) {
        // Check if it's a file path
        if (fs.existsSync(csvData)) {
          input = fs.readFileSync(csvData, 'utf-8');
        } else {
          input = csvData;
        }
      } 
      // Otherwise read from stdin
      else {
        input = fs.readFileSync(process.stdin.fd, 'utf-8');
      }
      
      const json = csvToJson(input);
      console.log(JSON.stringify(json, null, 2));
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });

export const csvToCsvCommand = new Command('csv-to-csv')
  .description('Converts a JSON array of flat objects into CSV data')
  .argument('[json-data]', 'JSON data to convert')
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
      
      const json = JSON.parse(input);
      const csv = jsonToCsv(json);
      console.log(csv);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });
