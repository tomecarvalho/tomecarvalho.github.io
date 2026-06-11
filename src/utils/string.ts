/** Split a string into paragraphs separated by blank lines. */
export const splitParagraphs = (text: string): string[] =>
  text.split(/\n\s*\n/).map((paragraph) => paragraph.trim());

/** Capitalize the first character of a string. */
export const capitalize = (string: string): string => {
  const firstChar = string[0] || "";
  const rest = string.slice(1) || "";
  return `${firstChar.toUpperCase()}${rest}`;
};

/** Convert a camelCase string to kebab-case. */
export const camelToKebabCase = (string: string): string =>
  string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
