import type { Interest } from "../../../../../../types/data/interests/Interest";
import baldursGate3 from "./games/baldurs-gate-3";
import bloodborne from "./games/bloodborne";
import discoElysium from "./games/disco-elysium";
import outerWilds from "./games/outer-wilds";
import theWitcher3 from "./games/the-witcher-3";

const gaming = {
  id: "gaming",
  name: { en: "Gaming", pt: "Videojogos" },
  description: {
    en: `Gaming is my oldest passion—I've been playing since my childhood, and I don't expect to ever stop.

I've spent a lot of time in immersive single-player worlds and narratives, sweaty matches of competitive multiplayer, and messing around in sandbox titles. Nowadays, it's the first kind that makes up the bulk of my gaming time—the interactivity found in games remains ever so captivating, even though it's not the cheapest hobby.

Check out my favourite games below, or visit my Backloggd profile to snoop on what I've been playing.`,
    pt: `O gaming é a minha paixão mais antiga — jogo desde a minha infância, e não espero parar
    
Já passei muito tempo nos mundos e narrativas imersivas de jogos single-player, partidas intensas de multiplayer competitivo, e a brincar em jogos sandbox. Hoje, é o primeiro tipo que constitui a maior parte do meu tempo de jogo — a interatividade encontrada nos jogos mantém-se fascinante como sempre, mesmo que não seja o passatempo mais barato.

Veja os meus jogos favoritos abaixo, ou visite o meu perfil no Backloggd para coscuvilhar o que tenho estado a jogar.`,
  },
  icon: "mdi:controller",
  links: [
    {
      label: { en: "Backloggd" },
      icon: "mdi:link",
      href: "https://backloggd.com/u/tomecarvalho/",
    },
  ],
  cards: [bloodborne, theWitcher3, outerWilds, discoElysium, baldursGate3],
} as const satisfies Interest;

export default gaming;
