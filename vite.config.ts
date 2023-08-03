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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/scss/helpers/_helpers.scss";
          @import "src/scss/frameworks/frameworks.scss";
          @import "src/scss/plugins/_plugins.scss";
        `,
      },
    },
  },
});
