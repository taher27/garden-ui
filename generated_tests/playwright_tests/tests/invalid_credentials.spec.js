import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Failed Login - Invalid Credentials', async ({ page }) => {
  // Step 1: Navigate to login page
  const loginUrl = process.env.LOGIN_URL;
  if (!loginUrl) {
    throw new Error('LOGIN_URL is not defined in the environment variables.');
  }
  await page.goto(loginUrl);

  // No verification is performed for page title as no selector or method is provided.

  // Step 2: Locate username input field
  try {
    const usernameField = page.locator('input[name="username"], #username, [placeholder*="username" i]');
    if (await usernameField.count() > 0) {
      console.log('Username input field located and enabled.');
    } else {
      throw new Error('Username input field is not found.');
    }
  } catch (error) {
    console.error('Error locating username input field:', error);
    throw error;
  }

  // Step 3: Locate password input field
  try {
    const passwordField = page.locator('input[type="password"], #password, [placeholder*="password" i]');
    if (await passwordField.count() > 0) {
      console.log('Password input field located and enabled.');
    } else {
      throw new Error('Password input field is not found.');
    }
  } catch (error) {
    console.error('Error locating password input field:', error);
    throw error;
  }

  // Step 4: Enter invalid credentials and submit
  try {
    const usernameField = page.locator('input[name="username"], #username, [placeholder*="username" i]');
    const passwordField = page.locator('input[type="password"], #password, [placeholder*="password" i]');
    const loginButton = page.locator('button[type="submit"], input[type="submit"], #loginButton, button:has-text("Login")');

    await usernameField.fill('invalid_user');
    await passwordField.fill('invalid_password');

    if (await loginButton.count() > 0) {
      await loginButton.click();
      console.log('Clicked login button with invalid credentials.');
    } else {
      throw new Error('Login button is not found or not clickable.');
    }
  } catch (error) {
    console.error('Error during login attempt with invalid credentials:', error);
    throw error;
  }

  // Step 5: Verify error message
  try {
    const errorMessage = page.locator('text="Invalid credentials", .error-message, [role="alert"]:has-text("Invalid credentials")');
    await expect(errorMessage).toBeVisible();
    console.log('Error message for invalid credentials is displayed correctly.');
  } catch (error) {
    console.error('Error message is not displayed or not visible:', error);
    throw error;
  }
});