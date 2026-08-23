import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./u-block-origin.description.en.md";
import { Content as DescriptionPt } from "./u-block-origin.description.pt.md";

const uBlockOrigin = {
  name: { en: "uBlock Origin", pt: "uBlock Origin" },
  type: { en: "Ad Blocker", pt: "Bloqueador de Anúncios" },
  href: "https://addons.mozilla.org/firefox/addon/ublock-origin/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
} as const satisfies Tool;

export default uBlockOrigin;
