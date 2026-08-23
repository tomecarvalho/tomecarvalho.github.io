import type { Tool } from "../../../../../../../../types/data/tools/Tool";

const localSend = {
  name: { en: "LocalSend", pt: "LocalSend" },
  type: {
    en: "Local Device Communication",
    pt: "Comunicação entre Dispositivos Locais",
  },
  href: "https://localsend.org/",
  description: {
    en: "A cross-platform app that enables secure file and clipboard sharing between devices on a local network. It eliminates the need to rely platform-specific solutions of limited compatibility – simply install LocalSend everywhere and you're good to go.",
    pt: "Uma aplicação multi-plataforma que permite a partilha seguro de ficheiros e da área de transferência entre dispositivos numa rede local. Elimina a necessidade de recorrer a soluções específicas a cada plataforma com compatibilidade limitada — basta instalar o LocalSend em todos os dispositivos e pronto.",
  },
} as const satisfies Tool;

export default localSend;
