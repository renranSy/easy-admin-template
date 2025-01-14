import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import * as path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  base: '/easy-admin-template/',
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  },
  server: {
    port: 3008,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1534',
        changeOrigin: true
      }
    }
    // proxy: {
    //   "/api": {
    //     target: "https://624659e7e3450d61b0fd6ba2.mockapi.io/api/v1",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev-api/, ""),
    //   },
    // },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnable: true,
        additionalData: `@import "./src/assets/style/var.less";`
      }
    }
  }
})
