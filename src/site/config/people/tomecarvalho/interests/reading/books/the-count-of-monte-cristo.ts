import type { InterestCard } from "../../../../../../../types/data/interests/InterestCard";

const theCountOfMonteCristo = {
  text: { tooltip: { en: "The Count of Monte Cristo" } },
  href: "https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo",
  imageUrl:
    "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1724863997i/7126.jpg",
} as const satisfies InterestCard;

export default theCountOfMonteCristo;
