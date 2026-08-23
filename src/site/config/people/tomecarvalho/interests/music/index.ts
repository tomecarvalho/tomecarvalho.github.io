import type { Interest } from "../../../../../../types/data/interests/Interest";
import atFirstLight from "./albums/at-first-light";
import noneSoVile from "./albums/none-so-vile";
import rideTheLightning from "./albums/ride-the-lightning";
import symbolic from "./albums/symbolic";
import theUltimateAbhorrence from "./albums/the-ultimate-abhorrence";

const music = {
  id: "music",
  name: { en: "Music", pt: "Música" },
  description: {
    en: `Most of my listening time is Metal – Death Metal, in particular, is my favourite subgenre, and Death my favourite band. Other than that, I predictably like Rock and video game soundtracks.`,
    pt: `A maioria do tempo, ouço Metal — Death Metal, em particular, é o meu subgénero favorito, e Death a minha banda favorita. Além disso, previsivelmente, gosto de Rock e trilhas sonoras de videojogos.`,
  },
  icon: "mdi:music",
  links: [
    {
      label: { en: "Spotify" },
      icon: "mdi:spotify",
      href: "https://open.spotify.com/user/588h3hbic6p3o9yyusq8zt1pe?si=44c0791e66a84cfe",
    },
    {
      label: { en: "last.fm" },
      icon: "mdi:lastfm",
      href: "https://www.last.fm/user/tomecarvalho",
    },
  ],
  cards: [
    symbolic,
    noneSoVile,
    theUltimateAbhorrence,
    atFirstLight,
    rideTheLightning,
  ],
} as const satisfies Interest;

export default music;
