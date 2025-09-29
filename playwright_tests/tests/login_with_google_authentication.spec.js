import { test, expect } from '@playwright/test';

test('Login with Google Authentication', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated to the login page.');

  // Step 2: Verify that the Google sign-in option is visible and enabled
  const googleSignInButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
  await expect(googleSignInButton).toBeVisible();
  await expect(googleSignInButton).toBeEnabled();
  console.log('Google sign-in button is visible and enabled.');

  // Step 3: Click on the Google sign-in button
  await googleSignInButton.click();
  console.log('Clicked on the Google sign-in button.');

  // Step 4: Verify that the Google OAuth login page is displayed
  await page.waitForURL('https://accounts.google.com/*');
  await expect(page).toHaveURL(/https:\/\/accounts\.google\.com\/.*/);
  console.log('Navigated to the Google OAuth login page.');

  // Step 5: Enter valid Google credentials (email and password)
  const emailInput = page.locator('input[type="email"]');
  await emailInput.fill('your-google-email@example.com');
  console.log('Entered email.');

  const emailNextButton = page.locator('button:has-text("Next")');
  await emailNextButton.click();
  console.log('Clicked Next after entering email.');

  // Wait for password field to be visible
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.waitFor({ state: 'visible' });

  await passwordInput.fill('your-google-password');
  console.log('Entered password.');

  // Step 6: Click the 'Next' or 'Sign In' button
  const signInButton = page.locator('button:has-text("Next"), button:has-text("Sign In")');
  await signInButton.click();
  console.log('Clicked on the Sign In button.');

  // Step 7: Verify that the user is redirected back to the Roost application
  await page.waitForURL('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Redirected back to the Roost application.');

  // Step 8: Check that the user lands on their dashboard
  const dashboardHeader = page.locator('h1:has-text("Dashboard")');
  await expect(dashboardHeader).toBeVisible();
  console.log('User is on the dashboard page.');

  // Step 9: Verify that the user's dashboard displays active environments and relevant user data
  const activeEnvironments = page.locator('.active-environments');
  await expect(activeEnvironments).toBeVisible();
  await expect(activeEnvironments).toContainText('Active Environments');
  console.log('Dashboard displays active environments and relevant user data.');
});