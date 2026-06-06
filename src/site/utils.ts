import siteConfig from "./config";

/**
 * Append the configured site name to a string, separated by `" - "`.
 */
export const appendSiteName = (string: string): `${string} - ${string}` =>
  `${string} - ${siteConfig.name}`;
