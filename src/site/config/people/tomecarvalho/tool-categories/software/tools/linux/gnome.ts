import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import centerMouseShortcuts from "../../../../project-categories/gnome-shell-extensions/projects/center-mouse-shortcuts";

const gnome = {
  name: { en: "GNOME", pt: "GNOME" },
  type: { en: "Desktop Environment", pt: "Ambiente de Trabalho" },
  href: "https://www.gnome.org/",
  description: {
    en: `Truth be told, no desktop environment or window manager fulfils all of my desires – in an ideal world, I'd be using a tiling WM/DE. Nevertheless, at the moment, GNOME is the most reliable option for my hardware and needs, and its configuration is versionable enough.

If you've used GNOME before, you may have noticed that my website looks familiar – I thought it'd be fun to style it after GNOME's Adwaita theme.
    
I do rely on a handful of extensions to provide some functionality GNOME doesn't offer out of the box, mainly:`,
    pt: `Verdade seja dita, nenhum ambiente de trabalho ou gestor de janelas satisfaz todos os meus desejos — num mundo ideal, utilizaria um tiling WM/DE. De qualquer modo, de momento, o GNOME é a opção mais fiável para o meu hardware e necessidades, e a sua configuração é versionável que chegue.
    
Recorro a algumas extensões para fornecer algumas funcionalidades que o GNOME não oferece de imediato, principalmente:`,
  },
  links: [
    {
      text: {
        primary: centerMouseShortcuts.name,
        secondary: { en: "By myself", pt: "Por mim" },
        description: centerMouseShortcuts.description,
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
