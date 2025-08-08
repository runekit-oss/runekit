import { jsonCommand } from '../json';
import { Command } from 'commander';
import * as fs from 'fs';

// Mock fs module
jest.mock('fs');

// Mock console.log and console.error
const mockLog = jest.spyOn(console, 'log').mockImplementation();
const mockError = jest.spyOn(console, 'error').mockImplementation();
const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => undefined as never);

describe('jsonCommand', () => {
  let program: Command;

  beforeEach(() => {
    program = new Command('rune');
    program.addCommand(jsonCommand);
    mockLog.mockClear();
    mockError.mockClear();
    mockExit.mockClear();
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.readFileSync as jest.Mock).mockImplementation((path: string) => {
      if (path === 'test.json') {
        return '{"name":"John","age":30}';
      }
      return '';
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should format JSON with default indentation', () => {
    program.parse(['rune', 'json', 'format-json', 'test.json']);
    
    expect(mockLog).toHaveBeenCalledWith('{\n  "name": "John",\n  "age": 30\n}');
  });

  it('should format JSON with custom indentation', () => {
    program.parse(['rune', 'json', 'format-json', 'test.json', '--indent', '4']);
    
    expect(mockLog).toHaveBeenCalledWith('{\n    "name": "John",\n    "age": 30\n}');
  });

  it('should handle invalid JSON', () => {
    (fs.readFileSync as jest.Mock).mockImplementation((path: string) => {
      if (path === 'test.json') {
        return '{"name":"John",age:30}';
      }
      return '';
    });
    
    program.parse(['rune', 'json', 'format-json', 'test.json']);
    
    expect(mockError).toHaveBeenCalledWith(expect.stringContaining('Error: Invalid JSON:'));
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
