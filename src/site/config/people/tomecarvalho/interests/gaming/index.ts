import type { Interest } from "../../../../../../types/data/interests/Interest";

const gaming = {
  id: "gaming",
  name: { en: "Gaming", pt: "Jogos" },
  description: {
    en: `Gaming is my oldest passion—I've been playing since my childhood, and I don't expect to ever stop.

I've spent a lot of time in immersive single-player worlds and narratives, sweaty matches of competitive multiplayer, and messing around in sandbox titles. Nowadays, it's the first kind that makes up the bulk of my gaming time—the interactivity found in games remains ever so captivating, even though it's not the cheapest hobby.`,
    pt: `O gaming é a minha paixão mais antiga — jogo desde a minha infância, e não espero parar
    
Já passei muito tempo nos mundos e narrativas imersivas de jogos single-player, partidas intensas de multiplayer competitivo, e a brincar em jogos sandbox. Hoje, é o primeiro tipo que constitui a maior parte do meu tempo de jogo — a interatividade encontrada nos jogos mantém-se fascinante como sempre, mesmo que não seja o passatempo mais barato.`,
  },
  icon: "mdi:gamepad",
  cards: [
    {
      name: { en: "Bloodborne", pt: "Bloodborne" },
      description: { en: "foo", pt: "bar" },
      href: "https://www.playstation.com/games/bloodborne/",
      imageUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/cob99l.jpg",
    },
  ],
} as const satisfies Interest;

export default gaming;
