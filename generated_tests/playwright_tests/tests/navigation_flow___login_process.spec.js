import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Discovered Workflow: navigation_flow - Login Process', async ({ page }) => {
  // Step 1: Navigate to website homepage
  await page.goto(process.env.LOGIN_URL || 'https://aahanashopeinternational2.my.salesforce.com/');
  await expect(page).toHaveURL(process.env.LOGIN_URL || 'https://aahanashopeinternational2.my.salesforce.com/');

  // Step 2: Enter username
  try {
    const usernameField = page.locator('#username');
    await usernameField.fill(process.env.USERNAME || 'test_user');
    console.log('Username entered successfully');
  } catch (error) {
    console.error('Error entering username:', error);
    throw error;
  }

  // Step 3: Enter password
  try {
    const passwordField = page.locator('#password');
    await passwordField.fill(process.env.PASSWORD || 'test_password');
    console.log('Password entered successfully');
  } catch (error) {
    console.error('Error entering password:', error);
    throw error;
  }

  // Step 4: Click login button
  try {
    const loginButton = page.locator('#Login');
    await loginButton.click();
    console.log('Login button clicked successfully');
  } catch (error) {
    console.error('Error clicking login button:', error);
    throw error;
  }

  // Verify successful login by checking the URL
  await expect(page).toHaveURL(process.env.BASE_URL + '/home');
  console.log('Successfully navigated to dashboard page');
});