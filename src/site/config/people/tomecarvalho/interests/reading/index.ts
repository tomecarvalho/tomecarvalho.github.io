import type { Interest } from "../../../../../../types/data/interests/Interest";
import cosmere from "./books/cosmere";
import lonesomeDove from "./books/lonesome-dove";
import theCountOfMonteCristo from "./books/the-count-of-monte-cristo";
import theDreamMachine from "./books/the-dream-machine";
import theWitcher from "./books/the-witcher";

const reading = {
  id: "reading",
  name: { en: "Reading", pt: "Leitura" },
  description: {
    en: `I already liked reading as a kid, but it's a hobby I only rekindled a few years ago when I got an e-reader, thanks to its convenience. Now it's a mandatory part of routine. Also, it has done wonders for my sleep schedule: nothing knocks me out faster than reading in bed.`,
    pt: `Já gostava de ler em pequeno, mas é um hobby que só retomei alguns anos atrás quando comprei um e-reader, graças à sua conveniência. Agora é uma parte obrigatória da rotina. Também tem feito maravilhas para o meu sono: nada me adormece mais rápido do que ler na cama.`,
  },
  icon: "mdi:book-open-variant",
  links: [
    {
      label: { en: "Goodreads" },
      icon: "mdi:link",
      href: " https://www.goodreads.com/tomecarvalho ",
    },
  ],
  cards: [
    cosmere,
    theWitcher,
    theCountOfMonteCristo,
    lonesomeDove,
    theDreamMachine,
  ],
} as const satisfies Interest;

export default reading;
