import { defineConfig } from 'astro/config';

// https://astro.build/config
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://runtimee.ee',
  integrations: [robotsTxt(), sitemap()]
});