import { test, expect } from '@playwright/test';

test('Verify GitHub OAuth Login Flow', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Verify the login page loaded correctly
  await expect(page).toHaveURL(loginPageURL);

  // Step 2: Locate and click on the GitHub login button
  const gitHubLoginButtonSelector = "//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]";
  const gitHubLoginButton = page.locator(gitHubLoginButtonSelector);

  // Ensure the GitHub login button is visible and clickable
  await expect(gitHubLoginButton).toBeVisible();
  await gitHubLoginButton.click();

  // Step 3: Verify redirection to the GitHub OAuth authentication page
  const gitHubAuthPageURL = 'https://github.com/login';
  await page.waitForURL(new RegExp(`^${gitHubAuthPageURL}`));
  expect(page.url()).toContain(gitHubAuthPageURL);

  // Step 4: Enter valid GitHub credentials and authorize access
  const gitHubUsernameSelector = 'input#login_field';
  const gitHubPasswordSelector = 'input#password';
  const authorizeButtonSelector = 'input[type="submit"]';

  // Fill in GitHub credentials
  const validGitHubUsername = 'your-valid-github-username';
  const validGitHubPassword = 'your-valid-github-password';

  await page.locator(gitHubUsernameSelector).fill(validGitHubUsername);
  await page.locator(gitHubPasswordSelector).fill(validGitHubPassword);

  // Click the "Sign in" or "Authorize" button
  await page.locator(authorizeButtonSelector).click();

  // Step 5: Verify redirection back to the Roost.ai platform
  const roostRedirectURL = 'https://dev.roost.ai/';
  await page.waitForURL(roostRedirectURL);
  await expect(page).toHaveURL(roostRedirectURL);

  // Step 6: Check if the user is successfully logged in and redirected to the primary dashboard
  const dashboardURL = 'https://dev.roost.ai';
  await page.waitForURL(dashboardURL);
  await expect(page).toHaveURL(dashboardURL);

  // Verify the user sees the primary dashboard with no errors
  const dashboardSelector = 'div.dashboard'; // Replace with the actual dashboard selector
  await expect(page.locator(dashboardSelector)).toBeVisible();
  console.log('User is successfully logged in and the dashboard is displayed.');
});