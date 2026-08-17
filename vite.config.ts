import { defineConfig } from 'vite';
import vitePluginChecker from 'vite-plugin-checker';
import oxlintPlugin from 'vite-plugin-oxlint';

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
  plugins: [
    oxlintPlugin({ path: 'src' }),
    vitePluginChecker({ vueTsc: { tsconfigPath: './tsconfig.json', buildMode: true } }),
  ],
});
