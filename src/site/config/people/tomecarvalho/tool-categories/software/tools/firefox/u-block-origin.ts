import type { Tool } from "../../../../../../../../types/data/tools/Tool";

const uBlockOrigin = {
  name: { en: "uBlock Origin", pt: "uBlock Origin" },
  type: { en: "Ad Blocker", pt: "Bloqueador de Anúncios" },
  href: "https://addons.mozilla.org/firefox/addon/ublock-origin/",
  description: {
    en: "Browsing the modern web without an ad blocker is a truly atrocious experience. uBlock Origin is the state-of-the-art ad blocker, and the first extension any Firefox user ought to install.",
    pt: "Navegar na web moderna sem um bloqueador de anúncios é uma experiência horrível. O uBlock Origin é o estado da arte no que diz respeito a bloqueadores de anúncios, e é a primeira extensão que qualquer utilizador do Firefox deve instalar.",
  },
} as const satisfies Tool;

export default uBlockOrigin;
