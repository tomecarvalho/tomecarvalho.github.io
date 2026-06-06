import type { AstroUserConfig } from "astro";

const locales = {
  en: "English",
  pt: "Português",
} as const;

export type LocaleKey = keyof typeof locales;

const localesArray = Object.keys(locales) as LocaleKey[];

export const i18nConfig = {
  locales: localesArray,
  defaultLocale: "en",
  fallback: { pt: "en" },
  routing: { fallbackType: "rewrite" },
} satisfies AstroUserConfig<LocaleKey[], never, never>["i18n"];
