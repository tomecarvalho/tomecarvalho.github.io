import type { Translatable, Translated } from "../../../i18n/types";

export interface Tool {
  name: Translatable;
  type: Translatable;
  description: Translatable;
  href?: string;
  children?: Tool[];
}

export type TranslatedTool = Translated<Tool>;
