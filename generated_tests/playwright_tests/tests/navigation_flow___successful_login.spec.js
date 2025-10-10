import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Discovered Workflow: navigation_flow - Successful Login', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website homepage
  try {
    const homepageUrl = process.env.BASE_URL || 'https://aahanashopeinternational2.my.salesforce.com/';
    await page.goto(homepageUrl);
    console.log('Navigated to homepage:', homepageUrl);

    // Verify critical elements are present
    await expect(page).toHaveURL(homepageUrl);
    const pageTitle = await page.title();
    console.log('Page title:', pageTitle);

    // Check for username and password fields
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    console.log('Login form is present.');

  } catch (error) {
    console.error('Error during homepage navigation or verification:', error);
    throw error;
  }

  // Step 2: Insert text into username field
  try {
    const usernameField = page.locator('#username');
    await usernameField.fill(process.env.USERNAME || 'test_user');
    console.log('Username field filled successfully.');
  } catch (error) {
    console.error('Error interacting with username field:', error);
    throw error;
  }

  // Step 3: Insert text into password field
  try {
    const passwordField = page.locator('#password');
    await passwordField.fill(process.env.PASSWORD || 'test_password');
    console.log('Password field filled successfully.');
  } catch (error) {
    console.error('Error interacting with password field:', error);
    throw error;
  }

  // Step 4: Click on login button
  try {
    const loginButton = page.locator('#Login');
    await loginButton.click();
    console.log('Login button clicked.');

    // Optionally, wait for navigation to dashboard after login
    await page.waitForLoadState('networkidle');
    console.log('Page loaded after login attempt.');
  } catch (error) {
    console.error('Error clicking login button:', error);
    throw error;
  }
});