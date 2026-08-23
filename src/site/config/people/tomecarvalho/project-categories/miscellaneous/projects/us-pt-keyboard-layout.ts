import type { Project } from "../../../../../../../types/data/projects/Project";
import terms from "../../../terms";
import { Content as DescriptionEn } from "./us-pt-keyboard-layout.description.en.md";
import { Content as DescriptionPt } from "./us-pt-keyboard-layout.description.pt.md";

const usPtKeyboardLayout = {
  name: { en: "US-PT Keyboard Layout", pt: "Layout de Teclado US-PT" },
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  imageUrl:
    "https://github.com/tomecarvalho/us-pt-keyboard-layout/raw/main/docs/layout.jpg",
  links: [
    {
      icon: "mdi:github",
      href: "https://github.com/tomecarvalho/us-pt-keyboard-layout",
      label: terms.gitHub,
    },
  ],
} as const satisfies Project;

export default usPtKeyboardLayout;
