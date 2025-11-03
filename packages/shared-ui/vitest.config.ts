import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
