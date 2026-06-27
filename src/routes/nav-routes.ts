import type { LocaleString, Translatable, Translated } from "../i18n/types";

export interface NavRoute {
  label: LocaleString;
  path: string;
  icon?: string;
  description?: Translatable;
}

export type TranslatedNavRoute = Translated<NavRoute>;

export const navRoutes = {
  aboutMe: { label: "nav.aboutMe", path: "/", icon: "mdi:home" },
  projects: {
    label: "nav.projects",
    path: "/projects/",
    icon: "mdi:folder",
    description: {
      en: "Overview of the projects I've developed or contributed to.",
      pt: "Visão geral dos projetos que desenvolvi ou para os quais contribui.",
    },
  },
  tools: {
    label: "nav.tools",
    path: "/tools/",
    icon: "mdi:tools",
    description: {
      en: "Tools I use and recommend.",
      pt: "Ferramentas que uso e recomendo.",
    },
  },
  interests: {
    label: "nav.interests",
    path: "/interests/",
    icon: "mdi:heart",
    description: {
      en: "The fun stuff! The page where I nerd out about my hobbies.",
      pt: 'O divertido! A página onde eu dou "nerd" sobre os meus hobbies.',
    },
  },
} as const satisfies Record<string, NavRoute>;

/** `navRoutes` entries ordered by the order they should appear in the nav component. */
export const navRoutesArray = [
  navRoutes.aboutMe,
  navRoutes.projects,
  navRoutes.tools,
  navRoutes.interests,
] as const satisfies NavRoute[];

/** `navRoutes` entries that should appear in the Explore section of the index page. */
export const exploreRoutesArray = [
  navRoutes.projects,
  navRoutes.tools,
  navRoutes.interests,
] as const satisfies NavRoute[];
