import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/weather-app-starter/', // مهم جدًا لـ GitHub Pages
})
