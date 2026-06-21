import type { Translatable } from "../../../i18n/types";

export interface Project {
  name: Translatable;
  description: Translatable;
  href: string;
  imageUrl?: string;
}
