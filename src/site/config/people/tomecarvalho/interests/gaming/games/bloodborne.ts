import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const bloodborne = {
  text: {
    primary: { en: "Bloodborne" },
    secondary: { en: "FromSoftware" },
  },
  href: "https://www.playstation.com/games/bloodborne/",
  imageUrl:
    "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4vui.jpg",
} as const satisfies InterestCard;

export default bloodborne;
