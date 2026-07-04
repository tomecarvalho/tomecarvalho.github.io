import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const noneSoVile = {
  text: {
    primary: { en: "None so Vile" },
    secondary: { en: "Cryptopsy" },
  },
  href: "https://open.spotify.com/album/1YydWUrZdIjcwjkQAGj2r2?si=FA0WAkelQd2gJ3dKg2TJ2Q",
  imageUrl: "https://i.scdn.co/image/ab67616d0000b2732bea56e2feb6d4a4f7c76262",
} as const satisfies InterestCard;

export default noneSoVile;
