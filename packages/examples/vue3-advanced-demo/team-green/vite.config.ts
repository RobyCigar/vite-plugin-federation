import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'team-green',
      filename: 'remoteEntry.js',
      exposes: {
          './Recommendations': './src/components/Recommendations.vue',
      },
      shared: ['vue']
    })
  ],
  base: 'http://127.0.0.1:5003',
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
 }
})
