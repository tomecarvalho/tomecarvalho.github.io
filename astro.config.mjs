// @ts-check
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { i18nConfig } from "./src/i18n/config";

// https://astro.build/config
export default defineConfig({
  i18n: i18nConfig,
  integrations: [icon()],
});
