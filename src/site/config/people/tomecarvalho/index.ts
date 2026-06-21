import type { SiteConfig } from "../..";
import contacts from "./contacts";
import coursework from "./coursework";
import intro from "./intro";
import projects from "./projects";

const tomecarvalho = {
  site: "https://tomecarvalho.github.io",
  handle: "tomecarvalho",
  name: "Tomé Carvalho",
  intro,
  contacts,
  coursework,
  projects,
} as const satisfies SiteConfig;

export default tomecarvalho;
