import type { SiteConfig } from "../..";
import terms from "./terms";

const projects = [
  {
    id: "miscellaneous",
    name: { en: "Miscellaneous", pt: "Diversos" },
    icon: "mdi:file-code",
    projects: [
      {
        name: { en: "US-PT Keyboard Layout", pt: "Layout de Teclado US-PT" },
        description: {
          en: `A convenient superset of the US keyboard layout created for lusophones.
          
In contrast to alternatives like the "US International" layout, it retains all the original keybindings of the US keyboard layout, expanding upon it exclusively through AltGr keybindings.

Additionally, it includes shortcuts for accented vowels, handy symbols—like the em dash—and shortcuts for 60% keyboards.
          
Includes Linux (XKB) and Windows (MSKLC) versions.`,
          pt: `Um superset conveniente do layout de teclado US criado para lusófonos.
          
Ao contrário de alternativas como o layout "US International", retém todo o mapeamento original do layout US, expandindo-o exclusivamente através de novos mapeamentos com a tecla AltGr.

Em adição, inclui atalhos para vogais acentuadas, símbolos úteis — como o travessão — e atalhos para teclados 60%.
          
Inclui versões para Linux (XKB) e Windows (MSKLC).`,
        },
        imageUrl:
          "https://github.com/tomecarvalho/us-pt-keyboard-layout/raw/main/docs/layout.jpg",
        links: [
          {
            icon: "mdi:github",
            href: "https://github.com/tomecarvalho/us-pt-keyboard-layout",
            label: terms.gitHub,
          },
        ],
      },
    ],
  },
  {
    id: "gnome-shell-extensions",
    name: { en: "GNOME Shell Extensions", pt: "Extensões GNOME Shell" },
    icon: "mdi:gnome",
    projects: [
      {
        name: {
          en: "Centre Mouse Shortcuts",
          pt: "Atalhos de Centrar o Rato",
        },
        description: {
          en: `A simple extension that adds two configurable keyboard shortcuts to centre the mouse pointer on the focused window or display, similar to KDE Plasma's built-in shortcuts.
          
Useful when the mouse pointer finds itself inconveniently far from the window you have focused.`,
          pt: `Uma extensão simples que adiciona atalhos de teclado para centrar o ponteiro do rato na janela ou ecrã em foco, semelhante aos atalhos built-in do KDE Plasma.
          
Útil quando o ponteiro do rato se encontra inconvenientemente longe da janela em foco.`,
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
      },
    ],
  },
] as const satisfies SiteConfig["projects"];

export default projects;
