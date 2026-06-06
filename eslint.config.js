import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettier,
  { ignores: ["dist/", ".astro/", "node_modules/"] },
);
