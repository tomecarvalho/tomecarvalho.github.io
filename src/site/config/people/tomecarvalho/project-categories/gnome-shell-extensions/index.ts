import type { ProjectCategory } from "../../../../../../types/data/projects/ProjectCategory";
import centerMouseShortcuts from "./projects/center-mouse-shortcuts";

const gnomeShellExtensions = {
  id: "gnome-shell-extensions",
  name: { en: "GNOME Shell Extensions", pt: "Extensões GNOME Shell" },
  icon: "mdi:gnome",
  projects: [centerMouseShortcuts],
} as const satisfies ProjectCategory;

export default gnomeShellExtensions;
