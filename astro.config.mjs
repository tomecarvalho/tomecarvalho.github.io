// @ts-check
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { i18nConfig } from "./src/i18n/config";
import site from "./src/site/config/people/tomecarvalho/site";

// https://astro.build/config
export default defineConfig({
  i18n: i18nConfig,
  integrations: [icon()],
  site,
});
