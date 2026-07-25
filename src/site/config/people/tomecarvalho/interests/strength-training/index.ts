import type { Interest } from "../../../../../../types/data/interests/Interest";
import { Content as DescriptionEn } from "./description.en.md";
import { Content as DescriptionPt } from "./description.pt.md";

const strengthTraining = {
  id: "strength-training",
  name: { en: "Strength Training", pt: "Musculação" },
  description: {
    en: DescriptionEn,
    pt: DescriptionPt,
  },
  icon: "mdi:dumbbell",
  links: [],
  cards: [],
} as const satisfies Interest;

export default strengthTraining;
