import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true
  },
  publicDir: 'public',
  allowedHosts: [
    'localhost',
    'ltc-rates.com',
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
