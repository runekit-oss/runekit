/**
 * Decode a Base64-encoded SAML Response into human-readable XML
 * @param samlResponse - The Base64-encoded SAML response
 * @returns The decoded and formatted XML string
 * @throws {Error} If the SAML response is malformed or invalid
 */
export function decodeSaml(samlResponse: string): string {
  // Check if the input is valid base64
  if (!/^[A-Za-z0-9+/]*={0,2}$/i.test(samlResponse)) {
    throw new Error('Failed to decode SAML: Invalid base64 string');
  }
  
  try {
    // Decode from Base64
    const decoded = Buffer.from(samlResponse, 'base64').toString('utf-8');
    
    // For now, we'll just return the decoded XML
    // In a production environment, we might want to format it as well
    return decoded;
  } catch (error) {
    throw new Error(`Failed to decode SAML: ${(error as Error).message}`);
  }
}
