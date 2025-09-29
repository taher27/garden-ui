import { test, expect } from '@playwright/test';

test('Verify Okta Login Integration', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated to login page.');

  // Step 2: Locate the 'Okta' login button
  const oktaLoginButton = page.locator("//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]");
  await expect(oktaLoginButton).toBeVisible();
  console.log('Located the Okta login button.');

  // Step 3: Click the 'Okta' login button
  await oktaLoginButton.click();
  console.log('Clicked the Okta login button.');

  // Step 4: Redirect to the Okta login page
  await page.waitForURL('https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin');
  console.log('Redirected to the Okta login page.');

  // Step 5: Enter valid Okta credentials
  const usernameField = page.locator('input[name="username"]');
  const passwordField = page.locator('input[name="password"]');
  const submitButton = page.locator('button[type="submit"]');

  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(submitButton).toBeVisible();
  console.log('Located the Okta login form fields.');

  await usernameField.fill('valid_username'); // Replace with actual valid username
  await passwordField.fill('valid_password'); // Replace with actual valid password
  console.log('Filled in Okta credentials.');

  // Step 6: Confirm and submit the login form
  await submitButton.click();
  console.log('Submitted the Okta login form.');

  // Step 7: Validate redirection back to https://dev.roost.ai
  await page.waitForURL('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Redirected back to the application dashboard.');

  // Step 8: Verify the presence of a user-specific dashboard or account details
  const dashboardElement = page.locator('.dashboard'); // Update selector as needed for the dashboard
  await expect(dashboardElement).toBeVisible();
  console.log('Verified the presence of the user-specific dashboard.');
});