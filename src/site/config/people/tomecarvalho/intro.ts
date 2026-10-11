import type { SiteConfig } from "../..";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";

const intro = {
  role: { en: "Software Developer", pt: "Desenvolvedor de Software" },
  location: { en: "Portugal", pt: "Portugal" },
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
} as const satisfies SiteConfig["intro"];

export default intro;
