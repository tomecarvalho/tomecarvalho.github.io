import type { LocaleString } from "../i18n/types";
import type { Overwrite } from "../types/util/Overwrite";

export interface NavRoute {
  label: LocaleString;
  path: string;
  icon?: string;
}

export type TranslatedNavRoute = Overwrite<NavRoute, { label: string }> & {
  originalPath: string;
};

export const navRoutes = {
  aboutMe: { label: "nav.aboutMe", path: "/", icon: "mdi:home" },
  projects: { label: "nav.projects", path: "/projects/", icon: "mdi:folder" },
  interests: {
    label: "nav.interests",
    path: "/interests/",
    icon: "mdi:heart",
  },
} as const satisfies Record<string, NavRoute>;

/** `navRoutes` entries ordered by the order they should appear in the nav component. */
export const navRoutesArray = [
  navRoutes.aboutMe,
  navRoutes.projects,
  navRoutes.interests,
] as const satisfies NavRoute[];
