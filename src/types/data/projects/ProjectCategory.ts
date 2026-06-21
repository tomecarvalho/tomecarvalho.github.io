import type { Translatable } from "../../../i18n/types";
import type { Project } from "./Project";

export interface ProjectCategory {
  id: string;
  name: Translatable;
  icon: string;
  projects: Project[];
}
