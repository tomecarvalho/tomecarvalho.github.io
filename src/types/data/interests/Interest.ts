import type { Translatable, Translated } from "../../../i18n/types";
import type { InterestCard } from "./InterestCard";

export interface Interest {
  id: string;
  name: Translatable;
  description: Translatable;
  icon: string;
  cards?: InterestCard[];
}

export type TranslatedInterest = Translated<Interest>;
