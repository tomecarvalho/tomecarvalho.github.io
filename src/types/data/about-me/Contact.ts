export interface Contact {
  /** Unique identifier. */
  id: string;

  /** Iconify icon name. See https://icon-sets.iconify.design/. */
  icon: string;

  /** Label. E.g. "Email", "GitHub", "LinkedIn". */
  label: string;

  /** Value to copy to clipboard. */
  value: string;

  /** URL. */
  href: string;
}
