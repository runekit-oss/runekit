/**
 * Convert JSON array to CSV data
 * @param json - The JSON array to convert
 * @returns CSV string representation of the JSON data
 * @throws {Error} If the JSON data is not an array or contains non-flat objects
 */
export function jsonToCsv(json: any[]): string {
  try {
    if (!Array.isArray(json)) {
      throw new Error('Input must be an array');
    }
    
    if (json.length === 0) {
      return '';
    }
    
    // Get headers from the keys of the first object
    const headers = Object.keys(json[0]);
    
    // Create header row
    const csvRows = [headers.join(',')];
    
    // Process each row
    for (const obj of json) {
      if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new Error('All items in the array must be flat objects');
      }
      
      const values = headers.map(header => {
        const value = obj[header];
        
        // Handle special values
        if (value === null || value === undefined) {
          return '';
        } else if (typeof value === 'string') {
          // Escape commas and quotes in strings
          if (value.includes(',') || value.includes('"')) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        } else {
          // Convert other types to string
          return String(value);
        }
      });
      
      csvRows.push(values.join(','));
    }
    
    return csvRows.join('\n');
  } catch (error) {
    throw new Error(`Failed to convert JSON to CSV: ${(error as Error).message}`);
  }
}
