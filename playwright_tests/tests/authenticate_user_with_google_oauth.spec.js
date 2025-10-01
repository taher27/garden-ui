import { test, expect } from '@playwright/test';

test('Authenticate User with Google OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Verify the login page loaded correctly
  await expect(page).toHaveURL(loginPageURL);
  console.log('Navigated to the login page:', loginPageURL);

  // Step 2: Locate the Google authentication button
  const googleAuthButtonSelector = "//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]";
  const googleAuthButton = page.locator(googleAuthButtonSelector);

  // Ensure the Google authentication button is visible
  await expect(googleAuthButton).toBeVisible();
  console.log('Google authentication button located.');

  // Step 3: Click on the Google authentication button
  await googleAuthButton.click();
  console.log('Clicked Google authentication button.');

  // Step 4: Verify redirection to Google's OAuth login page
  const googleOAuthURL = 'https://accounts.google.com/';
  await page.waitForURL(new RegExp(`^${googleOAuthURL}`));
  console.log('Redirected to Google OAuth login page.');

  // Step 5: Input a valid Google email in the email field
  const emailFieldSelector = 'input[type="email"]';
  const emailField = page.locator(emailFieldSelector);
  await emailField.fill('testuser@gmail.com');
  console.log('Entered email: testuser@gmail.com');

  // Step 6: Click the 'Next' button
  const nextButtonAfterEmailSelector = 'button:has-text("Next")';
  const nextButtonAfterEmail = page.locator(nextButtonAfterEmailSelector);
  await nextButtonAfterEmail.click();
  console.log('Clicked Next button after entering email.');

  // Step 7: Input the correct password for the account
  const passwordFieldSelector = 'input[type="password"]';
  await page.waitForSelector(passwordFieldSelector); // Wait for the password field to appear
  const passwordField = page.locator(passwordFieldSelector);
  await passwordField.fill('ValidPassword123');
  console.log('Entered password.');

  // Step 8: Click the 'Next' button to authenticate
  const nextButtonAfterPasswordSelector = 'button:has-text("Next")';
  const nextButtonAfterPassword = page.locator(nextButtonAfterPasswordSelector);
  await nextButtonAfterPassword.click();
  console.log('Clicked Next button after entering password.');

  // Step 9: Verify redirection back to the Roost application login page with a valid session
  await page.waitForURL(loginPageURL);
  console.log('Redirected back to the Roost application login page.');

  // Step 10: Verify the user is logged in and redirected to the primary application dashboard
  const dashboardURL = 'https://dev.roost.ai/dashboard'; // Assuming this is the dashboard URL
  await page.waitForURL(dashboardURL);
  await expect(page).toHaveURL(dashboardURL);
  console.log('User successfully logged in and redirected to the dashboard:', dashboardURL);

  // Final assertion: Ensure the dashboard contains user-specific content (e.g., username or welcome message)
  const welcomeMessageSelector = 'text="Welcome, Test User"'; // Adjust based on the actual dashboard content
  const welcomeMessage = page.locator(welcomeMessageSelector);
  await expect(welcomeMessage).toBeVisible();
  console.log('Verified user-specific content on the dashboard.');
});