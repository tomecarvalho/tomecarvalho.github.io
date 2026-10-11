import type { LocalizedMarkdown, Translatable } from "../../../i18n/types";

export interface Intro {
  role: Translatable;
  location: Translatable;
  description: LocalizedMarkdown;
}
