import { spacingToPx, type Spacing } from "../style/theme";
import { camelToKebabCase } from "./string";

/** Converts a style object to a CSS string */
export const toStyle = (
  style: {
    gap?: Spacing;
  } & Omit<Partial<CSSStyleDeclaration>, "gap">,
): string => {
  const { gap: rawGap, ...rest } = style;

  const gap = rawGap ? spacingToPx(rawGap) : undefined;

  return Object.entries({ gap, ...rest })
    .filter(([, value]) => value)
    .map(([key, value]) => `${camelToKebabCase(key)}: ${value};`)
    .join(" ");
};
