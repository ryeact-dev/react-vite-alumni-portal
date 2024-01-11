import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:4000',
  //       secure: false,
  //     },
  //   },
  // },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx'],
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  plugins: [react()],
});
