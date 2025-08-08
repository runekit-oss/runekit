import { decodeJwt } from '../jwtDecoder';

describe('decodeJwt', () => {
  it('should decode a valid JWT token', () => {
    // Header: {"alg":"HS256","typ":"JWT"}
    // Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022}
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    
    const result = decodeJwt(token);
    
    expect(result.header).toEqual({
      alg: 'HS256',
      typ: 'JWT'
    });
    
    expect(result.payload).toEqual({
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022
    });
  });

  it('should throw an error for invalid JWT format', () => {
    const token = 'invalid.token';
    
    expect(() => decodeJwt(token)).toThrow('Invalid JWT token format');
  });

  it('should throw an error for malformed JWT parts', () => {
    const token = 'invalid.token.format.extra';
    
    expect(() => decodeJwt(token)).toThrow('Invalid JWT token format');
  });

  it('should throw an error for invalid base64 encoding', () => {
    const token = 'invalid.token.without.proper.base64';
    
    expect(() => decodeJwt(token)).toThrow('Failed to decode JWT:');
  });
});
