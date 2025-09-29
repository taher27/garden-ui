import { test, expect } from '@playwright/test';

test('Verify User Login via Google OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');

  // Verify the login page URL
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Locate the Google login button using its stable selector
  const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");

  // Ensure the Google login button is visible
  await expect(googleLoginButton).toBeVisible();

  // Step 3: Click the Google login button
  await googleLoginButton.click();

  // Step 4: Verify redirection to the Google OAuth authentication page
  await page.waitForURL('https://accounts.google.com/**', { timeout: 10000 });
  expect(page.url().startsWith('https://accounts.google.com')).toBeTruthy();

  // Step 5: Enter valid Google account credentials
  const emailInput = page.locator('input[type="email"]');
  await emailInput.fill('testuser@gmail.com'); // Replace with a valid email
  await emailInput.press('Enter');

  // Wait for the password input field to be visible
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.waitFor({ state: 'visible' });
  await passwordInput.fill('testpassword123'); // Replace with a valid password
  await passwordInput.press('Enter');

  // Step 6: Click the 'Sign In' button (implicitly done by pressing 'Enter' after filling credentials)

  // Step 7: Verify redirection back to https://dev.roost.ai
  await page.waitForURL('https://dev.roost.ai/**', { timeout: 10000 });
  expect(page.url().startsWith('https://dev.roost.ai')).toBeTruthy();

  // Step 8: Verify that the user is on the dashboard and logged in
  const dashboardElement = page.locator('.dashboard'); // Replace '.dashboard' with the actual selector for the dashboard
  await expect(dashboardElement).toBeVisible();

  console.log('Test completed successfully: User logged in via Google OAuth and redirected to dashboard.');
});