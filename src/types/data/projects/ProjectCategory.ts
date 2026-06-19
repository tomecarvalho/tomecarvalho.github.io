import type { Translatable } from "../../../i18n/types";
import type { Project } from "./Project";

export interface ProjectCategory {
  name: Translatable;
  icon: string;
  projects: Project[];
}
