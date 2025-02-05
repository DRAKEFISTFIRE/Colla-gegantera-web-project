import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// Configuración de Vite con React y Tailwind CSS
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,  // Agrega Tailwind CSS como plugin de PostCSS
      ],
    },
  },
});
