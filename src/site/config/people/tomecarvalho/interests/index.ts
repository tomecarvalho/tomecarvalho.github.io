import type { SiteConfig } from "../../..";
import gaming from "./gaming";
import music from "./music";
import reading from "./reading";
import strengthTraining from "./strength-training";

const interests = [
  gaming,
  strengthTraining,
  reading,
  music,
] as const satisfies SiteConfig["interests"];

export default interests;
