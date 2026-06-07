import type { LocaleString } from "../i18n/ui";
import type { Overwrite } from "../types/Overwrite";

export interface NavRoute {
  label: LocaleString;
  path: string;
}

export type TranslatedNavRoute = Overwrite<NavRoute, { label: string }>;

export const navRoutes = {
  aboutMe: { label: "nav.aboutMe", path: "/" },
  projects: { label: "nav.projects", path: "/projects" },
} as const satisfies Record<string, NavRoute>;

/** `navRoutes` entries ordered by the order they should appear in the nav component. */
export const navRoutesArray = [
  navRoutes.aboutMe,
  navRoutes.projects,
] as const satisfies NavRoute[];
