import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const projectHailMary = {
  text: {
    primary: { en: "Project Hail Mary", pt: "Projeto Hail Mary" },
    secondary: { en: "Andy Weir" },
  },
  href: "https://www.goodreads.com/book/show/54493401-project-hail-mary",
  imageUrl:
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764703833i/54493401.jpg",
} as const satisfies InterestCard;

export default projectHailMary;
