import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js', // Adjust this to your entry file
      name: 'SpaceMath',
      fileName: (format) => `space-math.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add other entry points if needed
      },
    },
  },
});