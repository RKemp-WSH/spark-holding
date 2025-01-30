import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: true, // Clean the dist directory before each build
    lib: {
      entry: path.resolve(__dirname, 'ts/index.ts'),
      name: 'Spark', // Changed from "SparkToolbox" to "Spark"
      formats: ["es", "umd"], // Specify the formats you want to generate
      fileName: (format) => `spark.${format}.js`, // Changed file name format to match new name
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
      "@": path.resolve(__dirname, "./"), // Alias for the project root
    },
  },
});