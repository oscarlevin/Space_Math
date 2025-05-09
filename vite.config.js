import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/SpaceMath.js', // Adjust this to your entry file
      name: 'SpaceMath',
      fileName: (format) => `space-math.${format}.js`,
    },
  },
});