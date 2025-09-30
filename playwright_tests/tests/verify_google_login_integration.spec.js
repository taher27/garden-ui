import { test, expect } from '@playwright/test';

test('Verify Google Login Integration', async ({ page, context }) => {
  // Step 1: Navigate to the login page
  const loginUrl = 'https://dev.roost.ai/login';
  await page.goto(loginUrl);
  await expect(page).toHaveURL(loginUrl);

  // Step 2: Locate the Google login button
  const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
  await expect(googleLoginButton).toBeVisible();

  // Step 3: Click on the Google login button
  await googleLoginButton.click();

  // Step 4: Verify redirection to Google's OAuth2 authentication page
  const googleAuthUrl = 'https://accounts.google.com/';
  await page.waitForURL(new RegExp(`^${googleAuthUrl}`));
  await expect(page).toHaveURL(new RegExp(`^${googleAuthUrl}`));

  // Step 5: Enter valid Google credentials on the authentication form
  const emailInput = page.locator('input[type="email"]');
  await emailInput.fill('your-valid-google-email@gmail.com');
  const nextButton = page.locator('button:has-text("Next")');
  await nextButton.click();

  // Step 6: Wait for password input to appear and fill it
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.waitFor({ state: 'visible' });
  await passwordInput.fill('your-valid-google-password');
  await nextButton.click();

  // Step 7: Handle additional Google verification steps (e.g., 2FA)
  try {
    const twoFactorInput = page.locator('input[type="text"]'); // Assuming an input for 2FA
    if (await twoFactorInput.count() > 0) {
      await twoFactorInput.fill('your-2fa-code');
      const verifyButton = page.locator('button:has-text("Verify")');
      await verifyButton.click();
    }
  } catch (error) {
    console.log('No 2FA required or error during 2FA:', error);
  }

  // Step 8: Verify redirection back to the application
  await page.waitForURL('https://dev.roost.ai/*');
  const appRedirectUrl = 'https://dev.roost.ai/';
  await expect(page).toHaveURL(new RegExp(`^${appRedirectUrl}`));

  // Step 9: Check if the user is successfully logged in
  const dashboardElement = page.locator('div.dashboard'); // Adjust this selector to match the actual dashboard element
  await expect(dashboardElement).toBeVisible();

  // Step 10: Capture and log the authentication token
  const cookies = await context.cookies();
  const authToken = cookies.find(cookie => cookie.name === 'auth_token');
  if (authToken) {
    console.log('Authentication Token:', authToken.value);
  } else {
    console.error('Authentication token not found.');
  }
});