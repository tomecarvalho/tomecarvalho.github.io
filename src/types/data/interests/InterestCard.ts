import type { Translatable } from "../../../i18n/types";

export interface InterestCard {
  name: Translatable;
  description: Translatable;
  href: string;
  imageUrl: string;
}
