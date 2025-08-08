import { Command } from 'commander';
import { decodeJwt } from '@runekit/core';
import * as fs from 'fs';

export const jwtCommand = new Command('decode-jwt')
  .description('Decodes a JWT token and prints its header and payload as formatted JSON')
  .argument('[token]', 'JWT token to decode')
  .action((token, options) => {
    try {
      let input = '';
      
      // If token is provided, use it
      if (token) {
        input = token;
      } 
      // Otherwise read from stdin
      else {
        input = fs.readFileSync(process.stdin.fd, 'utf-8').trim();
      }
      
      const decoded = decodeJwt(input);
      console.log('Header:');
      console.log(JSON.stringify(decoded.header, null, 2));
      console.log('\nPayload:');
      console.log(JSON.stringify(decoded.payload, null, 2));
    } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      process.exit(1);
    }
  });
