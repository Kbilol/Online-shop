import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/common', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      
      "@auth": fileURLToPath(new URL("./src/modules/auth", import.meta.url)),
      "@basket": fileURLToPath(new URL("./src/modules/basket", import.meta.url)),
      "@product": fileURLToPath(new URL("./src/modules/product", import.meta.url)),
      "@category": fileURLToPath(new URL("./src/modules/category", import.meta.url)),
      "@user": fileURLToPath(new URL("./src/modules/user", import.meta.url)),
    }
  }
})
