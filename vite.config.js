
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import purgecss from '@fullhuman/postcss-purgecss';

dotenv.config()

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./index.html', './src/**/*.jsx'],  // Archivos que revisará
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [] // Extrae las clases usadas
        })
      ]
    }
  }
});
