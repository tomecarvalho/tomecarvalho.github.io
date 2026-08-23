import type { Interest } from "../../../../../../types/data/interests/Interest";
import lonesomeDove from "./books/lonesome-dove";
import projectHailMary from "./books/project-hail-mary";
import theCosmere from "./books/the-cosmere";
import theCountOfMonteCristo from "./books/the-count-of-monte-cristo";
import theDreamMachine from "./books/the-dream-machine";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";

const reading = {
  id: "reading",
  name: { en: "Reading", pt: "Leitura" },
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  icon: "mdi:book-open-variant",
  links: [
    {
      label: { en: "Goodreads" },
      icon: "mdi:goodreads",
      href: " https://www.goodreads.com/tomecarvalho ",
    },
  ],
  cards: [
    theCosmere,
    projectHailMary,
    theCountOfMonteCristo,
    lonesomeDove,
    theDreamMachine,
  ],
} as const satisfies Interest;

export default reading;
