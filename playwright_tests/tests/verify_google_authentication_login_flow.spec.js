import { test, expect } from '@playwright/test';

test('Verify Google Authentication Login Flow', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);
  await expect(page).toHaveURL(loginPageURL);

  // Step 2: Locate the Google authentication button
  const googleAuthButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
  await expect(googleAuthButton).toBeVisible();

  // Step 3: Click on the Google authentication button
  await googleAuthButton.click();

  // Step 4: Assert that the Google login interface is displayed
  try {
    await page.waitForURL('https://accounts.google.com/*', { timeout: 10000 });
    console.log('Google login interface displayed successfully.');
  } catch (error) {
    console.error('Failed to load Google login interface:', error);
    throw error;
  }

  // Step 5: Enter valid Google credentials and complete login (Requires mocking or manual intervention)
  // Note: Automating Google login directly is against Google's automation policies. 
  // For testing purposes, we assume credentials are entered manually or login flow is mocked.
  console.log('Please complete the Google login process manually or use mock credentials.');

  // Wait for redirection to the dashboard
  await page.waitForURL('https://dev.roost.ai', { timeout: 20000 });

  // Step 6: Verify that the user is redirected to the dashboard page
  const dashboardURL = 'https://dev.roost.ai';
  await expect(page).toHaveURL(dashboardURL);

  // Step 7: Validate that the dashboard displays the correct user information
  const userInfoLocator = page.locator('.user-info'); // Adjust selector based on actual DOM structure
  await expect(userInfoLocator).toBeVisible();
  await expect(userInfoLocator).toContainText('Welcome'); // Adjust text based on expected user-specific info

  console.log('Google authentication login flow verified successfully.');
});