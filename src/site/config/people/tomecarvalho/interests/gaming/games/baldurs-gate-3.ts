import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const baldursGate3 = {
  text: {
    primary: { en: "Baldur's Gate 3" },
    secondary: { en: "Larian Studios" },
  },
  href: "https://baldursgate3.game/",
  imageUrl:
    "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co670h.jpg",
} as const satisfies InterestCard;

export default baldursGate3;
