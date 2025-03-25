import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], // Saves report in 'playwright-report'
  use: {
    headless: false, // Run in non-headless mode
    screenshot: 'on', // Capture screenshots on failures
    video: 'on', // Record video of the test run
    trace: 'on', // Capture execution trace
  },
});
