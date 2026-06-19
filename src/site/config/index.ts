import type { Translatable } from "../../i18n/types";
import type { Contact } from "../../types/data/about-me/Contact";
import type { Coursework } from "../../types/data/projects/Coursework";
import type { ProjectCategory } from "../../types/data/projects/ProjectCategory";
import type { RecursiveObject } from "../../types/util/RecursiveObject";
import tomecarvalho from "./people/tomecarvalho";

/**
 * Enforce type safety for translatable site-config strings.
 * For non-translatable strings, any string is allowed.
 */
export type SiteConfig = {
  i18n: RecursiveObject<Translatable>;
  contacts: Contact[];
  coursework: Coursework;
  projects: ProjectCategory[];
} & Record<string, unknown>;

/** Site configuration (personal information, URLs, etc.). */
const siteConfig = tomecarvalho;

export default siteConfig;
