const { test, expect } = require('@playwright/test');

test('Login via Google OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Step 2: Verify the login page loaded correctly
  await expect(page).toHaveURL(loginPageURL);
  console.log('Navigated to the login page successfully.');

  // Step 3: Verify the presence of the Google OAuth login option
  const googleOAuthSelector = "//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]";
  const googleOAuthLink = page.locator(googleOAuthSelector);
  await expect(googleOAuthLink).toBeVisible();
  console.log('Google OAuth login option is visible.');

  // Step 4: Click on the Google OAuth login link
  await googleOAuthLink.click();
  console.log('Clicked on the Google OAuth login link.');

  // Step 5: Wait for the Google login page to load
  const googleLoginURL = 'https://accounts.google.com/';
  await page.waitForURL(new RegExp(`^${googleLoginURL}`));
  console.log('Redirected to the Google login page.');

  // Step 6: Enter valid Google account credentials (email and password)
  const emailInput = page.locator('input[type="email"]');
  await emailInput.fill('valid.email@example.com');
  await page.locator('#identifierNext').click();
  console.log('Entered email and proceeded to password step.');

  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.fill('valid-password');
  await page.locator('#passwordNext').click();
  console.log('Entered password and submitted login form.');

  // Step 7: Verify redirection back to the Roost login page
  await page.waitForURL(loginPageURL);
  console.log('Redirected back to the Roost login page after successful Google login.');

  // Step 8: Verify the presence of a session token indicating successful login
  const sessionTokenCheck = page.locator('meta[name="session-token"]'); // Assuming session token is stored in a meta tag
  await expect(sessionTokenCheck).toBeVisible();
  console.log('Session token is present, indicating successful login.');

  // Step 9: Confirm redirection to the primary application dashboard
  const dashboardURL = 'https://dev.roost.ai';
  await page.waitForURL(dashboardURL);
  await expect(page).toHaveURL(dashboardURL);
  console.log('User successfully redirected to the application dashboard.');
});