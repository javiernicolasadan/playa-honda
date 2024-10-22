import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { visualizer } from 'rollup-plugin-visualizer'; // Importa el plugin correcto

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Esto abrirá el análisis del bundle automáticamente después de hacer la build
      filename: './dist/stats.html', // Archivo donde se guardará el reporte
      gzipSize: true, // Opción para mostrar el tamaño gzip del bundle
      brotliSize: true // Opción para mostrar el tamaño brotli del bundle
    })
  ],
  define: {
    'process.env': process.env
  }
});
