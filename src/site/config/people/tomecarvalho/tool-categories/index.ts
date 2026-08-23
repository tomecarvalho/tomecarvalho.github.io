import type { SiteConfig } from "../../..";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";
import software from "./software";

export const toolsDescription = {
  en: DescriptionEn,
  pt: DescriptionPt,
} as const satisfies SiteConfig["toolsDescription"];

const toolCategories = [
  software,
] as const satisfies SiteConfig["toolCategories"];

export default toolCategories;
