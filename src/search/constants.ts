import type { SearchModeConfig } from "./types";

const SEARCH_MODES_OBJ = {
  search: {
    label: "launcher.modes.search",
    shortcut: "s",
  },
  routes: {
    label: "launcher.modes.routes",
    shortcut: "r",
  },
  contacts: {
    label: "launcher.modes.contacts",
    shortcut: "c",
  },
  language: {
    label: "launcher.modes.language",
    shortcut: "l",
  },
} as const satisfies Record<string, SearchModeConfig>;

export const SEARCH_MODES = Object.values(
  SEARCH_MODES_OBJ,
) satisfies SearchModeConfig[];
