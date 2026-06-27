import type { Translatable, Translated } from "../../../i18n/types";
import type { ToolLink } from "./ToolLink";

export interface Tool {
  name: Translatable;
  type: Translatable;
  description: Translatable;
  href?: string;
  children?: Tool[];
  links?: ToolLink[];
}

export type TranslatedTool = Translated<Tool>;
