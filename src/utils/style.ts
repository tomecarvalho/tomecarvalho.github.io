import { spacingToPx, type Spacing } from "../style/theme";

/** Converts a style object to a CSS string */
export const toStyle = (style: {
  gap?: Spacing;
  [key: string]: string | number | undefined;
}): string => {
  const { gap: rawGap, ...rest } = style;

  const gap = rawGap ? spacingToPx(rawGap) : undefined;

  return Object.entries({ gap, ...rest })
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
};
