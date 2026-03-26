// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://continentaltileinc.com',
  image: {
    domains: ['images.unsplash.com']
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), partytown()]
});