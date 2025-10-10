import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Successful Login - Valid Credentials Authentication', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto(process.env.LOGIN_URL);

  // Verify the URL contains '/login/'
  await expect(page).toHaveURL(/\/login\//);

  // Step 2: Enter valid credentials
  const usernameField = page.locator('#username');
  const passwordField = page.locator('#password');

  // Ensure the username input field is enabled
  await expect(usernameField).toBeEnabled();

  // Fill the username and password fields with environment variables
  await usernameField.fill(process.env.USERNAME);
  await passwordField.fill(process.env.PASSWORD);

  // Step 3: Submit login form
  const loginButton = page.locator('#Login');
  await expect(loginButton).toBeEnabled();
  await loginButton.click();

  // Step 4: Verify successful login
  await page.waitForLoadState('domcontentloaded');
  // Verify the page title contains 'Verify Your Identity | Salesforce'
  await expect(page).toHaveTitle(/Verify Your Identity \| Salesforce/);
});