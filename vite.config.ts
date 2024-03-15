import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~/core': '/src/core',
      '~/pages': '/src/pages',
      '~/utils': '/src/core/utils',
      '~/utils/types': '/src/core/utils/types',
    },
  },
});
