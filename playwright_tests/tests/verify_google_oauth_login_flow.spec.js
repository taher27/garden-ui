import { test, expect } from '@playwright/test';

test('Verify Google OAuth Login Flow', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Verify the page loaded correctly
  await expect(page).toHaveURL(loginPageURL);

  // Step 2: Locate and click on the Google login button
  const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
  
  // Ensure the Google login button is visible before interacting
  await expect(googleLoginButton).toBeVisible();

  // Click the Google login button
  await googleLoginButton.click();

  // Step 3: Verify redirection to the Google OAuth authentication page
  const googleOAuthURL = 'https://accounts.google.com/';
  await page.waitForURL(new RegExp(`^${googleOAuthURL}`));
  expect(await page.url()).toContain(googleOAuthURL);

  // Step 4: Enter valid Google credentials and authorize access
  try {
    // Fill in the email field
    const emailField = page.locator('input[type="email"]');
    await emailField.fill('valid-google-account@example.com');
    await emailField.press('Enter');

    // Wait for password field to appear and fill it
    const passwordField = page.locator('input[type="password"]');
    await passwordField.fill('valid-password');
    await passwordField.press('Enter');

    // If there's a consent screen, click the "Allow" button
    const allowButton = page.locator('button:has-text("Allow"), div:has-text("Allow")');
    if (await allowButton.count() > 0) {
      await allowButton.click();
    }
  } catch (error) {
    console.error('Error during Google login process:', error);
    throw error;
  }

  // Step 5: Verify redirection back to the Roost.ai platform
  const dashboardURL = 'https://dev.roost.ai';
  await page.waitForURL(dashboardURL);
  await expect(page).toHaveURL(dashboardURL);

  // Step 6: Check if the user is successfully logged in and redirected to the primary dashboard
  const dashboardWelcomeText = page.locator('h1:has-text("Welcome"), h2:has-text("Dashboard"), [role="heading"]:has-text("Welcome")');
  await expect(dashboardWelcomeText).toBeVisible();

  console.log('Google OAuth login flow successfully verified.');
});