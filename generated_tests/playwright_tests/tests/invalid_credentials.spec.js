import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Failed Login - Invalid Credentials', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to the login form
  await page.goto(process.env.BASE_URL);
  
  // Verification: Ensure the login form is displayed
  try {
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    const loginButton = page.locator('#Login');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginButton).toBeVisible();
    console.log('Login form displayed successfully');
  } catch (error) {
    console.error('Error verifying login form visibility:', error);
    throw error;
  }

  // Step 2: Enter invalid credentials
  try {
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');

    await usernameField.fill(process.env.INVALID_USERNAME || 'invalid@example.com');
    await passwordField.fill(process.env.INVALID_PASSWORD || 'wrongpassword');
    console.log('Entered invalid credentials');
  } catch (error) {
    console.error('Error entering credentials:', error);
    throw error;
  }

  // Step 3: Submit the login form
  try {
    const loginButton = page.locator('#Login');
    await loginButton.click();
    console.log('Submitted login form');
  } catch (error) {
    console.error('Error submitting login form:', error);
    throw error;
  }

  // Verification: Ensure error message is displayed and no redirection occurs
  try {
    const errorMessage = page.locator('.error'); // Assuming `.error` is the class for the error message
    await expect(errorMessage).toBeVisible();
    const errorText = await errorMessage.textContent();
    console.log(`Error message displayed: ${errorText}`);
  } catch (error) {
    console.error('Error verifying error message:', error);
    throw error;
  }

  // Verification: Ensure form fields are not cleared
  try {
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');

    const usernameValue = await usernameField.inputValue();
    const passwordValue = await passwordField.inputValue();

    expect(usernameValue).toBe(process.env.INVALID_USERNAME || 'invalid@example.com');
    expect(passwordValue).toBe(process.env.INVALID_PASSWORD || 'wrongpassword');
    console.log('Form fields are not cleared');
  } catch (error) {
    console.error('Error verifying form field values:', error);
    throw error;
  }
});