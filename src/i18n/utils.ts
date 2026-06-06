import { getRelativeLocaleUrl } from "astro:i18n";
import { capitalize } from "../utils/string";
import { i18nConfig, localeLabels, type LocaleKey } from "./config";
import { ui } from "./ui";

const { defaultLocale, locales } = i18nConfig;

type UiKey = keyof (typeof ui)[typeof defaultLocale];

/** `Astro.currentLocale` is of this type. */
export type CurrentLocale = string | undefined;

export type LanguageOption = {
  locale: LocaleKey;
  label: (typeof localeLabels)[LocaleKey];
  href: string;
  current: boolean;
};

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

  return (key: UiKey, options?: { capitalize?: boolean }) => {
    let string = ui[locale][key] || ui[defaultLocale][key];

    if (options?.capitalize) string = capitalize(string);

    return string;
  };
};
