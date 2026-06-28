import type { InterestCard } from "../../../../../../types/data/interests/InterestCard";

const discoElysium = {
  text: { tooltip: { en: "Disco Elysium" } },
  href: "https://discoelysium.com/",
  imageUrl:
    "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2ve1.jpg",
} as const satisfies InterestCard;

export default discoElysium;
