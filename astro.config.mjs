import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
                            // NÃO deve ter a linha 'base: "/lexlab"' se você quer usar localhost:4321/
});
