import 'dotenv/config';
import { config } from 'dotenv';
import path from 'path';

// Load .env file from the parent directory
config({ path: path.resolve(__dirname, '../.env') });

export async function login(page, username = process.env.USERNAME, password = process.env.PASSWORD) {
  try {
    // Step 1: Navigate to the login page
    const loginURL = process.env.LOGIN_URL || "https://aahanashopeinternational2.my.salesforce.com/login";
    await page.goto(loginURL);
    await page.waitForURL("https://aahanashopeinternational2.my.salesforce.com/login/");
    console.log("Navigated to login page.");

    // Step 2: Enter valid credentials
    const usernameSelector = page.locator("#username");
    const passwordSelector = page.locator("#password");

    await usernameSelector.fill(username);
    console.log("Entered username.");

    await passwordSelector.fill(password);
    console.log("Entered password.");

    await page.waitForURL("https://login.salesforce.com/");
    console.log("Validated URL after entering credentials.");

    // Step 3: Submit login form
    const loginButtonSelector = page.locator("#Login");
    await loginButtonSelector.click();
    console.log("Clicked login button.");

    await page.waitForURL("https://aahanashopeinternational2.my.salesforce.com/_ui/identity/verification/method/EmailVerificationFinishUi/e");
    console.log("Validated URL after submitting login.");

    // Step 4: Verify successful login
    const verificationPageURL = "https://aahanashopeinternational2.my.salesforce.com/_ui/identity/verification/method/EmailVerificationFinishUi/e";
    await page.waitForURL(verificationPageURL);
    const pageTitle = await page.title();

    if (!pageTitle.includes("Verify Your Identity | Salesforce")) {
      throw new Error("Login failed: Verification page not reached.");
    }

    console.log("Login successful, verification page loaded.");

  } catch (error) {
    console.error("Login utility function failed:", error.message);
    throw error; // Re-throw the error for test execution
  }
}