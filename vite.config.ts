import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['all'], // Libera geral
  },
  server: {
    host: '0.0.0.0', // Necessário para funcionar no Docker
    allowedHosts: [
      'all', // Permite qualquer host (Ideal para seu SaaS dinâmico)
      // OU algo específico como '.mimesis.run'
    ],
  },
  plugins: [react()],
})
