import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const cosmere = {
  text: { tooltip: { en: "The Cosmere (Collection)" } },
  href: "https://www.goodreads.com/series/135117-the-cosmere-universe",
  imageUrl:
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1466536615i/28595941.jpg",
} as const satisfies InterestCard;

export default cosmere;
