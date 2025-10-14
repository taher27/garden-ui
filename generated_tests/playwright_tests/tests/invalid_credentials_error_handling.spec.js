import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Failed Login - Invalid Credentials Error Handling', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website login page
  try {
    await page.goto(process.env.BASE_URL + '/login');
    console.log('Navigated to login page');

    // Verify the login page loaded successfully
    await expect(page).toHaveURL(process.env.BASE_URL + '/login');
    await expect(page.locator('form')).toBeVisible(); // Verify that the login form is visible
    console.log('Login page loaded and login form is accessible');
  } catch (error) {
    console.error('Error navigating to login page:', error);
    throw error;
  }

  // Step 2: Enter invalid credentials
  try {
    const usernameField = page.locator('#okta-signin-username');
    const passwordField = page.locator('#okta-signin-password');

    // Fill in the username and password fields with invalid credentials
    await usernameField.fill(process.env.INVALID_USERNAME || 'wrongusername');
    await passwordField.fill(process.env.INVALID_PASSWORD || 'wrongpassword');
    console.log('Entered invalid credentials');
  } catch (error) {
    console.error('Error entering invalid credentials:', error);
    throw error;
  }

  // Step 3: Submit login form
  try {
    const submitButton = page.locator('#okta-signin-submit');

    // Click the login button to submit the form
    await submitButton.click();
    console.log('Login form submitted');

    // Verify that an error message is displayed
    const errorMessage = page.locator('.error-message'); // Replace with actual selector for error message if available
    await expect(errorMessage).toBeVisible();
    console.log('Error message displayed for invalid credentials');
  } catch (error) {
    console.error('Error during form submission or error handling:', error);
    throw error;
  }
});