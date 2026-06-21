import type { Translatable } from "../../../i18n/types";

interface ProjectLink {
  icon: string;
  href: string;
  label: Translatable;
}

export interface Project {
  name: Translatable;
  description: Translatable;
  href?: string;
  imageUrl?: string;
  links?: ProjectLink[];
}
