import type { ToolCategory } from "../../../../../../types/data/tools/ToolCategory";
import linux from "./tools/linux";
import localSend from "./tools/local-send";

const software = {
  id: "software",
  name: { en: "Software", pt: "Software" },
  icon: "mdi:software",
  tools: [linux, localSend],
} as const satisfies ToolCategory;

export default software;
