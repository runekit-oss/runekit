import { Command } from 'commander';
import { decodeSaml } from '@runekit/core';
import * as fs from 'fs';

export const samlCommand = new Command('decode-saml')
  .description('Decodes a Base64-encoded SAML Response into human-readable, formatted XML')
  .argument('[saml-response]', 'Base64-encoded SAML Response')
  .action((samlResponse, options) => {
    try {
      let input = '';
      
      // If samlResponse is provided, use it
      if (samlResponse) {
        input = samlResponse;
      } 
      // Otherwise read from stdin
      else {
        input = fs.readFileSync(process.stdin.fd, 'utf-8').trim();
      }
      
      const decoded = decodeSaml(input);
      console.log(decoded);
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });
