import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~/api': '/src/api',
      '~/assets': '/src/assets',
      '~/components': '/src/components',
      '~/mappers': '/src/mappers',
      '~/pages': '/src/pages',
      '~/modules': '/src/modules',
      '~/routes': '/src/routes',
      '~/services': '/src/services',
      '~/stores': '/src/stores',
      '~/utils': '/src/utils',
      '~/utils/types': '/src/utils/types',
    },
  },
});
