// playwright-test.spec.js
import { test, expect } from '@playwright/test';

// Test case: Verify Login via Google Authentication
test('Verify Login via Google Authentication', async ({ page }) => {
  // Step 1: Navigate to the Roost login page
  const loginPageUrl = 'https://dev.roost.ai/login';
  await page.goto(loginPageUrl);

  // Assertion: Verify that the page has navigated to the correct URL
  await expect(page).toHaveURL(loginPageUrl);

  // Step 2: Locate the Google login button using the stable selector
  const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");

  // Ensure the Google login button is visible and accessible
  await expect(googleLoginButton).toBeVisible();
  await expect(googleLoginButton).toHaveAttribute('href', 'https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin');

  // Step 3: Click on the Google login button
  await googleLoginButton.click();

  // Step 4: Authenticate using valid Google credentials
  // Note: For automation, a mock or testing environment should be used here, as interacting with live Google login is not feasible in automated testing.
  // Assuming we are using a test environment with a pre-configured Google OAuth flow.
  await page.waitForURL('https://accounts.google.com/*'); // Wait for redirection to the Google login page
  console.log('Redirected to Google login page.');

  // Simulate entering valid Google credentials (example for testing purposes)
  try {
    const emailField = page.locator('input[type="email"]');
    await emailField.fill('testuser@gmail.com');
    await page.locator('button:has-text("Next")').click();

    const passwordField = page.locator('input[type="password"]');
    await passwordField.fill('TestPassword123!');
    await page.locator('button:has-text("Next")').click();
  } catch (error) {
    console.error('Error during Google authentication:', error);
    throw error;
  }

  // Step 5: Verify redirection back to the Roost dashboard
  const dashboardUrl = 'https://dev.roost.ai';
  await page.waitForURL(dashboardUrl);

  // Assertion: Ensure the user is redirected to the dashboard
  await expect(page).toHaveURL(dashboardUrl);
  console.log('User successfully redirected to the Roost dashboard.');

  // Step 6: Ensure the user's name is displayed on the dashboard
  const userNameLocator = page.locator('//span[contains(@class, "user-name")]'); // Adjust the selector based on the actual app's implementation
  await expect(userNameLocator).toBeVisible();
  await expect(userNameLocator).toContainText('Test User'); // Replace 'Test User' with the expected name for the test account

  console.log('User\'s name is displayed on the dashboard, confirming successful login.');
});