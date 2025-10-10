import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Successful Login - Valid Credentials Authentication', async ({ page }) => {

  // Step 1: Navigate to login page
  await page.goto(process.env.LOGIN_URL);
  console.log('Navigated to login page');

  // Step 2: Locate username input field
  try {
    const usernameField = page.locator('input[name="username"], input#username, input[placeholder*="username" i]');
    if (await usernameField.count() > 0) {
      await expect(usernameField.first()).toBeVisible();
      console.log('Username input field is visible');
    } else {
      throw new Error('Username input field not found');
    }
  } catch (error) {
    console.error('Error locating username input field:', error);
    throw error;
  }

  // Step 3: Locate password input field
  try {
    const passwordField = page.locator('input[name="password"], input#password, input[placeholder*="password" i]');
    if (await passwordField.count() > 0) {
      await expect(passwordField.first()).toBeVisible();
      console.log('Password input field is visible');
    } else {
      throw new Error('Password input field not found');
    }
  } catch (error) {
    console.error('Error locating password input field:', error);
    throw error;
  }

  // Step 4: Enter valid credentials and submit
  try {
    const usernameField = page.locator('input[name="username"], input#username, input[placeholder*="username" i]');
    const passwordField = page.locator('input[name="password"], input#password, input[placeholder*="password" i]');
    const loginButton = page.locator('button[type="submit"], input[type="submit"], button:has-text("Login"), button:has-text("Sign In")');

    if (await usernameField.count() > 0 && await passwordField.count() > 0 && await loginButton.count() > 0) {
      await usernameField.first().fill(process.env.USERNAME);
      console.log('Entered username');
      await passwordField.first().fill(process.env.PASSWORD);
      console.log('Entered password');
      await loginButton.first().click();
      console.log('Clicked login button');
    } else {
      throw new Error('Login elements not found');
    }
  } catch (error) {
    console.error('Error during login process:', error);
    throw error;
  }

  // Step 5: Verify successful authentication
  try {
    await page.waitForLoadState('domcontentloaded');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Starting agent 6250...');
    console.log('Successful authentication verified');
  } catch (error) {
    console.error('Error verifying authentication:', error);
    throw error;
  }
});