import type { Interest } from "../../../../../../types/data/interests/Interest";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";
import baldursGate3 from "./games/baldurs-gate-3";
import bloodborne from "./games/bloodborne";
import discoElysium from "./games/disco-elysium";
import outerWilds from "./games/outer-wilds";
import theWitcher3 from "./games/the-witcher-3";

const gaming = {
  id: "gaming",
  name: { en: "Gaming", pt: "Videojogos" },
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  icon: "mdi:controller",
  cards: [bloodborne, theWitcher3, outerWilds, discoElysium, baldursGate3],
} as const satisfies Interest;

export default gaming;
