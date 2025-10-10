import 'dotenv/config';
import { config } from 'dotenv';
import path from 'path';

// Load environment variables from the parent directory
config({ path: path.resolve(__dirname, '../.env') });

export async function login(page, username = process.env.USERNAME, password = process.env.PASSWORD) {
  try {
    // Step 1: Navigate to the login page
    const loginPageURL = process.env.LOGIN_URL || 'https://https//v18.roost.ai/login';
    await page.goto(loginPageURL);
    console.log(`Navigated to login page: ${loginPageURL}`);

    // Step 2: Locate and verify the username input field
    const usernameSelector = 'input[name="username"]'; // Replace with the actual selector if provided
    await page.waitForSelector(usernameSelector, { state: 'visible' });
    console.log('Username input field is visible and ready.');

    // Step 3: Locate and verify the password input field
    const passwordSelector = 'input[name="password"]'; // Replace with the actual selector if provided
    await page.waitForSelector(passwordSelector, { state: 'visible' });
    console.log('Password input field is visible and ready.');

    // Step 4: Enter valid credentials and submit
    const loginButtonSelector = 'button[type="submit"]'; // Replace with the actual selector if provided
    await page.fill(usernameSelector, username);
    await page.fill(passwordSelector, password);
    await page.click(loginButtonSelector);
    console.log('Entered credentials and clicked the login button.');

    // Step 5: Verify successful authentication
    const postLoginURL = process.env.POST_LOGIN_URL || 'https://https//v18.roost.ai/dashboard';
    await page.waitForURL(postLoginURL, { timeout: 10000 });
    console.log('Successfully redirected to the authenticated dashboard.');

    // Optional verification point for logout button or authenticated state
    const logoutButtonSelector = 'button.logout'; // Replace with the actual selector if provided
    await page.waitForSelector(logoutButtonSelector, { state: 'visible' });
    console.log('Logout button is visible. Login was successful.');
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
}