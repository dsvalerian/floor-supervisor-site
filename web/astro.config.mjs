// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import sanity from "@sanity/astro";

import react from "@astrojs/react";

const env = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: env.PUBLIC_SANITY_PROJECT_ID || "d40vvytu",
			dataset: env.PUBLIC_SANITY_DATASET || "dev",
			useCdn: false,
		}),
		react(),
	],
});
