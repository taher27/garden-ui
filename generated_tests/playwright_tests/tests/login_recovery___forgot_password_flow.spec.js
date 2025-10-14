import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Login Recovery - Forgot Password Flow', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website login page
  try {
    const loginPageUrl = `${process.env.BASE_URL}/login`;
    await page.goto(loginPageUrl);
    console.log(`Navigated to login page: ${loginPageUrl}`);

    // Verify page structure and accessibility
    await expect(page).toHaveURL(loginPageUrl);
    const forgotPasswordLink = page.locator('a.okta');
    await expect(forgotPasswordLink).toBeVisible();
    console.log('Verified login page loaded correctly and forgot password link is visible.');
  } catch (error) {
    console.error('Error during login page navigation or verification:', error);
    throw error;
  }

  // Step 2: Click forgot password link
  try {
    const forgotPasswordLink = page.locator('a.okta');
    await forgotPasswordLink.click();
    console.log('Clicked on forgot password link.');

    // Verify forgot password page loaded correctly
    await page.waitForLoadState('domcontentloaded');
    const emailInputField = page.locator('#okta-signin-username');
    const submitButton = page.locator('#okta-signin-submit');
    await expect(emailInputField).toBeVisible();
    await expect(submitButton).toBeVisible();
    console.log('Verified forgot password page loaded correctly with required elements.');
  } catch (error) {
    console.error('Error during forgot password flow navigation or verification:', error);
    throw error;
  }

  // Step 3: Submit recovery request
  try {
    const emailInputField = page.locator('#okta-signin-username');
    const submitButton = page.locator('#okta-signin-submit');

    // Enter registered email and submit the recovery request
    const recoveryEmail = process.env.RECOVERY_EMAIL;
    await emailInputField.fill(recoveryEmail);
    console.log(`Entered recovery email: ${recoveryEmail}`);
    await submitButton.click();
    console.log('Clicked on submit button to initiate recovery.');

    // Verify confirmation message and successful submission
    await page.waitForLoadState('domcontentloaded');
    const confirmationMessage = page.locator('text=Your password reset request has been submitted'); // Update selector if exact message is known
    await expect(confirmationMessage).toBeVisible();
    console.log('Verified recovery request confirmation message is displayed.');
  } catch (error) {
    console.error('Error during recovery request submission or verification:', error);
    throw error;
  }
});