import { test, expect } from '@playwright/test';

test('Verify Login via Google OAuth', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');

  // Verify the login page has loaded
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Locate and click on the Google OAuth login button
  try {
    const googleLoginButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
    await expect(googleLoginButton).toBeVisible(); // Ensure the button is visible
    await googleLoginButton.click(); // Click the Google OAuth button
  } catch (error) {
    console.error('Error clicking the Google OAuth login button:', error);
    throw error; // Fail the test if the button interaction fails
  }

  // Step 3: Verify redirection to the Google authentication page
  await page.waitForURL('https://accounts.google.com/o/oauth2/v2/auth', { timeout: 10000 });
  await expect(page).toHaveURL('https://accounts.google.com/o/oauth2/v2/auth');

  // Step 4: Enter valid Google account credentials and submit
  try {
    // Locate and fill the email field
    const emailField = page.locator('input[type="email"]');
    await expect(emailField).toBeVisible(); // Ensure the email field is visible
    await emailField.fill('testuser@gmail.com');

    // Click the "Next" button after entering the email
    const nextButton = page.locator('button:has-text("Next")');
    await expect(nextButton).toBeVisible(); // Ensure the "Next" button is visible
    await nextButton.click();

    // Wait for the password field to appear
    const passwordField = page.locator('input[type="password"]');
    await passwordField.waitFor({ timeout: 10000 });
    await expect(passwordField).toBeVisible(); // Ensure the password field is visible

    // Fill the password field
    await passwordField.fill('TestPassword123!');

    // Click the "Next" button to submit the credentials
    await nextButton.click();
  } catch (error) {
    console.error('Error during Google authentication:', error);
    throw error; // Fail the test if authentication steps fail
  }

  // Step 5: Check if authentication is successful and user is redirected back
  await page.waitForURL('https://dev.roost.ai', { timeout: 15000 });
  await expect(page).toHaveURL('https://dev.roost.ai');

  // Step 6: Verify user is logged in and dashboard features are accessible
  try {
    const dashboardElement = page.locator('div.dashboard'); // Assume the dashboard has a div with class "dashboard"
    await expect(dashboardElement).toBeVisible(); // Ensure the dashboard is visible to the user
    console.log('Login successful, user redirected to dashboard.');
  } catch (error) {
    console.error('Dashboard verification failed:', error);
    throw error; // Fail the test if the dashboard is not accessible
  }
});