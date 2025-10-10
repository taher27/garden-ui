import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Successful Login - Valid Credentials Authentication', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to the website homepage
  const baseUrl = process.env.BASE_URL || 'https://aahanashopeinternational2.my.salesforce.com/';
  await page.goto(baseUrl);

  // Verify homepage loads successfully
  await expect(page).toHaveURL(baseUrl);

  // Step 2: Access the login form
  try {
    const usernameField = page.locator('#username');
    await expect(usernameField).toBeVisible(); // Verify username field is visible

    const passwordField = page.locator('#password');
    await expect(passwordField).toBeVisible(); // Verify password field is visible

    const loginButton = page.locator('#Login');
    await expect(loginButton).toBeEnabled(); // Verify login button is enabled
  } catch (error) {
    console.error('Error verifying login form elements:', error);
    throw error;
  }

  // Step 3: Enter valid credentials
  try {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    const usernameField = page.locator('#username');
    await usernameField.fill(username); // Fill username field

    const passwordField = page.locator('#password');
    await passwordField.fill(password); // Fill password field

    // Ensure password remains masked
    const passwordType = await passwordField.getAttribute('type');
    if (passwordType !== 'password') {
      throw new Error('Password field is not masked');
    }

    const loginButton = page.locator('#Login');
    await expect(loginButton).toBeEnabled(); // Verify login button becomes clickable
  } catch (error) {
    console.error('Error entering credentials:', error);
    throw error;
  }

  // Step 4: Submit the login form
  try {
    const loginButton = page.locator('#Login');
    await loginButton.click(); // Click login button

    // Wait for potential authentication redirect or dashboard to load
    await page.waitForLoadState('networkidle'); // Wait for network idle state
    console.log('Successfully submitted login form');
  } catch (error) {
    console.error('Error submitting login form:', error);
    throw error;
  }
});