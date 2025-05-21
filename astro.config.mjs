import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import sitemap from "@astrojs/sitemap";

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kodular.io',
  integrations: [sitemap(), preact()],
  vite: {
    plugins: [yaml()]
  },
  redirects: {
    '/account': 'https://account.kodular.io/',
    '/ide': 'https://ide.kodular.io/',
    '/store': 'https://store.kodular.io/',
  }
});