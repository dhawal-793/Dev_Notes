import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: [
        { find: /^@src/, replacement: '/src' },
        // Add more alias mappings as needed
      ]
    }
  };
});