import type { InterestCard } from "../../../../../../types/data/interests/InterestCard";

const witcher3 = {
  text: { tooltip: { en: "The Witcher 3: Wild Hunt" } },
  href: "https://www.thewitcher.com/mt/en/witcher3",
  imageUrl:
    "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5uct.jpg",
} as const satisfies InterestCard;

export default witcher3;
