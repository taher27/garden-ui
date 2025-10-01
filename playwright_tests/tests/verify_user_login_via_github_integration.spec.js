import { test, expect } from '@playwright/test';

test('Verify User Login via GitHub Integration', async ({ page, context }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Verify the visibility of the GitHub login button
  const githubLoginButton = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");
  await expect(githubLoginButton).toBeVisible();

  // Step 3: Click on the GitHub login button
  await githubLoginButton.click();

  // Step 4: Wait for the GitHub authentication interface to load
  await page.waitForURL('https://github.com/login/oauth/authorize*', { timeout: 10000 });

  // Step 5: Enter GitHub credentials if prompted
  const usernameField = page.locator('input#login_field');
  const passwordField = page.locator('input#password');
  const signInButton = page.locator('input[name="commit"]');

  if (await usernameField.isVisible()) {
    await usernameField.fill('your-github-username'); // Replace with valid GitHub username
    await passwordField.fill('your-github-password'); // Replace with valid GitHub password
    await signInButton.click();
  }

  // Step 6: Confirm authentication and wait for redirection
  await page.waitForNavigation({ url: 'https://dev.roost.ai' });

  // Step 7: Verify redirection to the dashboard
  await expect(page).toHaveURL('https://dev.roost.ai');

  // Step 8: Assert the presence of user-specific elements on the dashboard
  const userElement = page.locator('text=Welcome'); // Adjust the selector to match a user-specific dashboard element
  await expect(userElement).toBeVisible();

  // Optional: Additional assertions to validate dashboard content
  const dashboardHeader = page.locator('h1:has-text("Dashboard")'); // Replace with a robust selector for dashboard header
  await expect(dashboardHeader).toBeVisible();
});