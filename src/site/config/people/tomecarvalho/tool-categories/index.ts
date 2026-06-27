import type { SiteConfig } from "../../..";
import software from "./software";

const toolCategories = [
  software,
] as const satisfies SiteConfig["toolCategories"];

export default toolCategories;
