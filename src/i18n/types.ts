import type { LocaleKey } from "./config";
import type { LocaleString } from "./ui";

type NonDefaultLocaleKey = Exclude<LocaleKey, "en">;

/** Inline translations for site-config-specific strings. English is required. */
export type Translations = {
  en: string;
} & Partial<Record<NonDefaultLocaleKey, string>>;

/** A shared UI key or inline translations defined in site config. */
export type Translatable = LocaleString | Translations;

export const isTranslations = (value: Translatable): value is Translations =>
  typeof value === "object";
