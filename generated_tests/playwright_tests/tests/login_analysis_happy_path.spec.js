import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Successful Login - Valid Credentials Authentication', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto(process.env.LOGIN_URL);
  await expect(page).toHaveURL('https://aahanashopeinternational2.my.salesforce.com/login/');

  // Step 2: Enter valid credentials
  const usernameField = page.locator('#username');
  const passwordField = page.locator('#password');
  await usernameField.fill(process.env.USERNAME);
  await passwordField.fill(process.env.PASSWORD);

  // Step 3: Submit login form
  const loginButton = page.locator('#Login');
  await loginButton.click();

  // Step 4: Verify successful login
  await expect(page).toHaveURL('https://aahanashopeinternational2.my.salesforce.com/_ui/identity/verification/method/EmailVerificationFinishUi/e');
  await expect(page).toHaveTitle(/Verify Your Identity \| Salesforce/);
});