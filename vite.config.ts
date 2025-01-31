// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: true, // Clean the dist directory before each build
    lib: {
      entry: path.resolve(__dirname, 'ts/index.ts'),
      name: 'Spark', // Set the global variable name for your library
      formats: ["es", "umd"], // Specify the formats you want to generate
      fileName: (format) => `spark.${format}.js`, // Use the correct name here
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['vue', 'radix-vue', 'lucide-vue-next', 'vee-validate', '@vueuse/core'],
      output: {
        globals: {
          vue: 'Vue',
          'radix-vue': 'RadixVue',
          'lucide-vue-next': 'LucideVueNext',
          'vee-validate': 'VeeValidate',
          '@vueuse/core': 'VueUseCore',
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