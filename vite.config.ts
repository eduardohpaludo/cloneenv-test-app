import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite acesso externo ao container
    allowedHosts: true, // ⚠️ Libera qualquer host (ideal para previews dinâmicos)
  },
  plugins: [react()],
})
