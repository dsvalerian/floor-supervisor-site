import {defineCliConfig} from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
  typegen: {
    path: "'./schemaTypes/**/*.{ts,tsx,js,jsx}'", // glob pattern to your typescript files
    schema: "./generated-schema.json", // path to your schema file, generated with 'sanity schema extract' command
    generates: "../web/src/types/sanity.types.ts", // path to the output file for generated type definitions
  },
});
