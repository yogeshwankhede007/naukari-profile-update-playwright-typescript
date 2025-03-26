import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000, // Set global timeout for tests
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], // Saves report in 'playwright-report'
  use: {
    headless: true, // Run in non-headless mode
    screenshot: 'on', // Capture screenshots on failures
    trace: 'on', // Capture execution trace
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
});
