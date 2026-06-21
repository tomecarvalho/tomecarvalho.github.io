import type { ProjectCategory } from "../../../../../../types/data/projects/ProjectCategory";
import fedoraWorkstation from "./projects/fedora-workstation";

const dotfiles = {
  id: "dotfiles",
  name: { en: "Dotfiles", pt: "Dotfiles (ficheiros de configuração)" },
  icon: "mdi:file-cog",
  projects: [fedoraWorkstation],
} as const satisfies ProjectCategory;

export default dotfiles;
