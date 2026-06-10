/**
 * @example
 * const recursiveStringObject: RecursiveObject<string> = {
 *   name: "John Doe",
 *   urls: {
 *     home: "https://example.com",
 *     social: {
 *       lifeInvader: "https://lifeinvader.com/johndoe",
 *     },
 *   },
 * }
 */
export interface RecursiveObject<T = unknown> {
  [key: string]: T | RecursiveObject<T>;
}
