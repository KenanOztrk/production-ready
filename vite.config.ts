import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import UnoCSS from 'unocss/vite'


export default defineConfig({
  plugins: [
    UnoCSS(),
        tanstackRouter({ target: 'react', autoCodeSplitting: true }),

    react()],
})
