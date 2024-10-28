import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  define: {
    'process.env.VITE_WEATHER_API_URL':JSON.stringify(process.env.VITE_WEATHER_API_URL),
    'process.env.VITE_WEATHER_API_APPID':JSON.stringify(process.env.VITE_WEATHER_API_APPID),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
