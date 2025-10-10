import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Discovered Workflow: navigation_flow - Forgot Password Flow', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  try {
    // Step 1: Navigate to website homepage
    const homepageUrl = process.env.BASE_URL || 'https://aahanashopeinternational2.my.salesforce.com/';
    await page.goto(homepageUrl);

    // Verification: Ensure homepage loads successfully
    await expect(page).toHaveURL(homepageUrl);
    console.log('Homepage loaded successfully.');

    // Verification: Check if 'Forgot Your Password?' link is visible
    const forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
    await expect(forgotPasswordLink).toBeVisible();
    console.log('Verified "Forgot Your Password?" link is visible.');

  } catch (error) {
    console.error('Error during Step 1 (Homepage navigation):', error);
    throw error;
  }

  try {
    // Step 2: Click on 'Forgot Your Password?' link
    const forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
    await forgotPasswordLink.click();
    console.log('"Forgot Your Password?" link clicked.');

    // Verification: Ensure password reset page loads successfully
    // Note: Exact expected URL for the password reset page is not provided in the scenario.
    // This assumes the page successfully navigates without errors.
    await expect(page).toHaveURL(/.*passwordreset.*/); // Adjust regex if specific URL pattern is known
    console.log('Password reset page loaded successfully.');

  } catch (error) {
    console.error('Error during Step 2 (Password reset navigation):', error);
    throw error;
  }
});