/**
 * Convert CSV data to JSON array
 * @param csv - The CSV string to convert
 * @returns JSON array representation of the CSV data
 * @throws {Error} If the CSV data is malformed
 */
export function csvToJson(csv: string): any[] {
  try {
    const lines = csv.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length === 0) {
      return [];
    }
    
    // Parse header
    const headers = lines[0].split(',').map(header => header.trim());
    
    // Parse rows
    const result = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const obj: any = {};
      
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        const value = values[j] ? values[j].trim() : '';
        
        // Try to parse as JSON value (number, boolean, null)
        if (value === 'null') {
          obj[header] = null;
        } else if (value === 'true') {
          obj[header] = true;
        } else if (value === 'false') {
          obj[header] = false;
        } else if (!isNaN(Number(value)) && value !== '') {
          obj[header] = Number(value);
        } else {
          // Treat as string
          obj[header] = value;
        }
      }
      
      result.push(obj);
    }
    
    return result;
  } catch (error) {
    throw new Error(`Failed to convert CSV to JSON: ${(error as Error).message}`);
  }
}
