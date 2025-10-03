import { test, expect } from '@playwright/test';

test('Verify User Login via Google OAuth', async ({ page, context }) => {
  // Step 1: Navigate to the login page
  const loginPageUrl = 'https://dev.roost.ai/login';
  await page.goto(loginPageUrl);

  // Step 2: Verify the login page has loaded successfully
  await expect(page).toHaveURL(loginPageUrl);

  // Step 3: Locate the Google OAuth login button using the provided selector
  const googleButtonSelector = "//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]";
  const googleLoginButton = page.locator(googleButtonSelector);

  // Ensure the Google OAuth login button is visible
  await expect(googleLoginButton).toBeVisible();

  // Step 4: Click the Google OAuth login button
  await googleLoginButton.click();

  // Step 5: Wait for the browser to redirect to the Google OAuth login page
  const googleOAuthUrl = 'https://accounts.google.com/';
  await page.waitForURL(new RegExp(`^${googleOAuthUrl}`));
  expect(page.url()).toContain(googleOAuthUrl);

  // Step 6: Interact with the Google OAuth login form
  try {
    // Fill in Google account credentials
    await page.locator('input[type="email"]').fill('testuser@gmail.com');
    await page.locator('button:has-text("Next")').click();
    await page.waitForTimeout(2000); // Wait for the password input to appear

    await page.locator('input[type="password"]').fill('TestPassword123');
    await page.locator('button:has-text("Next")').click();

    // Step 7: Wait for redirection back to the application dashboard
    const dashboardUrl = 'https://dev.roost.ai/dashboard';
    await page.waitForURL(dashboardUrl);
    await expect(page).toHaveURL(dashboardUrl);

    // Step 8: Verify that the user's session is authenticated
    // Check for a valid token in session storage or cookies
    const cookies = await context.cookies();
    const authToken = cookies.find(cookie => cookie.name === 'auth_token');
    expect(authToken).not.toBeNull();

    // Step 9: Verify user-specific data is displayed on the dashboard
    const userProfileLocator = page.locator('.user-profile'); // Assuming a user profile section exists
    await expect(userProfileLocator).toBeVisible();
    await expect(userProfileLocator).toContainText('testuser@gmail.com');
  } catch (error) {
    console.error('Error during Google OAuth login process:', error);
    throw error;
  }
});