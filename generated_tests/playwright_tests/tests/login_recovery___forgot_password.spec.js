import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Login Recovery - Forgot Password', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto(process.env.LOGIN_URL);
  console.log('Navigated to the login page');

  // Step 2: Locate forgot password link
  try {
    const forgotPasswordLink = page.locator('text="Forgot Password"');
    if (await forgotPasswordLink.count() > 0) {
      console.log('Forgot password link is visible on the page');
    } else {
      throw new Error('Forgot password link is not visible');
    }
  } catch (error) {
    console.error('Error locating forgot password link:', error);
    throw error;
  }

  // Step 3: Click forgot password link
  try {
    const forgotPasswordLink = page.locator('text="Forgot Password"');
    await forgotPasswordLink.click();
    console.log('Clicked on the forgot password link');
  } catch (error) {
    console.error('Error clicking forgot password link:', error);
    throw error;
  }

  // Step 4: Enter recovery email
  try {
    const recoveryEmailInput = page.locator('input[type="email"]');
    await recoveryEmailInput.fill(process.env.USERNAME);
    console.log('Filled in the recovery email input field');

    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.click();
    console.log('Clicked on the submit button to initiate recovery');
  } catch (error) {
    console.error('Error entering recovery email or clicking submit:', error);
    throw error;
  }

  // Step 5: Verify recovery initiation
  try {
    const confirmationMessage = page.locator('text="Recovery email sent"');
    await expect(confirmationMessage).toBeVisible();
    console.log('Confirmation message displayed: Recovery email sent');
  } catch (error) {
    console.error('Error verifying recovery initiation:', error);
    throw error;
  }
});