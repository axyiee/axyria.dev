import { defineConfig } from "astro/config";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://runtimee.ee",
  integrations: [robotsTxt(), svelte()],
  output: "server",
  adapter: vercel()
});