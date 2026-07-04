import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const theCosmere = {
  text: {
    primary: { en: "The Cosmere" },
    secondary: { en: "Brandon Sanderson" },
    tertiary: { en: "Collection", pt: "Coleção" },
  },
  href: "https://www.goodreads.com/series/135117-the-cosmere-universe",
  imageUrl:
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1466536615i/28595941.jpg",
} as const satisfies InterestCard;

export default theCosmere;
