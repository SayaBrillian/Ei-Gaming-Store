import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  base: './',
  build: {
    outDir: '../docs', // arahkan build keluar ke folder docs
    emptyOutDir: true  // hapus isi folder docs sebelum build baru
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['.gitpod.io'],
    cors: true,
    origin: '*'
  }
});
