import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./fedora.description.en.md";
import { Content as DescriptionPt } from "./fedora.description.pt.md";

const fedora = {
  name: { en: "Fedora", pt: "Fedora" },
  type: { en: "Distribution", pt: "Distribuição" },
  href: "https://fedoraproject.org/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
} as const satisfies Tool;

export default fedora;
