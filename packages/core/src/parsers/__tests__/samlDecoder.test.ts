import { decodeSaml } from '../samlDecoder';

describe('decodeSaml', () => {
  it('should decode a valid Base64-encoded SAML response', () => {
    const samlResponse = '<samlp:Response xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"><samlp:Status><samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/></samlp:Status></samlp:Response>';
    const base64Encoded = Buffer.from(samlResponse).toString('base64');
    
    const result = decodeSaml(base64Encoded);
    
    expect(result).toBe(samlResponse);
  });

  it('should handle empty input', () => {
    const base64Encoded = Buffer.from('').toString('base64');
    
    const result = decodeSaml(base64Encoded);
    
    expect(result).toBe('');
  });

  it('should throw an error for invalid base64 encoding', () => {
    // Using a string that will cause Buffer.from to throw
    const invalidBase64 = '\x80\x81'; // Invalid UTF-8 sequence
    
    expect(() => decodeSaml(invalidBase64)).toThrow('Failed to decode SAML:');
  });
});
