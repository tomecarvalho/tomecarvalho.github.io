import type { ToolCategory } from "../../../../../../types/data/tools/ToolCategory";
import ibmPlex from "./ibm-plex";
import kanagawa from "./kanagawa";

const aesthetics = {
  id: "aesthetics",
  name: { en: "Aesthetics", pt: "Estética" },
  icon: "mdi:palette",
  tools: [kanagawa, ibmPlex],
} as const satisfies ToolCategory;

export default aesthetics;
