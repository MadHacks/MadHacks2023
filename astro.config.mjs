import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.madhacks.io',
  redirects: {
    "/apply": "https://airtable.com/appJa8ymShCTPpH9I/pag4LEoIQeaesXAfw/form"
  },
  integrations: [sitemap(), tailwind(), compress()]
});