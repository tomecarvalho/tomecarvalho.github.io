import type { Tool } from "../../../../../../../../types/data/tools/Tool";

const vimium = {
  name: { en: "Vimium", pt: "Vimium" },
  type: {
    en: "Keyboard-driven Browsing",
    pt: "Navegação via Teclado",
  },
  href: "https://addons.mozilla.org/firefox/addon/vimium-ff/",
  description: {
    en: "Vimium provides a plethora of Vim-inspired keyboard shortcuts for browsing. This makes it so the user doesn't have to interrupt their keyboard-driven desktop flow every time they want to interact with a webpage. Once you become accustomed to it, typical mouse-driven navigation feels cumbersome, in comparison.",
    pt: "Vimium oferece uma multitude de atalhos de teclado inspirados no Vim para navegação. Isto faz com que o utilizador não tenha de interromper o seu fluxo de trabalho via teclado sempre que quiser interagir com uma página web. Assim que nos habituamos, a navegação tradicional com o rato torna-se penosa, em comparação.",
  },
} as const satisfies Tool;

export default vimium;
