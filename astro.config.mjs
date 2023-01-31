import { defineConfig } from "astro/config";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://runtimee.ee",
  integrations: [robotsTxt(), sitemap(), svelte()],
  output: "server",
  adapter: cloudflare(),
});
