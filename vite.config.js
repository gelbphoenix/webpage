import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    copyPublicDir: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
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
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: ['public/**/*', '!public/picture.webp'],
          dest: '.',
        },
      ],
    }),
  ],
});
