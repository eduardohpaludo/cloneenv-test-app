import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['all'], // Libera geral
  },
  plugins: [react()],
})
