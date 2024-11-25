// vite.config.js - Simple configuration to serve on port 8080
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    port: 8080,
  }
})