import 'dotenv/config';
import { test, expect } from '@playwright/test';

import { login } from './util/auth.js';

test('Discovered Workflow: navigation_flow - Complete User Journey', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website homepage
  try {
    const homepageUrl = 'https://https//v18.roost.ai/';
    await page.goto(homepageUrl);

    // Verify page loaded correctly
    await expect(page).toHaveURL(homepageUrl);
    console.log('Successfully navigated to the homepage');
  } catch (error) {
    console.error('Error navigating to the homepage:', error);
    throw error;
  }
});