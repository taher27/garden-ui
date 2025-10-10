import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Login Recovery - Forgot Password', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to the login form
  try {
    await page.goto(process.env.BASE_URL);
    console.log('Navigated to the login page');
  } catch (error) {
    console.error('Error navigating to the login page:', error);
    throw error;
  }

  // Step 2: Click 'Forgot Password'
  try {
    const forgotPasswordLink = page.locator('#forgot_password_link');
    if (await forgotPasswordLink.count() > 0) {
      await forgotPasswordLink.click();
      console.log('Clicked on the Forgot Password link');
    } else {
      throw new Error("'Forgot Password' link not found");
    }
  } catch (error) {
    console.error('Error clicking on Forgot Password link:', error);
    throw error;
  }

  // Step 3: Submit recovery details
  try {
    const emailInput = page.locator('#username');
    if (await emailInput.count() > 0) {
      await emailInput.fill(process.env.USERNAME);
      console.log('Filled the username/email input field');
    } else {
      throw new Error("Email/username input field not found");
    }

    const submitButton = page.locator('#continue');
    if (await submitButton.count() > 0) {
      await submitButton.click();
      console.log('Clicked on the Continue/Submit button for recovery');
    } else {
      throw new Error("Submit button not found on the recovery page");
    }

    // Wait for confirmation message or page load
    await page.waitForTimeout(2000); 
    console.log('Recovery request submitted successfully');
  } catch (error) {
    console.error('Error during recovery details submission:', error);
    throw error;
  }
});