import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
},
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src"),
    }
  }
})


