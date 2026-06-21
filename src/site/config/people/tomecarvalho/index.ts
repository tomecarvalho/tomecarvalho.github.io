import type { SiteConfig } from "../..";
import contacts from "./contacts";
import coursework from "./coursework";
import intro from "./intro";
import projectCategories from "./project-categories";

const tomecarvalho = {
  site: "https://tomecarvalho.github.io",
  handle: "tomecarvalho",
  name: "Tomé Carvalho",
  intro,
  contacts,
  coursework,
  projectCategories,
} as const satisfies SiteConfig;

export default tomecarvalho;
