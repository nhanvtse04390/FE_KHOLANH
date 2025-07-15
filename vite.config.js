import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,      // ✅ đổi cổng thành 3000
    open: true       // ✅ tự động mở trình duyệt
  },
})
