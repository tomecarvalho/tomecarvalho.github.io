import type { LocaleKey } from "./config";

const en = {
  "nav.aboutMe": "About Me",
  "nav.projects": "Projects",
  "terms.softwareDeveloper": "Software Developer",
  "terms.portugal": "Portugal",
  "aboutMe.description.tomecarvalho":
    "I'm a computer science professional with a passion for exploring technologies that allow me to build clean solutions across the full stack: from robust back-end services to user-friendly interfaces, with DevOps practices and automation in mind to ensure reliability and efficiency.",
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
  "terms.softwareDeveloper": "Desenvolvedor de Software",
  "terms.portugal": "Portugal",
  "aboutMe.description.tomecarvalho":
    "Sou um profissional de engenharia informática com uma paixão por explorar tecnologias que me permitem construir soluções sólidas em toda a stack tecnológica: desde serviços de back-end robustos a interfaces intuitivas, tendo sempre em mente práticas de DevOps e automatização para garantir fiabilidade e eficiência.",
};

export const ui: Ui = { en, pt } as const;
