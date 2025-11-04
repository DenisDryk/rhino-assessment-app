import path from 'node:path';

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
    },
    exclude: [...configDefaults.exclude, 'dist', 'build', 'node_modules'],
  },
});
