import { test, expect } from '@playwright/test';

test('Verify GitHub OAuth Login', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageUrl = 'https://dev.roost.ai/login';
  await page.goto(loginPageUrl);

  // Verify the page loaded correctly
  await expect(page).toHaveURL(loginPageUrl);

  // Step 2: Locate and click the 'Sign in with GitHub' button
  const signInWithGitHubButton = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");
  await expect(signInWithGitHubButton).toBeVisible();
  await signInWithGitHubButton.click();

  // Step 3: Verify redirection to the GitHub OAuth page
  const gitHubOAuthUrl = 'https://github.com/login/oauth/authorize';
  await page.waitForURL(gitHubOAuthUrl);
  await expect(page).toHaveURL(gitHubOAuthUrl);

  // Step 4: Enter valid GitHub account credentials
  const emailField = page.locator('input[name="login"]');
  const passwordField = page.locator('input[name="password"]');
  const signInButton = page.locator('input[type="submit"]');

  await expect(emailField).toBeVisible();
  await emailField.fill('your-github-email@example.com');

  await expect(passwordField).toBeVisible();
  await passwordField.fill('your-github-password');

  await expect(signInButton).toBeVisible();
  await signInButton.click();

  // Step 5: Handle two-factor authentication if prompted
  try {
    const twoFactorField = page.locator('input[name="otp"]');
    if (await twoFactorField.isVisible()) {
      await expect(twoFactorField).toBeVisible();
      await twoFactorField.fill('your-2fa-code'); // Replace with the actual 2FA code or method to retrieve dynamic codes
      const verifyButton = page.locator('button[type="submit"]');
      await expect(verifyButton).toBeVisible();
      await verifyButton.click();
    }
  } catch (error) {
    console.log('Two-factor authentication step not encountered:', error);
  }

  // Step 6: Consent to requested permissions for the Roost application
  try {
    const authorizeButton = page.locator('button[name="authorize"]');
    if (await authorizeButton.isVisible()) {
      await expect(authorizeButton).toBeVisible();
      await authorizeButton.click();
    }
  } catch (error) {
    console.log('Authorization step not encountered:', error);
  }

  // Step 7: Verify redirection back to the dashboard
  const dashboardUrl = 'https://dev.roost.ai';
  await page.waitForURL(dashboardUrl);
  await expect(page).toHaveURL(dashboardUrl);

  // Step 8: Check user-specific element on the dashboard
  const userSpecificElement = page.locator('.user-profile'); // Replace with actual selector for user-specific element
  await expect(userSpecificElement).toBeVisible();

  console.log('GitHub OAuth login test completed successfully.');
});