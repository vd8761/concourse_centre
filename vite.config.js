import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
    // Allows Vite to accept traffic on a custom local or proxy domain
    allowedHosts: ['string-technologies-pools-takes.trycloudflare.com']
  }
})
