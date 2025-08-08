import { formatJson, FormatJsonOptions } from '../jsonFormatter';

describe('formatJson', () => {
  it('should format valid JSON with default indentation', () => {
    const input = '{"name":"John","age":30}';
    const expected = '{\n  "name": "John",\n  "age": 30\n}';
    
    expect(formatJson(input)).toBe(expected);
  });

  it('should format valid JSON with custom indentation', () => {
    const input = '{"name":"John","age":30}';
    const expected = '{\n    "name": "John",\n    "age": 30\n}';
    const options: FormatJsonOptions = { indent: 4 };
    
    expect(formatJson(input, options)).toBe(expected);
  });

  it('should throw an error for invalid JSON', () => {
    const input = '{"name":"John",age:30}';
    
    expect(() => formatJson(input)).toThrow('Invalid JSON:');
  });

  it('should handle nested objects', () => {
    const input = '{"user":{"name":"John","details":{"age":30}}}';
    const expected = '{\n  "user": {\n    "name": "John",\n    "details": {\n      "age": 30\n    }\n  }\n}';
    
    expect(formatJson(input)).toBe(expected);
  });

  it('should handle arrays', () => {
    const input = '[{"name":"John"},{"name":"Jane"}]';
    const expected = '[\n  {\n    "name": "John"\n  },\n  {\n    "name": "Jane"\n  }\n]';
    
    expect(formatJson(input)).toBe(expected);
  });
});
