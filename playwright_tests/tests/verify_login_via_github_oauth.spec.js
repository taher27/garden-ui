import { test, expect } from '@playwright/test';

test('Verify Login via GitHub OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageUrl = 'https://dev.roost.ai/login';
  await page.goto(loginPageUrl);

  // Verify we are on the correct login page
  await expect(page).toHaveURL(loginPageUrl);

  // Step 2: Locate and click on the GitHub OAuth login button
  const githubOAuthButtonSelector = "//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]";
  const githubOAuthButton = page.locator(githubOAuthButtonSelector);

  // Ensure the GitHub OAuth button is visible and clickable
  await expect(githubOAuthButton).toBeVisible();
  await githubOAuthButton.click();

  // Step 3: Verify that the user is redirected to the GitHub authentication page
  const githubAuthPageUrl = 'https://github.com/login/oauth/authorize';
  await page.waitForURL(githubAuthPageUrl, { waitUntil: 'load' });
  await expect(page).toHaveURL(githubAuthPageUrl);

  // Step 4: Enter valid GitHub credentials and submit
  try {
    const usernameField = page.locator('input[name="login"]');
    const passwordField = page.locator('input[name="password"]');
    const signInButton = page.locator('input[name="commit"]');

    // Wait for the login form to be visible
    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(signInButton).toBeVisible();

    // Fill in the credentials (replace with valid credentials for actual testing)
    await usernameField.fill('your-github-username');
    await passwordField.fill('your-github-password');

    // Click the sign-in button
    await signInButton.click();
  } catch (error) {
    console.error('Error during GitHub login form interaction:', error);
    throw error;
  }

  // Step 5: Check if authentication is successful and if the user is redirected back to Roost.ai
  const postAuthRedirectUrl = 'https://dev.roost.ai/';
  await page.waitForURL(postAuthRedirectUrl, { waitUntil: 'load' });
  await expect(page).toHaveURL(postAuthRedirectUrl);

  // Step 6: Verify that the user is now logged in and can access the dashboard features
  try {
    const dashboardElement = page.locator('div.dashboard'); // Replace with the actual selector for a dashboard element
    await expect(dashboardElement).toBeVisible();
    console.log('Dashboard features are accessible after login.');
  } catch (error) {
    console.error('Dashboard verification failed:', error);
    throw error;
  }
});