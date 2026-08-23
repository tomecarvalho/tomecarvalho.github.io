import type { Project } from "../../../../../../../types/data/projects/Project";
import terms from "../../../terms";
import { Content as DescriptionEn } from "./center-mouse-shortcuts.description.en.md";
import { Content as DescriptionPt } from "./center-mouse-shortcuts.description.pt.md";

export const centerMouseShortcutsSummary = {
  en: "A simple extension that adds two configurable keyboard shortcuts to centre the mouse pointer on the focused window or display, similar to KDE Plasma's built-in shortcuts. Useful when the mouse pointer finds itself inconveniently far from the window you have focused.",
  pt: "Uma extensão simples que adiciona atalhos de teclado para centrar o ponteiro do rato na janela ou ecrã em foco, semelhante aos atalhos built-in do KDE Plasma. Útil quando o ponteiro do rato se encontra inconvenientemente longe da janela em foco.",
} as const;

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
