import type { SiteConfig } from "../..";
import contacts from "./contacts";
import coursework from "./coursework";
import interests from "./interests";
import intro from "./intro";
import projectCategories from "./project-categories";
import site from "./site";
import toolCategories, { toolsDescription } from "./tool-categories";

const tomecarvalho = {
  handle: "tomecarvalho",
  name: "Tomé Carvalho",
  contacts,
  coursework,
  interests,
  intro,
  projectCategories,
  site,
  toolsDescription,
  toolCategories,
} as const satisfies SiteConfig;

export default tomecarvalho;
