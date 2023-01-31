import { defineConfig } from "astro/config";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://runtimee.ee",
  integrations: [robotsTxt(), svelte()],
  output: "server",
  adapter: cloudflare(),
});
