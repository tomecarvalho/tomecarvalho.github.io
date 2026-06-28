import type { InterestCard } from "../../../../../../types/data/interests/InterestCard";

const bloodborne = {
  text: { tooltip: { en: "Outer Wilds" } },
  href: "https://www.mobiusdigitalgames.com/outer-wilds.html",
  imageUrl:
    "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co3yjh.jpg",
} as const satisfies InterestCard;

export default bloodborne;
