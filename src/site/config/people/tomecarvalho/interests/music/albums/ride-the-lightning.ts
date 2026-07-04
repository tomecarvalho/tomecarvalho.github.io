import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const rideTheLightning = {
  text: {
    primary: { en: "Ride the Lightning" },
    secondary: { en: "Metallica" },
  },
  href: "https://open.spotify.com/album/05DePtm7oQMdL3Uzw2Jmsc",
  imageUrl: "https://i.scdn.co/image/ab67616d0000b2739ad3e9959f48d513886b8933",
} as const satisfies InterestCard;

export default rideTheLightning;
