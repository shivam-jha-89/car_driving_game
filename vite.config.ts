import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [],
  server: { host: true },
  build: { target: 'es2022' },
  test: { environment: 'node' },
});