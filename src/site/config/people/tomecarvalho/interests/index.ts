import type { SiteConfig } from "../../..";
import gaming from "./gaming";

const interests = [gaming] as const satisfies SiteConfig["interests"];

export default interests;
