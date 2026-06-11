export type Spacing = string | number;

/** Theme settings. */
const theme = {
  spacing: {
    /** When providing spacing values as numbers, this multiplier is used to convert them to pixels */
    multiplier: 8,
  },
} as const;

export const spacingToPx = (value: Spacing): string =>
  typeof value === "number" ? `${value * theme.spacing.multiplier}px` : value;
