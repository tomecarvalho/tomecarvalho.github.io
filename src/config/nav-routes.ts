import type { NavRoute } from "../types/NavRoute";

export const NAV_ROUTES: NavRoute[] = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
] as const;
