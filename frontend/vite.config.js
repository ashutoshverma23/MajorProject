import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://saathi-backend.vercel.app/', // Replace with your backend server URL
        changeOrigin: true,
      },
    },
  }
})
