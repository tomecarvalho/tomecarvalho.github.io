import type { LocaleString } from "../i18n/ui";
import type { Contact } from "../types/Contact";
import type { RecursiveObject } from "../types/RecursiveObject";

/**
 * Enforce type safety for `i18n` key-value pairs.
 * For non-translatable strings, any string is allowed.
 */
type SiteConfig = {
  i18n: RecursiveObject<LocaleString>;
  contacts: Contact[];
} & Record<string, unknown>;

/**
 * Site configuration (personal information, URLs, etc.).
 * Translatable strings under `i18n`.
 */
const siteConfig = {
  handle: "tomecarvalho",
  name: "Tomé Carvalho",
  contacts: [
    {
      id: "email",
      label: "Email",
      value: "tomecarvalho01@gmail.com",
      href: "mailto:tomecarvalho01@gmail.com",
    },
    {
      id: "github",
      label: "GitHub",
      value: "tomecarvalho",
      href: "https://github.com/tomecarvalho",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "tomecarvalho",
      href: "https://www.linkedin.com/in/tomecarvalho",
    },
  ],
  i18n: {
    role: "terms.softwareDeveloper",
    location: "terms.portugal",
    aboutMeDescription: "aboutMe.description.tomecarvalho",
  },
} as const satisfies SiteConfig;

export default siteConfig;
