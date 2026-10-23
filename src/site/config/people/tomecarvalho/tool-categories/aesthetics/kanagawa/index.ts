import type { Tool } from "../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";

const kanagawa = {
  name: { en: "Kanagawa", pt: "Kanagawa" },
  type: { en: "Colour Scheme", pt: "Esquema de Cores" },
  description: { en: DescriptionEn, pt: DescriptionPt },
  href: "https://github.com/rebelot/kanagawa.nvim",
} as const satisfies Tool;

export default kanagawa;
