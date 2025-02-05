import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.madhacks.io',
  redirects: {
    "/apply": "https://airtable.com/appJa8ymShCTPpH9I/pag4LEoIQeaesXAfw/form",
    "/walkin": "https://airtable.com/appJa8ymShCTPpH9I/paghpcEx85qF2eOAr/form",
    "/devpost": "https://madhacks.devpost.com",
    "/project": "https://airtable.com/appJa8ymShCTPpH9I/pag0C9Q3PGBC9qArU/form"
    "/organizer-interest": "https://airtable.com/appl182mk027OC698/pag8XoUukjguwopgE/form"
  },
  integrations: [sitemap(), tailwind(), compress()]
});
