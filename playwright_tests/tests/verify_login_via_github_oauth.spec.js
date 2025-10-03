import { test, expect } from '@playwright/test';

test('Verify Login via GitHub OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Step 2: Verify the page loaded correctly
  await expect(page).toHaveURL(loginPageURL);

  // Step 3: Locate the GitHub OAuth login button using the stable selector
  const gitHubLoginButton = page.locator(
    "//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]"
  );
  await expect(gitHubLoginButton).toBeVisible();

  // Step 4: Click on the GitHub OAuth login button
  await gitHubLoginButton.click();

  // Step 5: Ensure the browser is redirected to the GitHub OAuth login page
  const gitHubOAuthURL = 'https://github.com/login';
  await page.waitForURL(gitHubOAuthURL);
  await expect(page).toHaveURL(new RegExp(`${gitHubOAuthURL}.*`));

  // Step 6: Enter valid GitHub account credentials and submit
  const usernameField = page.locator('input#login_field');
  const passwordField = page.locator('input#password');
  const signInButton = page.locator("input[type='submit'][value='Sign in']");

  await expect(usernameField).toBeVisible();
  await usernameField.fill('your-github-username'); // Replace with valid GitHub username
  await expect(passwordField).toBeVisible();
  await passwordField.fill('your-github-password'); // Replace with valid GitHub password
  await signInButton.click();

  // Step 7: Verify redirection back to the application dashboard
  const dashboardURL = 'https://dev.roost.ai/dashboard';
  await page.waitForURL(dashboardURL);
  await expect(page).toHaveURL(dashboardURL);

  // Step 8: Verify the user's session is authenticated
  const authToken = await page.evaluate(() => localStorage.getItem('auth_token'));
  expect(authToken).not.toBeNull(); // Ensure a valid token exists

  // Step 9: Verify the presence of user-specific data on the dashboard
  const userProfileSection = page.locator('.user-profile');
  await expect(userProfileSection).toBeVisible();
  await expect(userProfileSection).toContainText('Welcome, your-github-username'); // Adjust text based on expected user data

  // Additional Logging for Debugging
  console.log('GitHub OAuth login test completed successfully!');
});