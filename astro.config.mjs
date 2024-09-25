// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";
import { imageService } from '@unpic/astro/service';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://etherald.dev",
  integrations: [mdx(), sitemap()],
  image: {
    service: imageService(),
  },
});