import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

/**
 * Build estático para GitHub Pages (fariatitan.github.io):
 * - sem o plugin da Base44 (nenhuma dependência de backend em runtime)
 * - base "/" porque é um site de usuário (username.github.io)
 * - entrada própria: static.html -> src/static-main.jsx
 */
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: fileURLToPath(new URL('./static.html', import.meta.url)),
    },
  },
});