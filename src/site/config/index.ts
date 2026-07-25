import type { Contact } from "../../types/data/about-me/Contact";
import type { Intro } from "../../types/data/about-me/Intro";
import type { LocalizedMarkdown } from "../../i18n/types";
import type { Interest } from "../../types/data/interests/Interest";
import type { Coursework } from "../../types/data/projects/Coursework";
import type { ProjectCategory } from "../../types/data/projects/ProjectCategory";
import type { ToolCategory } from "../../types/data/tools/ToolCategory";
import tomecarvalho from "./people/tomecarvalho";

/**
 * Enforce type safety for translatable site-config strings.
 * For non-translatable strings, any string is allowed.
 */
export type SiteConfig = {
  site: string;
  handle: string;
  name: string;

  intro: Intro;

  contacts: Contact[];

  coursework: Coursework;
  projectCategories: ProjectCategory[];

  interests: Interest[];

  toolsDescription: LocalizedMarkdown;
  toolCategories: ToolCategory[];
};

/** Site configuration (personal information, URLs, etc.). */
const siteConfig = tomecarvalho;

export default siteConfig;
