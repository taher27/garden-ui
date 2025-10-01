import { test, expect } from '@playwright/test';

test('Verify User Login via Google Integration', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginURL = 'https://dev.roost.ai/login';
  await page.goto(loginURL);

  // Step 2: Verify the visibility of the Google login button
  const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
  await expect(googleLoginButton).toBeVisible();

  // Step 3: Click on the Google login button
  await googleLoginButton.click();

  // Step 4: Wait for the Google account selection interface to load
  try {
    await page.waitForURL('https://accounts.google.com/*', { timeout: 10000 });
    console.log('Google account selection interface loaded successfully.');
  } catch (error) {
    console.error('Failed to load Google account selection interface:', error);
    throw error;
  }

  // Step 5: Select the desired Google account (simulated for automation purposes)
  // Note: Google authentication UIs are often restricted for automated testing due to security measures.
  // At this point, manual intervention or a mock/stub for Google authentication may be required.
  // For the purpose of this test, we'll assume the authentication is successful and proceed.

  // Simulate Google authentication completion
  await page.waitForNavigation({ url: 'https://dev.roost.ai/login' });

  // Step 6: Verify redirection to the dashboard
  const dashboardURL = 'https://dev.roost.ai';
  await page.waitForURL(dashboardURL, { timeout: 10000 });
  await expect(page).toHaveURL(dashboardURL);

  // Step 7: Assert the presence of user-specific elements on the dashboard
  const userDashboardElement = page.locator('text=Welcome'); // Adjust selector as per actual user-specific element
  await expect(userDashboardElement).toBeVisible();

  console.log('Test completed successfully: User is authenticated and redirected to the dashboard.');
});