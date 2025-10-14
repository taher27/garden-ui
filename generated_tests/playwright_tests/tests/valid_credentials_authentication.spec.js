import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Successful Login - Valid Credentials Authentication', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website login page
  await page.goto(`${process.env.BASE_URL}/login`);
  await expect(page).toHaveURL(`${process.env.BASE_URL}/login`);

  // Verify login page loaded successfully
  try {
    const loginForm = page.locator('form');
    await expect(loginForm).toBeVisible();
    console.log('Login page loaded and form is visible');
  } catch (error) {
    console.error('Login page verification failed:', error);
    throw error;
  }

  // Step 2: Enter valid credentials
  try {
    const usernameField = page.locator('#okta-signin-username');
    const passwordField = page.locator('#okta-signin-password');

    await usernameField.fill(process.env.USERNAME);
    console.log('Filled username field');

    await passwordField.fill(process.env.PASSWORD);
    console.log('Filled password field');
  } catch (error) {
    console.error('Error filling login credentials:', error);
    throw error;
  }

  // Step 3: Submit login form
  try {
    const loginButton = page.locator('#okta-signin-submit');
    await loginButton.click();
    console.log('Clicked login button');
  } catch (error) {
    console.error('Error submitting login form:', error);
    throw error;
  }

  // Step 4: Authenticate via Okta
  try {
    await page.waitForURL('https://dev-53854943.okta.com/', { timeout: 5000 });
    console.log('Redirected to Okta authentication provider');
    
    const oktaUsernameField = page.locator('#okta-signin-username');
    const oktaPasswordField = page.locator('#okta-signin-password');
    const oktaSignInButton = page.locator('#okta-signin-submit');

    await oktaUsernameField.fill(process.env.USERNAME);
    console.log('Filled Okta username');

    await oktaPasswordField.fill(process.env.PASSWORD);
    console.log('Filled Okta password');

    await oktaSignInButton.click();
    console.log('Submitted Okta authentication form');
  } catch (error) {
    console.error('Error during Okta authentication:', error);
    throw error;
  }

  // Step 5: Verify successful login state
  try {
    await page.waitForURL(`${process.env.BASE_URL}/roostgpt/tests`, { timeout: 5000 });
    console.log('Redirected to authenticated dashboard');
    
    const dashboard = page.locator('main'); // Assumes some main content exists on the dashboard
    await expect(dashboard).toBeVisible();
    console.log('Authenticated dashboard loaded successfully');
  } catch (error) {
    console.error('Error verifying authenticated state:', error);
    throw error;
  }
});