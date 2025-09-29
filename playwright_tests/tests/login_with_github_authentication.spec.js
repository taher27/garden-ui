import { test, expect } from '@playwright/test';

test('Login with GitHub Authentication', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Verify that the GitHub sign-in option is visible and enabled
  const gitHubSignInButton = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");
  await expect(gitHubSignInButton).toBeVisible();
  await expect(gitHubSignInButton).toBeEnabled();

  // Step 3: Click on the GitHub sign-in button
  await gitHubSignInButton.click();

  // Step 4: Verify that the GitHub login page is displayed
  await page.waitForURL('https://github.com/login');
  await expect(page).toHaveURL('https://github.com/login');

  // Step 5: Enter valid GitHub credentials
  const usernameField = page.locator('input#login_field');
  const passwordField = page.locator('input#password');
  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await usernameField.fill('your-github-username'); // Replace with valid username
  await passwordField.fill('your-github-password'); // Replace with valid password

  // Step 6: Click the 'Sign In' button on the GitHub login page
  const signInButton = page.locator('input[type="submit"]');
  await expect(signInButton).toBeVisible();
  await signInButton.click();

  // Step 7: Authorize the application if prompted
  try {
    const authorizeButton = page.locator('button:has-text("Authorize")');
    if (await authorizeButton.isVisible()) {
      await authorizeButton.click();
    }
  } catch (e) {
    console.log('No authorization prompt displayed, continuing with the flow.');
  }

  // Step 8: Verify that the user is redirected back to the Roost application
  await page.waitForURL('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');

  // Step 9: Check that the user lands on their dashboard and sees relevant data
  const dashboardHeader = page.locator('h1:has-text("Dashboard")'); // Adjust selector as needed
  await expect(dashboardHeader).toBeVisible();
  const userDataSection = page.locator('#user-data'); // Adjust selector as needed for user-specific data
  await expect(userDataSection).toBeVisible();

  console.log('Test completed: User successfully logged in with GitHub and accessed the dashboard.');
});