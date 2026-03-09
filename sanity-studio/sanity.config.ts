import {colorInput} from "@sanity/color-input";
import {visionTool} from "@sanity/vision";
import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {schemaTypes} from "./schemaTypes";
import {deployTool} from "./tools/deployTool";

export default defineConfig({
  name: "default",
  title: "Floor Supervisor Studio",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "",

  plugins: [structureTool(), visionTool(), colorInput()],

  tools: (prev) => [...prev, deployTool],

  schema: {
    types: schemaTypes,
  },
});
