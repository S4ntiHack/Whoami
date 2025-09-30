import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import astroIcon from "astro-icon";

export default defineConfig({
  site: "https://efeele.dev",
  integrations: [
    preact(),
    astroIcon({
      include: ['local'],
      collections: {
        local: './src/icons'
      }
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});
