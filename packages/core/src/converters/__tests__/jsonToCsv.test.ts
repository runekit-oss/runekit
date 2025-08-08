import { jsonToCsv } from '../jsonToCsv';

describe('jsonToCsv', () => {
  it('should convert simple JSON array to CSV', () => {
    const input = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 }
    ];
    const expected = 'name,age\nJohn,30\nJane,25';
    
    expect(jsonToCsv(input)).toBe(expected);
  });

  it('should handle empty array', () => {
    const input: any[] = [];
    const expected = '';
    
    expect(jsonToCsv(input)).toBe(expected);
  });

  it('should handle different data types', () => {
    const input = [
      { name: 'John', age: 30, active: true, score: null },
      { name: 'Jane', age: 25, active: false, score: 95.5 }
    ];
    const expected = 'name,age,active,score\nJohn,30,true,\nJane,25,false,95.5';
    
    expect(jsonToCsv(input)).toBe(expected);
  });

  it('should escape commas and quotes in strings', () => {
    const input = [
      { name: 'John, Jr.', quote: 'He said "Hello"' },
      { name: 'Jane', quote: 'She said "Goodbye"' }
    ];
    const expected = 'name,quote\n"John, Jr.","He said ""Hello"""\nJane,"She said ""Goodbye"""';
    
    expect(jsonToCsv(input)).toBe(expected);
  });

  it('should throw an error for non-array input', () => {
    const input = { name: 'John' };
    
    expect(() => jsonToCsv(input as any)).toThrow('Input must be an array');
  });

  it('should throw an error for non-object items in array', () => {
    const input = ['John', 'Jane'] as any;
    
    expect(() => jsonToCsv(input)).toThrow('All items in the array must be flat objects');
  });
});
