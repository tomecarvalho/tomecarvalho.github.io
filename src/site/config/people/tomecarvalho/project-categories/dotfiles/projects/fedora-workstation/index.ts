import type { Project } from "../../../../../../../../types/data/projects/Project";
import terms from "../../../../terms";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";

const fedoraWorkstation = {
  name: {
    en: "Fedora Workstation - Post-Install",
    pt: "Fedora Workstation - Pós-Instalação",
  },
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  imageUrl:
    "https://fedoraproject.org/assets/images/fedora-workstation-logo.png",
  links: [
    {
      icon: "mdi:github",
      href: "https://github.com/tomecarvalho/fedora-workstation",
      label: terms.gitHub,
    },
  ],
} as const satisfies Project;

export default fedoraWorkstation;
