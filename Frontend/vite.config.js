import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
    tailwindcss()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
