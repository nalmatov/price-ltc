import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    allowedHosts: [
      'ltc-rates.com',
      'price-ltc.com',
      'ltc-prices.com',
    ],
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
