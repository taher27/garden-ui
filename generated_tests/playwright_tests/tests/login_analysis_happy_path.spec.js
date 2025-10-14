import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Successful Login - Valid Credentials Authentication', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website login page
  const loginPageUrl = `${process.env.BASE_URL}/login`;
  await page.goto(loginPageUrl);
  console.log(`Navigated to ${loginPageUrl}`);
  
  try {
    // Verify the login form's visibility
    const loginForm = page.locator('form');
    await expect(loginForm).toBeVisible();
    console.log('Login form is visible and accessible');
  } catch (error) {
    console.error('Login form is not visible:', error);
    throw error;
  }

  // Step 2: Enter valid credentials
  try {
    const usernameField = page.locator('#okta-signin-username');
    const passwordField = page.locator('#okta-signin-password');
    const loginButton = page.locator('#okta-signin-submit');

    await usernameField.fill(process.env.USERNAME);
    console.log('Entered username');

    await passwordField.fill(process.env.PASSWORD);
    console.log('Entered password');

    // Verify fields are filled correctly
    await expect(usernameField).toHaveValue(process.env.USERNAME);
    await expect(passwordField).not.toHaveValue(process.env.PASSWORD); // Password should be masked
    console.log('Validated input fields');
  } catch (error) {
    console.error('Error entering credentials:', error);
    throw error;
  }

  // Step 3: Submit login form
  try {
    const loginButton = page.locator('#okta-signin-submit');
    await loginButton.click();
    console.log('Clicked login button');
  } catch (error) {
    console.error('Error clicking login button:', error);
    throw error;
  }

  // Step 4: Authenticate via Okta
  try {
    const oktaAuthUrl = 'https://dev-53854943.okta.com/';
    await page.waitForURL(oktaAuthUrl);
    console.log(`Redirected to authentication provider: ${oktaAuthUrl}`);

    const usernameField = page.locator('#okta-signin-username');
    const passwordField = page.locator('#okta-signin-password');
    const oktaSubmitButton = page.locator('#okta-signin-submit');

    await usernameField.fill(process.env.USERNAME);
    await passwordField.fill(process.env.PASSWORD);
    await oktaSubmitButton.click();
    console.log('Completed authentication via Okta');
  } catch (error) {
    console.error('Error during authentication via Okta:', error);
    throw error;
  }

  // Step 5: Verify successful login state
  try {
    const authenticatedPageUrl = `${process.env.BASE_URL}/roostgpt/tests`;
    await page.waitForURL(authenticatedPageUrl);
    console.log(`Redirected to authenticated page: ${authenticatedPageUrl}`);
    
    const dashboard = page.locator('div.dashboard');
    await expect(dashboard).toBeVisible();
    console.log('Authenticated dashboard is visible');
  } catch (error) {
    console.error('Error verifying authenticated state:', error);
    throw error;
  }
});