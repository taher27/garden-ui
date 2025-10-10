import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Successful Login - Valid Credentials Authentication', async ({ page }) => {
  // Step 1: Navigate to login page
  try {
    await page.goto(process.env.LOGIN_URL);
    console.log('Navigated to login page');
  } catch (error) {
    console.error('Error navigating to login page:', error);
    throw error;
  }

  // Step 2: Locate username input field
  try {
    const usernameField = page.locator('#username'); // Replace with correct selector if available
    await expect(usernameField).toBeVisible();
    await expect(usernameField).toBeEnabled();
    console.log('Username input field is visible and enabled');
  } catch (error) {
    console.error('Username input field validation failed:', error);
    throw error;
  }

  // Step 3: Locate password input field
  try {
    const passwordField = page.locator('#password'); // Replace with correct selector if available
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEnabled();
    console.log('Password input field is visible and enabled');
  } catch (error) {
    console.error('Password input field validation failed:', error);
    throw error;
  }

  // Step 4: Enter valid credentials and submit
  try {
    await page.locator('#username').fill(process.env.USERNAME); // Replace with correct selector if available
    await page.locator('#password').fill(process.env.PASSWORD); // Replace with correct selector if available
    const loginButton = page.locator('#login'); // Replace with correct selector if available
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await loginButton.click();
    console.log('Entered valid credentials and clicked login');
  } catch (error) {
    console.error('Error during login interaction:', error);
    throw error;
  }

  // Step 5: Verify successful authentication
  try {
    await page.waitForTimeout(1000); // Adjust timeout as needed
    await expect(page).toHaveTitle('Starting agent 6250...');
    console.log('Successfully authenticated and verified page title');
  } catch (error) {
    console.error('Authentication verification failed:', error);
    throw error;
  }
});