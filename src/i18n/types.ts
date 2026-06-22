import type { LocaleKey } from "./config";
import type en from "./locales/en";

export type FullLocaleStrings = typeof en;

type PartialLocaleStrings = Partial<FullLocaleStrings>;

type NonDefaultLocaleKeys = Exclude<LocaleKey, "en">;

type NonDefaultLocaleKey = Exclude<LocaleKey, "en">;

export type LocaleString = keyof FullLocaleStrings;

/**
 * `ui` requires all the locale strings for the default locale (English),
 * but not for the other locales.
 */
export type Ui = {
  en: FullLocaleStrings;
} & Record<NonDefaultLocaleKeys, PartialLocaleStrings>;

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
