import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { cloudflare } from '@cloudflare/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      Assets: '/src/Assets',
      Components: '/src/Components',
      Contexts: '/src/Contexts',
      Hooks: '/src/Hooks',
      Pages: '/src/Pages',
      Styles: '/src/Styles',
    },
  },
  plugins: [svgr({ svgrOptions: { icon: true } }), react(), cloudflare()],
});
