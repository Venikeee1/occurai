import { resolve } from 'path';
import { defineConfig } from 'vite';
import StylelintPlugin from '@frsource/vite-plugin-stylelint';

const root = resolve(__dirname, 'src');

export default defineConfig({
  root: 'src',
  base: '/occurai/',
  plugins: [StylelintPlugin()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        companies: resolve(root, 'companies.html'),
      },
    },
  },
});
