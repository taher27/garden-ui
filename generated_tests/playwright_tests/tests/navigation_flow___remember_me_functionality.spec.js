import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Discovered Workflow: navigation_flow - Remember Me Functionality', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website homepage
  try {
    await page.goto(process.env.BASE_URL);
    console.log('Navigated to homepage successfully.');

    // Verifying critical elements on the homepage
    const rememberMeCheckbox = page.locator('#rememberUn');
    if (await rememberMeCheckbox.count() === 0) {
      throw new Error("'Remember Me' checkbox not found on the homepage.");
    }
    console.log("'Remember Me' checkbox is visible and functional.");
  } catch (error) {
    console.error('Error during homepage verification:', error);
    throw error;
  }

  // Step 2: Click on 'Remember Me' checkbox
  try {
    const rememberMeCheckbox = page.locator('#rememberUn');
    await rememberMeCheckbox.click();
    console.log("'Remember Me' checkbox clicked.");
  } catch (error) {
    console.error('Error interacting with the "Remember Me" checkbox:', error);
    throw error;
  }

  // Step 3: Click on login button
  try {
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    const loginButton = page.locator('#Login');

    // Fill in username and password from environment variables
    await usernameField.fill(process.env.USERNAME);
    console.log('Username entered.');

    await passwordField.fill(process.env.PASSWORD);
    console.log('Password entered.');

    // Click the login button
    await loginButton.click();
    console.log('Login button clicked.');

    // Verification: Ensure user navigates to the next page (dashboard or similar)
    await page.waitForURL(url => url !== process.env.BASE_URL, { timeout: 5000 });
    console.log('Navigation after login successful.');
  } catch (error) {
    console.error('Error during login process:', error);
    throw error;
  }
});