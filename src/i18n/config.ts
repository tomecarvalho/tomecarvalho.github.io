import type { AstroUserConfig } from "astro";

export const localeLabels = {
  en: "English",
  pt: "Português",
} as const;

export type LocaleKey = keyof typeof localeLabels;

const localesArray = Object.keys(localeLabels) as LocaleKey[];

export const i18nConfig = {
  locales: localesArray,
  defaultLocale: "en",
  fallback: { pt: "en" },
  routing: { fallbackType: "rewrite" },
} satisfies AstroUserConfig<LocaleKey[], never, never>["i18n"];
