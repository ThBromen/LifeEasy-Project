import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'lib': path.resolve(__dirname, 'src/lib'),
    },
  },
  build: {
    outDir: 'dist', // Vercel expects this as the output
  },
});
