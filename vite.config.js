import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import vercel from 'vite-plugin-vercel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@' now points to the 'src' folder
    },
  },
})
