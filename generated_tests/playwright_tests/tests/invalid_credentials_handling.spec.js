import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Failed Login - Invalid Credentials Handling', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto(process.env.LOGIN_URL);
  await expect(page).toHaveURL('https://aahanashopeinternational2.my.salesforce.com/login/');

  // Step 2: Enter invalid credentials
  try {
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    
    // Fill in invalid username and password
    await usernameField.fill('invalid_user');
    await passwordField.fill('invalid_password');
  } catch (error) {
    console.error('Error entering credentials:', error);
    throw error;
  }

  // Step 3: Submit login form
  try {
    const loginButton = page.locator('#Login');
    await loginButton.click();

    // Verify error message appears
    const errorMessage = page.locator('text=Invalid credentials');
    await expect(errorMessage).toBeVisible();
  } catch (error) {
    console.error('Error during login submission or verification:', error);
    throw error;
  }
});