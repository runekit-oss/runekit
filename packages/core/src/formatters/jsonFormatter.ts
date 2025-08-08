/**
 * Options for JSON formatting
 */
export interface FormatJsonOptions {
  /**
   * Number of spaces to use for indentation
   * @default 2
   */
  indent?: number;
}

/**
 * Format a JSON string with proper indentation and line breaks
 * @param json - The JSON string to format
 * @param options - Formatting options
 * @returns The formatted JSON string
 * @throws {Error} If the input is not valid JSON
 */
export function formatJson(json: string, options: FormatJsonOptions = {}): string {
  const indent = options.indent ?? 2;
  
  try {
    const parsed = JSON.parse(json);
    return JSON.stringify(parsed, null, indent);
  } catch (error) {
    throw new Error(`Invalid JSON: ${(error as Error).message}`);
  }
}
