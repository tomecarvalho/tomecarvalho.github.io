import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import fedora from "./fedora";
import gnome from "./gnome";

const linux = {
  name: { en: "Linux", pt: "Linux" },
  type: { en: "Operating System", pt: "Sistema Operativo" },
  href: "https://www.linux.org/",
  description: {
    en: "I use Linux for just about everything but gaming (reluctantly and hopefully not for too long…). It's FOSS, it gives me the freedom to set up a productive desktop, and it provides a much better development experience than Windows. Linux doesn't try to jam Copilot into everything or cause your laptop's fans to ramp up in a futile effort at indexing files, nor is it locked into a single vendor's ecosystem.",
    pt: "Utilizo Linux para praticamente tudo, exceto jogos (relutantemente, e espero que não por muito tempo…). É FOSS, dá-me a liberdade de configurar um ambiente de trabalho produtivo, e proporciona uma experiência de desenvolvimento muito melhor do que o Windows. O Linux não tenta forçar Copilot em tudo nem acelera as ventoinhas do portátil ao tentar futilmente indexar ficheiros, nem está preso a um único ecossistema de fornecedores.",
  },
  children: [fedora, gnome],
} as const satisfies Tool;

export default linux;
