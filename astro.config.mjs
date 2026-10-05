import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://freimoser.github.io',
  base: '/freimoser.de',
  build: {
    format: 'directory',
  },
});
