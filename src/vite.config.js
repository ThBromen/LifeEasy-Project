import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'lib': path.resolve(__dirname, 'src/lib') // Add this alias for the `lib` folder
    },
  },
});
