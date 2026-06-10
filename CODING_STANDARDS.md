# Coding Standards

## Components

- Located at [src/components](src/components/).
- Components never import site configuration, such as [config.ts](src/site/config.ts), directly. Instead, they receive variables derived from the configuration from the [pages](src/pages/).
- Components are agnostic to internationalisation. They always receive whatever text they need already translated.
- When a component receives a prop intended to be passed as is to a child component, it should type it using said child component's props. This improves DX by immediately propagating eventual type changes from the child component's props to the parent's.

## Layouts

- Located at [src/layouts](src/layouts/).
- Given the project's simplicity, only [a single layout](src/layouts/Layout.astro) exists.
- Unlike components, they can access [route configuration](src/routes/nav-routes.ts) and use the i18n `t` function. This avoids repetition in every page, given that all use the layout.

## Pages

- Located at [src/pages](src/pages/).
- The page file itself should contain minimal HTML, handling only configuration and internationalisation.

## Internationalisation

- Located at [src/i18n](src/i18n/).
- [ui.ts](src/i18n/ui.ts) holds only shared UI strings—navigation labels, generic terms, and anything else that does not depend on [site config](src/site/config.ts).
- Site-config-specific copy lives in [config.ts](src/site/config.ts). Translatable fields accept either a shared UI key (`LocaleString`) or an inline translations object (`Translations`) with at least English (`en`) and, optionally, other configured locales (currently Portuguese, `pt`). Pages resolve both forms through the i18n `t` function from [utils.ts](src/i18n/utils.ts).
- This keeps personal details, coursework, and other site-specific content self-contained in site config, without polluting the shared UI catalogue or requiring handle-specific keys.
