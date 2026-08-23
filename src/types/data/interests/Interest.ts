import type {
  LocalizedMarkdown,
  Translatable,
  Translated,
} from "../../../i18n/types";
import type { InterestCard } from "./InterestCard";
import type { InterestLink } from "./InterestLink";

export interface Interest {
  id: string;
  name: Translatable;
  description: LocalizedMarkdown;
  icon: string;
  links?: InterestLink[];
  cards?: InterestCard[];
}

export type TranslatedInterest = Translated<Interest>;
