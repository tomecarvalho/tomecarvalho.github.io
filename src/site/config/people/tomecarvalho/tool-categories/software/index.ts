import type { ToolCategory } from "../../../../../../types/data/tools/ToolCategory";
import linux from "./tools/linux";

const software = {
  id: "software",
  name: { en: "Software", pt: "Software" },
  icon: "mdi:software",
  tools: [linux],
} as const satisfies ToolCategory;

export default software;
