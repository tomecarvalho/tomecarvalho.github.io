export type SplitParagraphsInput = string | string[];

/**
 * Split a string into paragraphs separated by blank lines.
 * @param Paragraphs separated by blank lines, or already as an array of paragraphs (unmodified).
 */
export const splitParagraphs = (text: SplitParagraphsInput): string[] =>
  Array.isArray(text)
    ? text
    : text.split(/\n\s*\n/).map((paragraph) => paragraph.trim());

/** Capitalize the first character of a string. */
export const capitalize = (string: string): string => {
  const firstChar = string[0] || "";
  const rest = string.slice(1) || "";
  return `${firstChar.toUpperCase()}${rest}`;
};

/** Convert a camelCase string to kebab-case. */
export const camelToKebabCase = (string: string): string =>
  string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
