import { test, expect } from '@playwright/test';

test('Verify Login with Google Authentication', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  
  // Verify that the URL is correct
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Verify the presence of the Google authentication link using its stable selector
  const googleAuthLink = page.locator(
    "//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]"
  );
  await expect(googleAuthLink).toBeVisible();

  // Step 3: Click on the Google authentication link
  await googleAuthLink.click();

  // Step 4: Wait for the redirection to Google's login page
  await page.waitForURL('https://accounts.google.com/*');
  await expect(page).toHaveURL(/https:\/\/accounts\.google\.com\/.*/);

  // Step 5: On the Google login page, enter valid credentials and submit
  try {
    const emailInput = page.locator('input[type="email"]');
    const nextButton = page.locator('//button[contains(@type, "button") and contains(., "Next")]');
    
    await expect(emailInput).toBeVisible();
    await emailInput.fill('valid-email@gmail.com'); // Replace with valid Google email
    await nextButton.click();

    // Wait for password input to appear
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('valid-password'); // Replace with valid Google password
    await nextButton.click(); // Submit the form
  } catch (error) {
    console.error('Error handling Google login form:', error);
    throw error;
  }

  // Step 6: Wait for the redirection back to the Roost dashboard page
  await page.waitForURL('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');

  // Step 7: Verify that the user is successfully logged in by checking the presence of dashboard elements
  const dashboardElement = page.locator('div.dashboard'); // Replace with actual dashboard selector
  await expect(dashboardElement).toBeVisible();

  console.log('User successfully logged in and dashboard is visible');
});