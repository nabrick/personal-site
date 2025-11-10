// astro.config.mjs

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://github.com/nabrick/personal-site',
  base: 'personal-site/',                            
  output: 'static',

  devToolbar: {enabled: false},

  vite: {
    plugins: [tailwindcss()]
  }
});
