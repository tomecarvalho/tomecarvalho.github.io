import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";
import fedora from "./fedora";
import gnome from "./gnome";

const linux = {
  name: { en: "Linux", pt: "Linux" },
  type: { en: "Operating System", pt: "Sistema Operativo" },
  href: "https://www.linux.org/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  children: [fedora, gnome],
} as const satisfies Tool;

export default linux;
