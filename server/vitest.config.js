import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.{js,ts}'],
    // Ignore the e2e-tests directory
    exclude: ['e2e-tests/**'],
  },
});