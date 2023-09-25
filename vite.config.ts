import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";
import { viteSingleFile } from "vite-plugin-singlefile";

import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: './',
  root: './src',

  build: {
    outDir: '../',
    target: 'esnext',
  },

  preview: {
    host: '127.0.0.1',
    port: 3000
  },

  server: {
    host: '0.0.0.0',
    port: 4000
  },

  plugins: [
    commonjs(),
    viteSingleFile(),
    createHtmlPlugin({
        minify: true,
    })
  ],
});
