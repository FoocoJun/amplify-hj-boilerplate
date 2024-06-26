import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // ... Specify options here.
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
