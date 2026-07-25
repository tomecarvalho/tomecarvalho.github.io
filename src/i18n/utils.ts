import { getRelativeLocaleUrl } from "astro:i18n";
import { capitalize } from "../utils/string";
import { i18nConfig, localeLabels } from "./config";
import {
  type CurrentLocale,
  type LanguageOption,
  type LocaleKey,
  type LocaleString,
  type Localized,
  type Translatable,
  type Translated,
  type Translations,
} from "./types";
import { ui } from "./ui";

const { defaultLocale, locales } = i18nConfig;

const isTranslations = (value: Translatable): value is Translations =>
  typeof value === "object";

const isLocaleString = (value: unknown): value is LocaleString =>
  typeof value === "string" && value in ui[defaultLocale];

const isLocalized = (value: unknown): value is Localized<unknown> =>
  typeof value === "object" && value !== null && "en" in value;

export const getLocale = (currentLocale: CurrentLocale): LocaleKey =>
  currentLocale && currentLocale in ui
    ? (currentLocale as LocaleKey)
    : defaultLocale;

export const toLocalePath = (locale: LocaleKey, path: string) =>
  getRelativeLocaleUrl(locale, path === "/" ? "" : path.replace(/^\//, ""));

const getPathWithoutLocale = (pathname: string): string => {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;

    const prefix = `/${locale}`;

    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      const rest = pathname.slice(prefix.length);
      return rest || "/";
    }
  }

  return pathname;
};

export const getLanguageOptions = (
  pathname: string,
  currentLocale: CurrentLocale,
): LanguageOption[] => {
  const finalCurrentLocale = getLocale(currentLocale);
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const path =
    pathWithoutLocale === "/" ? "" : pathWithoutLocale.replace(/^\//, "");

  return locales.map((locale) => ({
    locale,
    label: localeLabels[locale],
    href: getRelativeLocaleUrl(locale, path),
    current: locale === finalCurrentLocale,
  }));
};

export const useTranslations = (currentLocale: CurrentLocale) => {
  const locale = getLocale(currentLocale);

  return (value: Translatable, options?: { capitalize?: boolean }) => {
    let string = isTranslations(value)
      ? (value[locale] ?? value.en)
      : ui[locale][value] || ui[defaultLocale][value];

    if (options?.capitalize) string = capitalize(string);

    return string;
  };
};

/**
 * Translates objects recursively.
 * Resolves UI locale keys, string translations, and other localized values
 * (e.g. Markdown content components) with English as fallback.
 * @param obj Object to translate.
 * @param currentLocale Current locale.
 * @returns Translated object.
 */
export const translate = <T>(
  obj: T,
  currentLocale: CurrentLocale,
): Translated<T> => {
  const locale = getLocale(currentLocale);

  const recurse = (value: unknown): unknown => {
    if (isLocaleString(value))
      return ui[locale][value] || ui[defaultLocale][value];

    if (isLocalized(value)) return value[locale] ?? value.en;

    if (Array.isArray(value)) return value.map(recurse);

    if (typeof value === "object" && value !== null)
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [k, recurse(v)]),
      );

    return value;
  };

  return recurse(obj) as Translated<T>;
};
