import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://axyria.dev",
  integrations: [svelte(), tailwind(), mdx(), sitemap()],
  output: "server",
  adapter: cloudflare({})
});