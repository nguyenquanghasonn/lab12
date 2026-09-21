import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'transform-jsx-in-js',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.match(/\.js$/)) {
          return null;
        }
        return await transformWithOxc(code, id, {
          lang: 'jsx',
        });
      },
    },
  ],
});