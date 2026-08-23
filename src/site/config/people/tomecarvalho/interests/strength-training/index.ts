import type { Interest } from "../../../../../../types/data/interests/Interest";

const strengthTraining = {
  id: "strength-training",
  name: { en: "Strength Training", pt: "Musculação" },
  description: {
    en: `I started strength training in 2023, and my only regret is that I didn't start sooner. I was never athletic, and I used to think lifting was very demanding and gyms were intimidating. I eventually signed up for the sake of my health, and then discovered it's based on routine (I'm a creature of habit) and there's a lot to learn about the science behind it – it shares a surprising similarity with grinding stats and optimising builds in video games.
    
My main goal is to efficiently build muscle and, by extension, strength. I pick stable exercises that allow for long-term progressive overload for each trained muscle group, based on its main joint actions. I currently run Upper/Lower/Rest-Repeat for practicality, although I am most fond of Full Body Every Other Day for its high frequency, because it minimises the consequences of diminishing returns per set performed within a session, and is more flexible when life gets in the way.

Oh, and I do cardio out of sheer discipline, I guess. That hasn't got any more fun…`,
    pt: `Comecei a treinar em 2023, e só me arrependo de não ter começado mais cedo. Nunca fui muito dado ao desporto, e pensava que o treino era muito exigente e que os ginásios eram intimidantes. Mal sabia que é baseado em rotina (sou uma pessoa de hábitos) e há muito que aprender sobre a ciência por detrás — partilha uma similaridade surpreendente com stat grinding e otimização de builds em jogos.
    
O meu objetivo principal é ganhar músculo e, por extensão, força, de forma eficiente. Escolho exercícios estáveis que permitem progressão de carga a longo prazo para cada grupo muscular que treino, com base nas suas ações articulares. Atualmente, faço "Upper/Lower/Rest-Repeat" por motivos práticos, mas sou mais fã de "Full Body Every Other Day" graças à sua alta frequência, porque minimiza as consequências do rendimento decrescente por cada série feita numa sessão, e também por ser mais flexível quando a vida acontece.

Ah, e faço cardio por pura disciplina. Não se tornou mais divertido…`,
  },
  icon: "mdi:dumbbell",
  links: [],
  cards: [],
} as const satisfies Interest;

export default strengthTraining;
