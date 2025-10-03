import { test, expect } from '@playwright/test';

test('Verify Login with GitHub Authentication', async ({ page }) => {
  // Step 1: Navigate to the Roost login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  
  // Step 2: Verify the presence of the GitHub authentication link
  const githubAuthLink = page.locator("//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]");
  await expect(githubAuthLink).toBeVisible();
  console.log('GitHub authentication link is visible.');

  // Step 3: Click on the GitHub authentication link
  await githubAuthLink.click();
  console.log('Clicked on GitHub authentication link.');

  // Step 4: Wait for redirection to GitHub's login page
  await page.waitForURL('https://github.com/login');
  await expect(page).toHaveURL('https://github.com/login');
  console.log('Redirected to GitHub login page.');

  // Step 5: Enter valid credentials and submit
  try {
    const usernameField = page.locator('input[name="login"]');
    const passwordField = page.locator('input[name="password"]');
    const signInButton = page.locator('input[type="submit"][value="Sign in"]');

    // Fill in credentials
    await usernameField.fill('your-github-username'); // Replace with actual username
    await passwordField.fill('your-github-password'); // Replace with actual password
    console.log('Filled in GitHub credentials.');

    // Click the sign-in button
    await signInButton.click();
    console.log('Clicked Sign in on GitHub login page.');
  } catch (error) {
    console.error('Error during GitHub login:', error);
    throw error;
  }

  // Step 6: Wait for redirection back to the Roost dashboard page
  await page.waitForURL('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Redirected back to Roost dashboard page.');

  // Step 7: Verify user is successfully logged in by checking dashboard elements
  const dashboardElement = page.locator('div.dashboard'); // Replace with actual stable selector for a dashboard element
  await expect(dashboardElement).toBeVisible();
  console.log('Verified dashboard elements are visible. User is successfully logged in.');

  // Error handling for edge cases
  try {
    const errorBanner = page.locator('div.error-banner'); // Replace with actual error banner selector if any exists
    if (await errorBanner.count() > 0) {
      console.error('Error banner detected:', await errorBanner.textContent());
    }
  } catch (error) {
    console.error('Error handling edge cases:', error);
  }
});