import 'dotenv/config';
import { config } from 'dotenv';
import path from 'path';

// Load .env from parent directory
config({ path: path.resolve(__dirname, '../.env') });

export async function login(page, username = process.env.USERNAME, password = process.env.PASSWORD) {
  // Step 1: Navigate to the website homepage
  await page.goto(process.env.BASE_URL || "https://aahanashopeinternational2.my.salesforce.com/");
  await page.waitForURL("https://aahanashopeinternational2.my.salesforce.com/", { timeout: 10000 });
  
  // Verify homepage loads successfully (login form or button is visible)
  const usernameField = page.locator("#username");
  if (!(await usernameField.isVisible())) {
    throw new Error("Login page did not load successfully: Username field not found.");
  }

  // Step 2: Access the login form and verify fields
  // Username/email field
  if (!(await usernameField.isEditable())) {
    throw new Error("Username field is not editable.");
  }

  // Password field
  const passwordField = page.locator("#password");
  if (!(await passwordField.isVisible())) {
    throw new Error("Password field is not visible.");
  }

  // Login button
  const loginButton = page.locator("#Login");
  if (!(await loginButton.isEnabled())) {
    throw new Error("Login button is not enabled.");
  }

  // Step 3: Enter valid credentials
  await usernameField.fill(username); // Fill username
  await passwordField.fill(password); // Fill password

  // Step 4: Submit the login form
  await loginButton.click();

  // Step 5: Wait for navigation to the authenticated dashboard or welcome page
  await page.waitForNavigation({ timeout: 15000 });

  // Verify successful login by checking for post-login elements or URL
  const postLoginUrl = "https://aahanashopeinternational2.my.salesforce.com/home/home.jsp";
  await page.waitForURL(postLoginUrl, { timeout: 10000 });

  // Verify authenticated state by checking for a relevant post-login element
  const dashboardElement = page.locator("div[data-testid='dashboard']");
  if (!(await dashboardElement.isVisible())) {
    throw new Error("Login failed: Authenticated state not confirmed.");
  }
}