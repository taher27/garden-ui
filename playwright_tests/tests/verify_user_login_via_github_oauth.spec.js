import { test, expect } from '@playwright/test';

test('Verify User Login via GitHub OAuth', async ({ page }) => {
  // Step 1: Navigate to the Roost login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login'); // Confirm we're on the correct page

  // Step 2: Locate the GitHub login button using its stable selector and click it
  const githubLoginButton = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");
  await expect(githubLoginButton).toBeVisible(); // Ensure the button is visible
  await githubLoginButton.click();

  // Step 3: Verify redirection to the GitHub OAuth authentication page
  await page.waitForURL('https://github.com/login');
  await expect(page).toHaveURL('https://github.com/login'); // Confirm redirection to GitHub OAuth page

  // Step 4: Enter valid GitHub account credentials
  const usernameField = page.locator('input#login_field'); // GitHub username/email field
  const passwordField = page.locator('input#password'); // GitHub password field
  const signInButton = page.locator('input[type="submit"]'); // GitHub "Sign in" button

  await expect(usernameField).toBeVisible(); // Ensure username field is visible
  await usernameField.fill('your-valid-github-username'); // Replace with valid GitHub username
  await expect(passwordField).toBeVisible(); // Ensure password field is visible
  await passwordField.fill('your-valid-github-password'); // Replace with valid GitHub password

  // Step 5: Click the "Sign in" button
  await expect(signInButton).toBeVisible(); // Ensure the sign-in button is visible
  await signInButton.click();

  // Step 6: Verify redirection back to Roost's dashboard
  await page.waitForURL('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai'); // Confirm redirection back to Roost

  // Step 7: Verify that the user is on the dashboard and logged in
  const dashboardHeader = page.locator('h1'); // Assuming the dashboard has an <h1> header
  await expect(dashboardHeader).toBeVisible(); // Confirm the dashboard is visible
  await expect(dashboardHeader).toContainText('Dashboard'); // Confirm the text matches expected value

  console.log('GitHub OAuth login and dashboard verification successful!');
});