import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  base: './',
  root: './src',
//   publicDir: '../public',

  build: {
    outDir: '../dist',
    target: 'esnext',
  },

  preview: {
    host: '127.0.0.1',
    port: 3000
  },

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  plugins: [
    commonjs(),
    viteSingleFile(),
  ],
});
