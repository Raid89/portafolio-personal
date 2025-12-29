// @ts-check
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],
  adapter: vercel({})
});