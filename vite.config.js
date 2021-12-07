import { resolve } from 'path';
import { defineConfig } from 'vite';
import StylelintPlugin from '@frsource/vite-plugin-stylelint';
import handlebars from 'vite-plugin-handlebars';
import templateContext from './templateContext';

const nodeEnv = process.env.BASE_ENV ?? 'dev';
const basePath = nodeEnv === 'deployGh' ? '/occurai/' : '/';
const root = resolve(__dirname, 'src');
const handleBarsPlugin = handlebars({
  partialDirectory: resolve(__dirname, 'src/html/partials'),
  context: {
    ...templateContext,
    basePath,
  },
});

export default defineConfig({
  root: 'src',
  base: basePath,
  plugins: [StylelintPlugin(), handleBarsPlugin],
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
