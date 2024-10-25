import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { visualizer } from 'rollup-plugin-visualizer'; // Importa el plugin correcto
import history from 'connect-history-api-fallback';

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
  },
  server: {
    middlewareMode: true,  // activa el modo de middleware
    setup: (app) => {
      app.use(
        history({
          index: '/index.html',  // asegura que todas las rutas vayan a index.html
        })
      );
    }
  },
});
