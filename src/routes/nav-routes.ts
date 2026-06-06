import type { LocaleString } from "../i18n/ui";
import type { Overwrite } from "../types/Overwrite";

export interface NavRoute {
  label: LocaleString;
  path: string;
}

export type TranslatedNavRoute = Overwrite<NavRoute, { label: string }>;

export const navRoutes: NavRoute[] = [
  { label: "about", path: "/" },
  { label: "projects", path: "/projects" },
] as const;
