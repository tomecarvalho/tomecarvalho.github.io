import type { LocaleKey } from "./config";

const en = {
  "nav.aboutMe": "About Me",
  "nav.projects": "Projects",
  "nav.interests": "Interests",

  "terms.universityCoursework": "University Coursework",
};

type FullLocaleStrings = typeof en;

export type LocaleString = keyof FullLocaleStrings;

type PartialLocaleStrings = Partial<FullLocaleStrings>;

type NonDefaultLocaleKeys = Exclude<LocaleKey, "en">;

/**
 * `ui` requires all the locale strings for the default locale (English),
 * but not for the other locales.
 */
type Ui = {
  en: FullLocaleStrings;
} & Record<NonDefaultLocaleKeys, PartialLocaleStrings>;

const pt: PartialLocaleStrings = {
  "nav.aboutMe": "Sobre Mim",
  "nav.projects": "Projetos",
  "nav.interests": "Interesses",

  "terms.universityCoursework": "Trabalhos Universitários",
};

export const ui: Ui = { en, pt } as const;
