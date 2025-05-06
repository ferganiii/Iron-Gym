import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes your project accessible from other devices on the same network
    port: 5173,
    cors: true, // Allow cross-origin requests
  },
});
