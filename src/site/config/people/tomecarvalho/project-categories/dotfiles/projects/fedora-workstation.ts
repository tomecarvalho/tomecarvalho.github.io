import type { Project } from "../../../../../../../types/data/projects/Project";
import terms from "../../../terms";

const fedoraWorkstation = {
  name: {
    en: "Fedora Workstation - Post-Install",
    pt: "Fedora Workstation - Pós-Instalação",
  },
  description: {
    en: `Configuration and post-install scripts for Fedora Workstation (GNOME Desktop Environment).
    
Includes scripts to install and set up software I use, as well as utilities for config versioning.`,
    pt: `Scripts de configuração e pós-instalação para Fedora Workstation (Ambiente de Trabalho GNOME).
    
Inclui scripts para instalar e configurar software que uso, bem como scripts utilitários para versionamento de configurações.`,
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
