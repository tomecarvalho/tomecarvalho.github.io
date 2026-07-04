import type { SiteConfig } from "../../..";
import gaming from "./gaming";
import reading from "./reading";
import strengthTraining from "./strength-training";

const interests = [
  gaming,
  strengthTraining,
  reading,
] as const satisfies SiteConfig["interests"];

export default interests;
