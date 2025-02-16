import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Ezitech-app/", // Corrected the base URL

  plugins: [react()],
})
