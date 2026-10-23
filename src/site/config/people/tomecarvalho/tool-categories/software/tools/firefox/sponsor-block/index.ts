import type { Tool } from "../../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";

const sponsorBlock = {
  name: { en: "SponsorBlock", pt: "SponsorBlock" },
  type: {
    en: "YouTube Sponsor Skipper",
    pt: "Ignorador de Patrocínios para YouTube",
  },
  href: "https://addons.mozilla.org/firefox/addon/sponsorblock/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
} as const satisfies Tool;

export default sponsorBlock;
