import type { Tool } from "../../../../../../../../types/data/tools/Tool";

const sponsorBlock = {
  name: { en: "SponsorBlock", pt: "SponsorBlock" },
  type: {
    en: "YouTube Sponsor Skipper",
    pt: "Ignorador de Patrocínios para YouTube",
  },
  href: "https://addons.mozilla.org/firefox/addon/sponsorblock/",
  description: {
    en: "SponsorBlock automatically skips sponsorship segments in YouTube videos. We've all grown tired of hearing about that one VPN, right?",
    pt: "O SponsorBlock ignora automaticamente os segmentos de patrocínio em vídeos do YouTube. Já todos nos cansamos de ouvir falar daquele VPN, não é?",
  },
} as const satisfies Tool;

export default sponsorBlock;
