import type { Translatable } from "../../../i18n/types";
import type { Overwrite } from "../../util/Overwrite";

export interface Project {
  name: Translatable;
  description: Translatable;
  href: string;
  imageUrl?: string;
}

export type TranslatedProject = Overwrite<
  Project,
  {
    name: string;
    description: string;
  }
>;
