import { test, expect } from '@playwright/test';

test('Verify Google OAuth Login Functionality', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');

  // Step 2: Assert that the page title is as expected
  await expect(page).toHaveTitle('Roost Enterprise Login | Software as a Service');

  // Step 3: Locate the Google OAuth login button using its stable selector
  const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");

  // Ensure the Google login button is visible
  await expect(googleLoginButton).toBeVisible();

  // Step 4: Click on the Google OAuth login button
  await googleLoginButton.click();

  // Step 5: Verify redirection to the Google login page
  const googleLoginUrlPattern = 'https://accounts.google.com/';
  await page.waitForURL(new RegExp(`^${googleLoginUrlPattern}`), { timeout: 10000 });

  // Step 6: Enter valid Google credentials and submit the form
  const emailInput = page.locator('input[type="email"]');
  await emailInput.fill('valid-email@gmail.com');
  await page.locator('button:has-text("Next")').click();

  // Wait for password field and input password
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.fill('valid-password');
  await page.locator('button:has-text("Next")').click();

  // Step 7: Verify redirection back to the Roost dashboard
  await page.waitForURL('https://dev.roost.ai/', { timeout: 15000 });

  // Step 8: Assert that the user's name or profile information is visible on the dashboard
  const userProfileInfo = page.locator('div.profile-name'); // Replace with the actual selector for user info
  await expect(userProfileInfo).toBeVisible();

  // Step 9: Verify the URL of the current page is the dashboard URL
  await expect(page).toHaveURL('https://dev.roost.ai');
});