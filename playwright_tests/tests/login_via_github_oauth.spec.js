import { test, expect } from '@playwright/test';

test('Login via GitHub OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Step 2: Verify the presence of the GitHub OAuth login option
  const githubLoginSelector = "//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]";
  const githubLoginLink = page.locator(githubLoginSelector);
  await expect(githubLoginLink).toBeVisible();

  // Step 3: Click on the GitHub OAuth login link
  await githubLoginLink.click();

  // Step 4: Wait for the GitHub login page to load
  const githubLoginPageURL = 'https://github.com/login';
  await page.waitForURL(githubLoginPageURL);

  // Step 5: Enter valid GitHub account credentials (username and password)
  const usernameInput = page.locator('input[name="login"]'); // GitHub username field
  const passwordInput = page.locator('input[name="password"]'); // GitHub password field
  const signInButton = page.locator('input[type="submit"]'); // GitHub sign-in button

  const githubUsername = 'your-github-username'; // Replace with valid GitHub username
  const githubPassword = 'your-github-password'; // Replace with valid GitHub password

  await usernameInput.fill(githubUsername);
  await passwordInput.fill(githubPassword);

  // Step 6: Authorize the application on the GitHub page
  await signInButton.click();

  // Step 7: Verify that the user is redirected back to the login page
  const redirectBackToLoginURL = 'https://dev.roost.ai/login';
  await page.waitForURL(redirectBackToLoginURL);

  // Step 8: Verify the presence of a session token indicating successful login
  const sessionTokenLocator = page.locator('[data-test-id="session-token"]'); // Example selector for session token
  await expect(sessionTokenLocator).toBeVisible();

  // Step 9: Confirm that the user is redirected to the primary application dashboard
  const dashboardURL = 'https://dev.roost.ai';
  await page.waitForURL(dashboardURL);
  await expect(page).toHaveURL(dashboardURL);

  console.log('GitHub OAuth login workflow completed successfully.');
});