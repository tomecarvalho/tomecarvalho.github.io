import type { InterestCard } from "../../../../../../types/data/interests/InterestCard";

const baldursGate3 = {
  text: { tooltip: { en: "Baldur's Gate 3" } },
  href: "https://baldursgate3.game/",
  imageUrl:
    "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co670h.jpg",
} as const satisfies InterestCard;

export default baldursGate3;
