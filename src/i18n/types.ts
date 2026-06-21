import type { LocaleKey } from "./config";
import type { LocaleString } from "./ui";

type NonDefaultLocaleKey = Exclude<LocaleKey, "en">;

/** Inline translations for site-config-specific strings. English is required. */
export type Translations = {
  en: string;
} & Partial<Record<NonDefaultLocaleKey, string>>;

/** A shared UI key or inline translations defined in site config. */
export type Translatable = LocaleString | Translations;

/**
 * @example
 * // Turns
 * {
 *   n: number;
 *   name: Translatable;
 *   list: { foo: Translatable };
 * }
 * // Into
 * {
 *   n: number;
 *   name: string;
 *   list: { foo: string };
 * }
 */
export type Translated<T> = T extends Translatable
  ? string
  : T extends object
    ? { [K in keyof T]: Translated<T[K]> }
    : T;
