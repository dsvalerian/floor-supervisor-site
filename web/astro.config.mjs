// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
	integrations: [],
});
