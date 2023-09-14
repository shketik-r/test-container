
import { defineConfig } from 'astro/config';
import CONFIG from './src/site/config';

// https://astro.build/config
export default defineConfig({
  site: CONFIG.site,
  base: CONFIG.base,
});
