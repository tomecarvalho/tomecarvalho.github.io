import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";

const localSend = {
  name: { en: "LocalSend", pt: "LocalSend" },
  type: {
    en: "Local Device Communication",
    pt: "Comunicação entre Dispositivos Locais",
  },
  href: "https://localsend.org/",
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
} as const satisfies Tool;

export default localSend;
