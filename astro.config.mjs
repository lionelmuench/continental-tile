// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import { locations } from './src/data/locations.ts';

const redirects = {};
locations.forEach(loc => {
  redirects[`/areas/${loc.slug}`] = `/areas/${loc.stateSlug}/${loc.countySlug}/${loc.citySlug}`;
});

// https://astro.build/config
export default defineConfig({
  site: 'https://continentaltileinc.com',
  redirects: redirects,
  image: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'media.istockphoto.com', 'abfloors.com']
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), partytown()]
});