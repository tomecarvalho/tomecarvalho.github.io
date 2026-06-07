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

- Located ar [src/i18n](src/i18n/).
- Strings that depend on personal details are not internationalised directly. For instance, we don't define `"terms.role": "Software Developer"`, but instead `"terms.softwareDeveloper": "Software Developer"`. Additionally, personal paragraphs like `"aboutMe.description"` are suffixed with the person's handle—e.g. `"aboutMe.description.tomecarvalho"`. This allows updating or replacing the `siteConfig` object without needing to update other files, except for adding translations for new terms or sentences.
