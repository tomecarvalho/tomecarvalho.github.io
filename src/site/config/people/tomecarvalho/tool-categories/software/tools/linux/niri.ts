import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./niri.description.en.md";
import { Content as DescriptionPt } from "./niri.description.pt.md";

const niri = {
  name: { en: "Niri", pt: "Niri" },
  type: { en: "Window Manager", pt: "Gestor de Janelas" },
  href: "https://github.com/niri-wm/niri",
  description: { en: DescriptionEn, pt: DescriptionPt },
} as const satisfies Tool;

export default niri;
