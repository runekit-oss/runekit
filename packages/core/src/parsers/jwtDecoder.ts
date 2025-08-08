/**
 * Decode a JWT token and return its header and payload
 * @param token - The JWT token to decode
 * @returns Object containing the decoded header and payload
 * @throws {Error} If the token is malformed or invalid
 */
export function decodeJwt(token: string): { header: any; payload: any } {
  try {
    const parts = token.split('.');
    
    if (parts.length !== 3) {
      throw new Error('Invalid JWT token format');
    }
    
    const [headerPart, payloadPart] = parts;
    
    // Decode header
    const header = JSON.parse(Buffer.from(headerPart, 'base64').toString('utf-8'));
    
    // Decode payload
    const payload = JSON.parse(Buffer.from(payloadPart, 'base64').toString('utf-8'));
    
    return { header, payload };
  } catch (error) {
    throw new Error(`Failed to decode JWT: ${(error as Error).message}`);
  }
}
