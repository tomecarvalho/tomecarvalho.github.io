import type { Project } from "../../../../../../../types/data/projects/Project";
import terms from "../../../terms";
import { Content as DescriptionEn } from "./center-mouse-shortcuts.description.en.md";
import { Content as DescriptionPt } from "./center-mouse-shortcuts.description.pt.md";

const centerMouseShortcuts = {
  name: {
    en: "Centre Mouse Shortcuts",
    pt: "Atalhos de Centrar o Rato",
  },
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  imageUrl:
    "https://extensions.gnome.org/extension-data/screenshots/screenshot_9985.png",
  links: [
    {
      icon: "mdi:github",
      href: "https://github.com/tomecarvalho/gnome-extension-center-mouse-shortcuts",
      label: terms.gitHub,
    },
    {
      icon: "mdi:gnome",
      href: "https://extensions.gnome.org/extension/9985/center-mouse-shortcuts/",
      label: { en: "GNOME Extensions", pt: "Extensões GNOME" },
    },
  ],
} as const satisfies Project;

export default centerMouseShortcuts;
