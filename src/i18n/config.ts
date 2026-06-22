import type { AstroUserConfig } from "astro";
import type { LocaleKey } from "./types";

export const localeLabels = {
  en: "English",
  pt: "Português",
} as const;

const localesArray = Object.keys(localeLabels) as LocaleKey[];

export const i18nConfig = {
  locales: localesArray,
  defaultLocale: "en",
  fallback: { pt: "en" },
  routing: { fallbackType: "rewrite" },
} satisfies AstroUserConfig<LocaleKey[], never, never>["i18n"];
