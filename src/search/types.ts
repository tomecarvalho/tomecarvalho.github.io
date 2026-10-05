import type { Translatable } from "../i18n/types";

export type SearchEntry = {
  label: string;
  context: string;
  href: string;
  icon: string;
  keywords?: string;
};

export type SearchModeConfig = {
  label: Translatable;
  shortcut: string;
};
