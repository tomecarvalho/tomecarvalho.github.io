import type { Tool } from "../../../../../../../../types/data/tools/Tool";
import sponsorBlock from "./sponsor-block";
import uBlockOrigin from "./u-block-origin";
import vimium from "./vimium";

const firefox = {
  name: { en: "Firefox", pt: "Firefox" },
  type: {
    en: "Web Browser",
    pt: "Navegador Web",
  },
  href: "https://www.firefox.com/",
  description: {
    en: "It's FOSS, it supports extensions on Android, and Multi-Account Containers is a killer feature, especially for web development. I keep Brave/Brave Origin around in case I need a Chromium browser for something.",
    pt: "É FOSS, suporta extensões no Android, e Multi-Account Containers é uma funcionalidade imbatível, especialmente para desenvolvimento web. Mantenho o Brave/Brave Origin à mão em caso de necessidade de um navegador Chromium.",
  },
  children: [uBlockOrigin, sponsorBlock, vimium],
} as const satisfies Tool;

export default firefox;
