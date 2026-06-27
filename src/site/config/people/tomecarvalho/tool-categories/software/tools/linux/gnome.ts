import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import centerMouseShortcuts from "../../../../project-categories/gnome-shell-extensions/projects/center-mouse-shortcuts";

const gnome = {
  name: { en: "GNOME", pt: "GNOME" },
  type: { en: "Desktop Environment", pt: "Ambiente de Trabalho" },
  href: "https://www.gnome.org/",
  description: {
    en: `Truth be told, no DE or WM fulfils all of my desires. I need something reliable, with decent support for hybrid graphics laptops with NVIDIA dGPUs, fractional scaling with different scaling factors per output, with good workspace management and efficient keyboard-driven window management. Bonus points for easily versionable configuration.
    
Although I loved my brief time on i3 WM—back when both my displays were 1080p—I cannot use it now due to X11's limitations, nor can I use its Wayland counterpart, Sway, due to its lacklustre fractional scaling, at least on all-too-common XWayland apps. Only the "big two", GNOME and KDE Plasma, implement enough magic in their fractional scaling implementations for everything to look crisp on all my displays.

I settled on GNOME because it's better at handling multi-monitor window management, it's generally less buggy, its design is cleaner, and it's more suitable for configuration versioning. However, I do rely on a handful of extensions to provide some functionality it doesn't offer out of the box.`,
    pt: `Verdade seja dita, nenhum DE nem WM satisfaz todos os meus desejos. Preciso de algo fiável, com bom suporte para portáteis com gráficos híbridos e dGPUs NVIDIA, escalonamento fracionário com fatores diferentes por ecrã, com boa gestão de "workspaces" e gestão de janelas eficiente via teclado. Pontos extra se tiver uma configuração facilmente versionável.
    
Embora tenha adorado o meu breve período a utilizar o i3 WM — na altura em que ambos os meus ecrãs eram 1080p — já não posso utilizá-lo devido às limitações do X11, nem posso utilizar o seu equivalente em Wayland, o Sway, devido ao seu escalonamento fracionário insatisfatório, pelo menos em aplicações XWayland, que infelizmente ainda são comuns. Apenas os "dois grandes", GNOME e KDE Plasma, incorporam magia suficiente nas suas implementações de escalonamento fracionário para que tudo fique nítido em todos os meus ecrãs.

Acabei por escolher o GNOME porque é melhor a lidar com a gestão de janelas multi-ecrã, tem, de modo geral, menos bugs, o seu design é mais limpo, e é mais adequado para o versionamento da configuração. No entanto, recorro a algumas extensões para fornecer funcionalidades que não estão disponíveis por padrão.`,
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
