import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const theDreamMachine = {
  text: {
    primary: {
      en: "The Dream Machine",
    },
    secondary: { en: "M. Mitchell Waldrop" },
  },
  href: "https://www.goodreads.com/book/show/722412.The_Dream_Machine",
  imageUrl:
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1309212000i/722412.jpg",
} as const satisfies InterestCard;

export default theDreamMachine;
