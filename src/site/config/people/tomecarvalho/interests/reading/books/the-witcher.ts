import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const theWitcher = {
  text: {
    tooltip: { en: "The Witcher (Series)" },
  },
  href: "https://www.goodreads.com/series/40911-the-witcher",
  imageUrl:
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1657520414i/60834127.jpg",
} as const satisfies InterestCard;

export default theWitcher;
