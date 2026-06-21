import type { ProjectCategory } from "../../../../../../types/data/projects/ProjectCategory";
import usPtKeyboardLayout from "./projects/us-pt-keyboard-layout";

const miscellaneous = {
  id: "miscellaneous",
  name: { en: "Miscellaneous", pt: "Diversos" },
  icon: "mdi:file-code",
  projects: [usPtKeyboardLayout],
} as const satisfies ProjectCategory;

export default miscellaneous;
