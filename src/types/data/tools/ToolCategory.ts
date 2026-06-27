import type { Translatable, Translated } from "../../../i18n/types";
import type { Tool } from "./Tool";

export interface ToolCategory {
  id: string;
  name: Translatable;
  icon: string;
  tools: Tool[];
}

export type TranslatedToolCategory = Translated<ToolCategory>;
