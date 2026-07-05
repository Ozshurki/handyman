import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './', // Ensures relative asset paths, making deployment to GitHub Pages (or any subdirectory) work seamlessly.
  plugins: [
    tailwindcss(),
  ],
});
