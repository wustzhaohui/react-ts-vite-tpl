import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    /*配置别名 */
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 2024
  },
  css: {
    preprocessorOptions: {
        less: {
            modifyVars: {
                hack: `true; @import (reference) "${path.resolve('src/assets/css/common.less')}";`,
            },
        },
    },
}
});
