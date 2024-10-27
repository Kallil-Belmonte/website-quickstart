import { defineConfig } from 'vite';
import biome from 'vite-plugin-biome';
import deno from '@deno/vite-plugin';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [biome(), deno()],
});
