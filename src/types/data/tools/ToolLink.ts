import type { Translatable, Translated } from "../../../i18n/types";

export interface ToolLink {
  text: {
    primary: Translatable;
    secondary?: Translatable;
    description?: Translatable;
  };
  href: string;
}

export type TranslatedToolLink = Translated<ToolLink>;
