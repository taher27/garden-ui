import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Login Recovery - Forgot Password Workflow', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto(process.env.LOGIN_URL);
  await expect(page).toHaveURL('https://aahanashopeinternational2.my.salesforce.com/login/');

  // Step 2: Click 'Forgot Password'
  const forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
  await forgotPasswordLink.click();
  await expect(page).toHaveURL('https://login.salesforce.com/');

  // Step 3: Enter recovery email
  const emailInput = page.locator('#username');
  await emailInput.fill(process.env.USERNAME);

  // Step 4: Submit recovery request
  const submitButton = page.locator('#Login');
  await submitButton.click();

  // Note: Any additional recovery confirmation steps are not implemented as no further selectors or details are provided.
});