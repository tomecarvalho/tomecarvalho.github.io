import type { Tool } from "../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./ibm-plex.description.en.md";
import { Content as DescriptionPt } from "./ibm-plex.description.pt.md";

const ibmPlex = {
  name: { en: "IBM Plex", pt: "IBM Plex" },
  type: { en: "Font Family", pt: "Tipo de Letra" },
  description: { en: DescriptionEn, pt: DescriptionPt },
  href: "https://www.ibm.com/plex/",
} as const satisfies Tool;

export default ibmPlex;
