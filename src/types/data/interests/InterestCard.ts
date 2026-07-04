import type { Translatable, Translated } from "../../../i18n/types";

export interface InterestCard {
  text: {
    primary?: Translatable;
    secondary?: Translatable;
    tertiary?: Translatable;
    tooltip?: Translatable;
  };
  href?: string;
  imageUrl?: string;
}

export type TranslatedInterestCard = Translated<InterestCard>;
