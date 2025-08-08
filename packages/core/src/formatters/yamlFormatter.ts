import * as yaml from 'js-yaml';

/**
 * Format a YAML string with proper indentation and line breaks
 * @param yamlString - The YAML string to format
 * @returns The formatted YAML string
 * @throws {Error} If the input is not valid YAML
 */
export function formatYaml(yamlString: string): string {
  try {
    // Parse the YAML to ensure it's valid
    const parsed = yaml.load(yamlString);
    
    // Re-stringify with consistent formatting
    return yaml.dump(parsed, {
      indent: 2,
      lineWidth: -1, // Don't break lines
      noRefs: true,  // Don't use references
    });
  } catch (error) {
    throw new Error(`Invalid YAML: ${(error as Error).message}`);
  }
}
