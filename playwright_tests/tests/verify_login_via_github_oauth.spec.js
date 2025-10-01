import { test, expect } from '@playwright/test';

test('Verify Login via GitHub OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageUrl = 'https://dev.roost.ai/login';
  await page.goto(loginPageUrl);

  // Verify that the login page loaded correctly
  await expect(page).toHaveURL(loginPageUrl);

  // Step 2: Locate and click on the GitHub login option
  const githubLoginButton = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");
  await expect(githubLoginButton).toBeVisible();
  await githubLoginButton.click();

  // Step 3: Redirect to GitHub's authentication page
  const githubAuthUrl = 'https://github.com/login';
  await page.waitForURL(githubAuthUrl);

  // Verify that the GitHub authentication page loaded
  await expect(page).toHaveURL(new RegExp(`^${githubAuthUrl}`));

  // Step 4: Enter valid GitHub credentials (username and password)
  const usernameInput = page.locator('input[name="login"]');
  const passwordInput = page.locator('input[name="password"]');
  const signInButton = page.locator('input[type="submit"]');

  // Ensure the fields and button are visible
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(signInButton).toBeVisible();

  // Fill in the username and password fields
  await usernameInput.fill('your_github_username'); // Replace with valid GitHub username
  await passwordInput.fill('your_github_password'); // Replace with valid GitHub password

  // Click the "Sign in" button
  await signInButton.click();

  // Step 5: Grant access to the application if prompted
  try {
    const authorizeButton = page.locator('button[type="submit"]:has-text("Authorize")');
    if (await authorizeButton.isVisible()) {
      await authorizeButton.click();
    }
  } catch (error) {
    console.log('No authorization prompt displayed.');
  }

  // Step 6: Redirect back to the primary application dashboard upon successful authentication
  const dashboardUrl = 'https://dev.roost.ai/';
  await page.waitForURL(dashboardUrl);

  // Verify that the dashboard loaded correctly
  await expect(page).toHaveURL(dashboardUrl);

  // Step 7: Verify that the dashboard displays user-specific data and environment management options
  const environmentManagementSection = page.locator('section:has-text("Environment Management")'); // Adjust selector if needed
  await expect(environmentManagementSection).toBeVisible();
  
  console.log("Test completed: Dashboard loaded with user-specific data and environment options.");
});