import 'dotenv/config';
import { config } from 'dotenv';
import path from 'path';

// Load .env from parent directory
config({ path: path.resolve(__dirname, '../.env') });

export async function login(page, username = process.env.USERNAME, password = process.env.PASSWORD) {
  try {
    // Step 1: Navigate to the login page
    await page.goto(process.env.BASE_URL || 'https://dev.roost.ai/login');
    await page.waitForURL('https://dev.roost.ai/login'); // Verify correct page URL

    // Step 2: Click on the Okta login link (captured selector)
    const oktaLink = page.locator('a.okta');
    if (!(await oktaLink.isVisible())) {
      throw new Error('Okta login link not found on login page.');
    }
    await oktaLink.click();

    // Step 3: Wait for navigation to Okta provider page
    await page.waitForURL('https://dev-53854943.okta.com/');

    // Step 4: Enter username on Okta sign-in form
    const oktaUsernameField = page.locator('#okta-signin-username');
    if (!(await oktaUsernameField.isVisible())) {
      throw new Error('Okta username field not found.');
    }
    await oktaUsernameField.fill(username);

    // Step 5: Enter password on Okta sign-in form
    const oktaPasswordField = page.locator('#okta-signin-password');
    if (!(await oktaPasswordField.isVisible())) {
      throw new Error('Okta password field not found.');
    }
    await oktaPasswordField.fill(password);

    // Step 6: Click the Okta sign-in button
    const oktaSubmitButton = page.locator('#okta-signin-submit');
    if (!(await oktaSubmitButton.isVisible())) {
      throw new Error('Okta submit button not found.');
    }
    await oktaSubmitButton.click();

    // Step 7: Wait for navigation back to the application dashboard
    await page.waitForURL('https://dev.roost.ai/roostgpt/tests');

    // Step 8: Verify successful login state by checking if authenticated page is loaded
    const dashboardLoaded = await page.url() === 'https://dev.roost.ai/roostgpt/tests';
    if (!dashboardLoaded) {
      throw new Error('Login failed: Dashboard URL not reached after authentication.');
    }

  } catch (error) {
    throw new Error(`Login utility function failed: ${error.message}`);
  }
}