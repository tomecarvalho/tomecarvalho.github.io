import type { Project } from "../../../../../../../types/data/projects/Project";
import terms from "../../../terms";

const usPtKeyboardLayout = {
  name: { en: "US-PT Keyboard Layout", pt: "Layout de Teclado US-PT" },
  description: {
    en: `A convenient superset of the US keyboard layout created for lusophones.
    
In contrast to alternatives like the "US International" layout, it retains all the original keybindings of the US keyboard layout, expanding upon it exclusively through AltGr keybindings.

Additionally, it includes shortcuts for accented vowels, handy symbols – like the em dash – and shortcuts for 60% keyboards.
    
Includes Linux (XKB) and Windows (MSKLC) versions.`,
    pt: `Um superset conveniente do layout de teclado US criado para lusófonos.
    
Ao contrário de alternativas como o layout "US International", retém todo o mapeamento original do layout US, expandindo-o exclusivamente através de novos mapeamentos com a tecla AltGr.

Em adição, inclui atalhos para vogais acentuadas, símbolos úteis — como o travessão — e atalhos para teclados 60%.
    
Inclui versões para Linux (XKB) e Windows (MSKLC).`,
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
