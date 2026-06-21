import type { SiteConfig } from "../../..";
import dotfiles from "./dotfiles";
import gnomeShellExtensions from "./gnome-shell-extensions";
import miscellaneous from "./miscellaneous";

const projectCategories = [
  miscellaneous,
  gnomeShellExtensions,
  dotfiles,
] as const satisfies SiteConfig["projectCategories"];

export default projectCategories;
