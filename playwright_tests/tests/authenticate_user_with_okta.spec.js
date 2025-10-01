import { test, expect } from '@playwright/test';

test('Authenticate User with Okta', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Verify that we are on the correct login page
  await expect(page).toHaveURL(loginPageURL);

  // Step 2: Locate the Okta authentication button
  const oktaButton = page.locator("//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]");

  // Ensure the Okta button is visible
  await expect(oktaButton).toBeVisible();

  // Step 3: Click on the Okta authentication button
  await oktaButton.click();

  // Step 4: Verify that the user is redirected to Okta's login page
  const oktaLoginPageURL = 'https://dev-53854943.okta.com/';
  await page.waitForURL(new RegExp(`^${oktaLoginPageURL}`));
  await expect(page).toHaveURL(new RegExp(`^${oktaLoginPageURL}`));

  // Step 5: Input a valid Okta username in the username field
  const usernameField = page.locator('input[name="username"]');
  await expect(usernameField).toBeVisible();
  await usernameField.fill('<valid-okta-username>'); // Replace with a valid username

  // Step 6: Input the correct password in the password field
  const passwordField = page.locator('input[name="password"]');
  await expect(passwordField).toBeVisible();
  await passwordField.fill('<valid-okta-password>'); // Replace with the correct password

  // Step 7: Click the 'Sign In' button
  const signInButton = page.locator('button[type="submit"]');
  await expect(signInButton).toBeEnabled();
  await signInButton.click();

  // Step 8: Verify that the user is redirected back to the application with a valid session
  await page.waitForURL(loginPageURL);
  await expect(page).toHaveURL(loginPageURL);

  // Step 9: Verify that the user is logged in and redirected to the dashboard
  const dashboardURL = 'https://dev.roost.ai/dashboard'; // Assuming this is the dashboard URL
  await page.waitForURL(dashboardURL);
  await expect(page).toHaveURL(dashboardURL);

  // Verify that the dashboard contains expected elements indicating the user is logged in
  const userProfile = page.locator('.user-profile'); // Replace with the actual selector for a logged-in user indicator
  await expect(userProfile).toBeVisible();
});