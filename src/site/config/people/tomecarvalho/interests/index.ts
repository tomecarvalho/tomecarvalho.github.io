import type { SiteConfig } from "../../..";
import gaming from "./gaming";
import strengthTraining from "./strength-training";

const interests = [
  gaming,
  strengthTraining,
] as const satisfies SiteConfig["interests"];

export default interests;
