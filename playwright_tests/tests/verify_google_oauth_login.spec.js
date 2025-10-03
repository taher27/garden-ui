const { test, expect } = require('@playwright/test');

test('Verify Google OAuth Login', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');

  // Verify the page URL
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 2: Locate and click the 'Sign in with Google' button
  try {
    const googleSignInButton = page.locator("//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]");
    await expect(googleSignInButton).toBeVisible();
    await googleSignInButton.click();
    console.log('Clicked the "Sign in with Google" button');
  } catch (error) {
    console.error('Error locating or clicking the "Sign in with Google" button:', error);
    throw error;
  }

  // Step 3: Verify redirection to the Google OAuth page
  await page.waitForURL('https://accounts.google.com/o/oauth2/v2/auth');
  await expect(page).toHaveURL('https://accounts.google.com/o/oauth2/v2/auth');
  console.log('Verified redirection to Google OAuth page');

  // Step 4: Enter valid Google account credentials (email and password)
  try {
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();
    await emailInput.fill('testuser@example.com');
    await page.locator('button:has-text("Next")').click();
    console.log('Entered email and clicked Next');

    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.waitFor({ timeout: 5000 }); // Wait for password field
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('TestPassword123');
    await page.locator('button:has-text("Next")').click();
    console.log('Entered password and clicked Next');
  } catch (error) {
    console.error('Error entering Google account credentials:', error);
    throw error;
  }

  // Step 5: Complete two-factor authentication if prompted
  try {
    const twoFactorInput = page.locator('input[type="text"]');
    if (await twoFactorInput.count() > 0) {
      await twoFactorInput.fill('123456'); // Replace with valid 2FA code
      await page.locator('button:has-text("Verify")').click();
      console.log('Completed two-factor authentication');
    }
  } catch (error) {
    console.log('No two-factor authentication required or error completing it:', error);
  }

  // Step 6: Consent to the requested permissions for the Roost application
  try {
    const consentButton = page.locator('button:has-text("Allow")');
    await expect(consentButton).toBeVisible();
    await consentButton.click();
    console.log('Consented to requested permissions');
  } catch (error) {
    console.error('Error consenting to permissions:', error);
    throw error;
  }

  // Step 7: Verify redirection back to the dashboard
  await page.waitForURL('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Verified redirection back to the Roost dashboard');

  // Step 8: Check that the user is logged in by verifying the presence of a user-specific element
  try {
    const userSpecificElement = page.locator('.user-profile'); // Replace with actual selector for user-specific element
    await expect(userSpecificElement).toBeVisible();
    console.log('Verified user is logged in by checking user-specific element');
  } catch (error) {
    console.error('Error verifying user-specific element on the dashboard:', error);
    throw error;
  }
});