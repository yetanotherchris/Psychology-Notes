import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tools/cs2-flicker-paradigm/',
  plugins: [react()],
});