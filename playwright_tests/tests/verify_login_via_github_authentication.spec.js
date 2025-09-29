import { test, expect } from '@playwright/test';

test('Verify Login via GitHub Authentication', async ({ page }) => {
  // Step 1: Navigate to the Roost login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Step 2: Verify the login page URL
  await expect(page).toHaveURL(loginPageURL);

  // Step 3: Locate the GitHub login button using the provided stable selector
  const githubLoginButton = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");

  // Assert that the GitHub login button is visible
  await expect(githubLoginButton).toBeVisible();

  // Step 4: Click on the GitHub login button
  await githubLoginButton.click();

  // Step 5: Wait for redirection to GitHub authentication page
  const githubAuthURL = 'https://github.com/login';
  await page.waitForURL(githubAuthURL);

  // Step 6: Verify the GitHub authentication page URL
  await expect(page).toHaveURL(new RegExp('^https://github\\.com/login'));

  // Step 7: Authenticate using valid GitHub credentials
  // Fill in the username and password fields on the GitHub login form (replace these placeholders with valid credentials)
  const githubUsername = 'your-github-username';
  const githubPassword = 'your-github-password';

  await page.locator('input[name="login"]').fill(githubUsername);
  await page.locator('input[name="password"]').fill(githubPassword);

  // Click the "Sign in" button
  await page.locator('input[name="commit"]').click();

  // Step 8: Wait for redirection back to the Roost dashboard
  const dashboardURL = 'https://dev.roost.ai';
  await page.waitForURL(dashboardURL);

  // Step 9: Verify the dashboard URL
  await expect(page).toHaveURL(dashboardURL);

  // Step 10: Ensure the user's name is displayed on the dashboard
  // Replace 'Your Name' with the actual name associated with the test GitHub account
  const userName = 'Your Name';
  const userNameLocator = page.locator(`text=${userName}`);

  // Assert that the user's name is visible
  await expect(userNameLocator).toBeVisible();

  // Log the success of the test case
  console.log('GitHub authentication and dashboard access verified successfully.');
});