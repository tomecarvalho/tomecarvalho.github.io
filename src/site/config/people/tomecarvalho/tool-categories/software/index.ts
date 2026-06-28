import type { ToolCategory } from "../../../../../../types/data/tools/ToolCategory";
import firefox from "./tools/firefox";
import linux from "./tools/linux";
import localSend from "./tools/local-send";

const software = {
  id: "software",
  name: { en: "Software", pt: "Software" },
  icon: "mdi:software",
  tools: [linux, firefox, localSend],
} as const satisfies ToolCategory;

export default software;
