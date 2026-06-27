import type { Tool } from "../../../../../../../../types/data/tools/Tool";

const fedora = {
  name: { en: "Fedora", pt: "Fedora" },
  type: { en: "Distribution", pt: "Distribuição" },
  href: "https://fedoraproject.org/",
  description: {
    en: `Fedora is my daily driver, mainly because it strikes a great balance between stability and bleeding-edge software. It has many editions and spins with different desktop environments/window managers with fairly vanilla, non-bloated configurations. Being the upstream for RHEL, enterprise software also tends to be readily available.
    
I would love to try NixOS—declarative configuration seems quite superior to imperative post-install steps—but, for now, Fedora is my safe choice.`,
    pt: `Fedora é a minha distro diária, principalmente porque fornece um bom equilíbrio entre estabilidade e software bleeding-edge. Tem bastantes edições e spins com diferentes ambientes de trabalho/gestores de janelas com configurações básicas sem bloat. Sendo upstream do RHEL, software empresarial costuma estar facilmente disponível.
    
Adorava experimentar o NixOS — configuração declarativa parece muito superior a passos imperativos de pós-instalação — mas, por enquanto, Fedora é a minha escolha segura.`,
  },
} as const satisfies Tool;

export default fedora;
