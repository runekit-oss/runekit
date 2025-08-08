/**
 * Format an XML string with proper indentation and line breaks
 * @param xml - The XML string to format
 * @returns The formatted XML string
 * @throws {Error} If the input is not valid XML
 */
export function formatXml(xml: string): string {
  try {
    // For now, we'll implement a simple formatter
    // In a production environment, we might want to use a more robust XML parser
    
    // Remove existing whitespace and newlines
    let formatted = xml.replace(/\s+/g, ' ').trim();
    
    // Add newlines and indentation
    let indent = 0;
    const indentSize = 2;
    let result = '';
    
    // Split by tags and text content
    const tokens = formatted.split(/(<\/[^>]+>|<[^/][^>]*\/?>|<[^>]*>)/g);
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      
      if (!token || token.trim() === '') continue;
      
      // Text content (not a tag)
      if (!token.match(/<[^>]*>/)) {
        const text = token.trim();
        if (text) {
          result += ' '.repeat(indent * indentSize) + text + '\n';
        }
        continue;
      }
      
      // Closing tag
      if (token.match(/<\//)) {
        indent--;
        result += ' '.repeat(indent * indentSize) + token + '\n';
      }
      // Self-closing tag
      else if (token.match(/\/>/)) {
        result += ' '.repeat(indent * indentSize) + token + '\n';
      }
      // Opening tag
      else {
        result += ' '.repeat(indent * indentSize) + token + '\n';
        indent++;
      }
    }
    
    return result.trim();
  } catch (error) {
    throw new Error(`Invalid XML: ${(error as Error).message}`);
  }
}
