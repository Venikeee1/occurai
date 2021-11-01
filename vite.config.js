import { defineConfig } from 'vite';
import StylelintPlugin from '@frsource/vite-plugin-stylelint';

export default defineConfig({
  root: 'src',
  plugins: [StylelintPlugin()],
});
