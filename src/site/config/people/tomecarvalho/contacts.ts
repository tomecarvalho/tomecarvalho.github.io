import type { SiteConfig } from "../..";
import terms from "./terms";

const contacts = [
  {
    id: "email",
    icon: "mdi:email",
    label: "Email",
    value: "tomecarvalho01@gmail.com",
    href: "mailto:tomecarvalho01@gmail.com",
  },
  {
    id: "github",
    icon: "mdi:github",
    label: terms.gitHub.en,
    value: "",
    href: "https://github.com/tomecarvalho",
  },
  {
    id: "linkedin",
    icon: "mdi:linkedin",
    label: "LinkedIn",
    value: "",
    href: "https://www.linkedin.com/in/tomecarvalho",
  },
] as const satisfies SiteConfig["contacts"];

export default contacts;
