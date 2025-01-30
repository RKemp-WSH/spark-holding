import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: true, // Clean the dist directory before each build
    lib: {
      entry: path.resolve(__dirname, 'ts/index.ts'), 
      name: 'Spark', 
      fileName: (format) => `spark.${format}.js`,
    },
    rollupOptions: {
      // Add 'vee-validate' to external
      external: ['vue', 'radix-vue', 'lucide-vue-next', 'vee-validate'], 
      output: {
        globals: {
          vue: 'Vue',
          'radix-vue': 'RadixVue',
          'lucide-vue-next': 'LucideVueNext',
          'vee-validate': 'VeeValidate'
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});