import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./vimium.description.en.md";
import { Content as DescriptionPt } from "./vimium.description.pt.md";

const vimium = {
  name: { en: "Vimium", pt: "Vimium" },
  type: {
    en: "Keyboard-driven Browsing",
    pt: "Navegação via Teclado",
  },
  href: "https://addons.mozilla.org/firefox/addon/vimium-ff/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
} as const satisfies Tool;

export default vimium;
