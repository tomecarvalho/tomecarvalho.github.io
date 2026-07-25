import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";
import sponsorBlock from "./sponsor-block";
import uBlockOrigin from "./u-block-origin";
import vimium from "./vimium";

const firefox = {
  name: { en: "Firefox", pt: "Firefox" },
  type: {
    en: "Web Browser",
    pt: "Navegador Web",
  },
  href: "https://www.firefox.com/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  children: [uBlockOrigin, sponsorBlock, vimium],
} as const satisfies Tool;

export default firefox;
