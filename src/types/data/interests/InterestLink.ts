import type { Translatable, Translated } from "../../../i18n/types";

export interface InterestLink {
  icon?: string;
  href?: string;
  label?: Translatable;
}

export type TranslatedInterestLink = Translated<InterestLink>;
