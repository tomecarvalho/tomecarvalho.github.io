import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const lonesomeDove = {
  text: {
    primary: { en: "Lonesome Dove" },
    secondary: { en: "Larry McMurtry" },
  },
  href: "https://www.goodreads.com/book/show/256008.Lonesome_Dove",
  imageUrl:
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559668037i/256008.jpg",
} as const satisfies InterestCard;

export default lonesomeDove;
