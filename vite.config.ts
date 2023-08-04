import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
