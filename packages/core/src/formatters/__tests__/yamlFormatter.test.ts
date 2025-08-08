import { formatYaml } from '../yamlFormatter';

describe('formatYaml', () => {
  it('should format valid YAML', () => {
    const input = 'name: John\nage: 30';
    const expected = 'name: John\nage: 30\n';
    
    expect(formatYaml(input)).toBe(expected);
  });

  it('should handle nested objects', () => {
    const input = 'user:\n  name: John\n  age: 30';
    const expected = 'user:\n  name: John\n  age: 30\n';
    
    expect(formatYaml(input)).toBe(expected);
  });

  it('should handle arrays', () => {
    const input = 'items:\n  - name: item1\n  - name: item2';
    const expected = 'items:\n  - name: item1\n  - name: item2\n';
    
    expect(formatYaml(input)).toBe(expected);
  });

  it('should throw an error for invalid YAML', () => {
    const input = 'name: John\n  age: 30'; // Incorrect indentation
    
    expect(() => formatYaml(input)).toThrow('Invalid YAML:');
  });
});
