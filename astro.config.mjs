import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Static Site Generation
  adapter: vercel(),
  
  site: 'https://www.creativejobhub.com',
  
  integrations: [
    react(), // Enables React components as islands
    tailwind({
      // Don't apply Tailwind's base styles - we have our own
      applyBaseStyles: false,
    }),
  ],
  
  // Vite configuration for better Sanity support
  vite: {
    ssr: {
      // Don't externalize these packages during SSR
      noExternal: ['@sanity/client', '@portabletext/react', '@sanity/image-url'],
    },
    optimizeDeps: {
      exclude: ['sanity'],
    },
  },
  
  // Configure build output
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Development server configuration
  server: {
    port: 4321,
    host: true,
  },
});
