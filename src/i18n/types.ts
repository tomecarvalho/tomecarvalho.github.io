import type { MarkdownInstance } from "astro";
import type { localeLabels } from "./config";
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

/** Localized value with English required and other locales optional. */
export type Localized<T> = {
  en: T;
} & Partial<Record<NonDefaultLocaleKey, T>>;

/** Inline translations for site-config-specific strings. English is required. */
export type Translations = Localized<string>;

/** A shared UI key or inline translations defined in site config. */
export type Translatable = LocaleString | Translations;

/** Astro Markdown `Content` component from a `.md` import. */
export type MarkdownContent = MarkdownInstance<
  Record<string, unknown>
>["Content"];

/** Localized Markdown content components. */
export type LocalizedMarkdown = Localized<MarkdownContent>;

/**
 * @example
 * // Turns
 * {
 *   n: number;
 *   name: Translatable;
 *   description: LocalizedMarkdown;
 *   list: { foo: Translatable };
 * }
 * // Into
 * {
 *   n: number;
 *   name: string;
 *   description: MarkdownContent;
 *   list: { foo: string };
 * }
 */
export type Translated<T> = T extends LocaleString
  ? string
  : T extends Localized<infer U>
    ? U
    : T extends object
      ? { [K in keyof T]: Translated<T[K]> }
      : T;

/** `Astro.currentLocale` is of this type. */
export type CurrentLocale = string | undefined;

export type LocaleKey = keyof typeof localeLabels;

export type LanguageOption = {
  locale: LocaleKey;
  label: (typeof localeLabels)[LocaleKey];
  href: string;
  current: boolean;
};
