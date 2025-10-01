import { test, expect } from '@playwright/test';

test('Verify Login via Okta Authentication', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated to the login page.');

  // Step 2: Locate and click on the Okta login option
  try {
    const oktaLoginButton = page.locator("//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]");
    await oktaLoginButton.click();
    console.log('Clicked on the Okta login button.');
  } catch (error) {
    console.error('Failed to locate or click the Okta login button:', error);
    throw error;
  }

  // Step 3: Redirect to Okta's authentication page
  await page.waitForURL('https://dev-53854943.okta.com/oauth2/*', { waitUntil: 'domcontentloaded' });
  console.log('Redirected to Okta authentication page.');

  // Step 4: Enter valid Okta credentials (username and password)
  try {
    const usernameField = page.locator('input[type="text"][name="username"]');
    const passwordField = page.locator('input[type="password"][name="password"]');
    const loginButton = page.locator('button[type="submit"]');

    await usernameField.fill('valid_username'); // Replace with valid username
    console.log('Entered username.');

    await passwordField.fill('valid_password'); // Replace with valid password
    console.log('Entered password.');

    // Step 5: Submit the login form on the Okta page
    await loginButton.click();
    console.log('Submitted Okta login form.');
  } catch (error) {
    console.error('Failed during Okta login:', error);
    throw error;
  }

  // Step 6: Redirect back to the primary application dashboard upon successful authentication
  await page.waitForURL('https://dev.roost.ai', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Redirected back to the application dashboard.');

  // Step 7: Verify that the dashboard loads with user-specific data and environment management options
  try {
    const dashboardHeader = page.locator('h1:has-text("Dashboard")');
    await expect(dashboardHeader).toBeVisible();
    console.log('Verified the dashboard header is visible.');

    const environmentOptions = page.locator('button:has-text("Create Environment"), div:has-text("Environments")');
    await expect(environmentOptions.first()).toBeVisible();
    console.log('Verified the user-specific environment management options are visible.');
  } catch (error) {
    console.error('Failed to verify dashboard content:', error);
    throw error;
  }

  console.log('Test completed successfully.');
});