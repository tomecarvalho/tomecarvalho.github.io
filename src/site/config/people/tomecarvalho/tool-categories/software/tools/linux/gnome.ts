import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import centerMouseShortcuts, {
  centerMouseShortcutsSummary,
} from "../../../../project-categories/gnome-shell-extensions/projects/center-mouse-shortcuts";
import { Content as DescriptionEn } from "./gnome.description.en.md";
import { Content as DescriptionPt } from "./gnome.description.pt.md";

const gnome = {
  name: { en: "GNOME", pt: "GNOME" },
  type: { en: "Desktop Environment", pt: "Ambiente de Trabalho" },
  href: "https://www.gnome.org/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  links: [
    {
      text: {
        primary: centerMouseShortcuts.name,
        secondary: { en: "By myself", pt: "Por mim" },
        description: centerMouseShortcutsSummary,
      },
      href: centerMouseShortcuts.links[1].href,
    },
    {
      text: {
        primary: { en: "Focus changer" },
        secondary: { en: "By martinhjartmyr", pt: "Por martinhjartmyr" },
        description: {
          en: "Adds tiling window manager-like directional window focus changing shortcuts.",
          pt: "Adiciona atalhos para alteração direcional da janela em foco tipo tiling window manager.",
        },
      },
      href: "https://extensions.gnome.org/extension/4627/focus-changer/",
    },
    {
      text: {
        primary: { en: "Mouse Follows Focus" },
        secondary: { en: "By crisidev", pt: "Por crisidev" },
        description: {
          en: "Warps the mouse pointer to the centre of a window when it is focused without using the mouse.",
          pt: "Move o ponteiro do rato para o centro da janela em foco quando esta é focada sem utilizar o rato.",
        },
      },
      href: "https://extensions.gnome.org/extension/7656/mouse-follows-focus/",
    },
    {
      text: {
        primary: { en: "Copyous" },
        secondary: { en: "By boerdereinar", pt: "Por boerdereinar" },
        description: {
          en: "Feature-rich, customisable clipboard manager.",
          pt: "Gestor de área de transferência rico em funcionalidades e personalizável.",
        },
      },
      href: "https://extensions.gnome.org/extension/8834/copyous/",
    },
  ],
} as const satisfies Tool;

export default gnome;
