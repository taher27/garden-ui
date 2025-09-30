const { test, expect } = require('@playwright/test');

// Test for verifying Okta login integration
test('Verify Okta Login Integration', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Step 2: Verify the login page loaded correctly
  await expect(page).toHaveURL(loginPageURL);

  // Step 3: Locate the Okta login button using the provided selector
  const oktaLoginButton = page.locator("//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]");
  await expect(oktaLoginButton).toBeVisible();

  // Step 4: Click on the Okta login button
  await oktaLoginButton.click();

  // Step 5: Wait for redirection to the Okta authentication page
  const oktaAuthURL = 'https://dev-53854943.okta.com/oauth2/';
  await page.waitForURL(new RegExp(`^${oktaAuthURL}`));
  console.log('Redirected to Okta authentication page.');

  // Step 6: Enter valid Okta credentials
  const emailInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('input[type="password"]');
  const signInButton = page.locator('button[type="submit"]');

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await emailInput.fill('valid-user@example.com'); // Replace with valid Okta email
  await passwordInput.fill('ValidPassword123!'); // Replace with valid Okta password
  await signInButton.click();

  // Step 7: Handle additional Okta verification steps (e.g., 2FA)
  try {
    const verificationInput = page.locator('input[placeholder="Enter code"]'); // Example selector for 2FA input
    if (await verificationInput.isVisible()) {
      await verificationInput.fill('123456'); // Replace with valid 2FA code
      const verifyButton = page.locator('button:has-text("Verify")');
      await verifyButton.click();
      console.log('2FA verification completed.');
    }
  } catch (error) {
    console.log('No additional verification steps required.');
  }

  // Step 8: Verify redirection back to the application
  const postLoginURL = 'https://dev.roost.ai/';
  await page.waitForURL(new RegExp(`^${postLoginURL}`));
  console.log('Redirected back to the application.');

  // Step 9: Verify the user is logged in by checking for the dashboard or user-specific elements
  const dashboardElement = page.locator('text="Welcome to your dashboard"'); // Replace with an actual unique element on the dashboard
  await expect(dashboardElement).toBeVisible();
  console.log('User successfully logged in.');

  // Step 10: Capture and log the authentication token
  const token = await page.evaluate(() => {
    // Assuming the token is stored in localStorage or cookies
    return localStorage.getItem('authToken') || document.cookie.match(/authToken=([^;]+)/)?.[1];
  });
  console.log('Captured authentication token:', token);

  // Additional error handling and logging for edge cases would be implemented here
  try {
    if (!token) {
      throw new Error('Authentication token not found.');
    }
  } catch (error) {
    console.error('Error capturing authentication token:', error);
    await page.screenshot({ path: 'error-capturing-token.png' });
    throw error;
  }
});