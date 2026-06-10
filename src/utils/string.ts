/** Split a string into paragraphs separated by blank lines. */
export const splitParagraphs = (text: string) =>
  text.split(/\n\s*\n/).map((paragraph) => paragraph.trim());

/** Capitalize the first character of a string. */
export const capitalize = (string: string) => {
  const firstChar = string[0] || "";
  const rest = string.slice(1) || "";
  return `${firstChar.toUpperCase()}${rest}`;
};
