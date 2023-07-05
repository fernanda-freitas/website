import { defineConfig } from 'vite'
import { resolve } from 'path'

// const environmentType = process.env.NODE_ENV
// const base = environmentType === 'production' ? '/website' : '/'

// https://vitejs.dev/config/
export default defineConfig({
    // base: base,
    base: '/website',
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            construir: resolve(__dirname, 'construir.html'),
          },
        },
      },
})
