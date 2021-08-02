import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

/**
 * import path from 'path'; 替换 const path = require('path')
 * __dirname 或者引入 path 报错  需要安装 @types/node   npm i @types/node -D
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
      alias:{
          "@": path.resolve(__dirname,"src"),
          "_c": path.resolve(__dirname,"src/components")
      }
  }
})
