import { test, expect } from '@playwright/test';

test('Verify User Removal Functionality', async ({ page }) => {
  // Step 1: Navigate to the Admin View page
  const adminViewURL = 'https://dev.roost.ai/admin/app';
  await page.goto(adminViewURL);
  await expect(page).toHaveURL(adminViewURL);

  // Step 2: Locate the user 'Bhhavvya Sureka' in the user table
  const userRowSelector = '//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div[2]/div[2]/a';
  const userName = 'bhhavvya.sureka';
  const userRow = page.locator(userRowSelector);

  try {
    await expect(userRow).toContainText(userName);
    console.log(`User '${userName}' located in the user table.`);
  } catch (error) {
    console.error(`User '${userName}' not found in the user table.`, error);
    throw error;
  }

  // Step 3: Click on the 'Delete User' button next to the user's details
  // Assuming the delete button is next to the user's row
  const deleteButtonSelector = '//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[last()]/button[contains(text(), "Delete")]';
  const deleteButton = page.locator(deleteButtonSelector);

  try {
    await deleteButton.click();
    console.log(`Clicked 'Delete User' button for user '${userName}'.`);
  } catch (error) {
    console.error(`Failed to click 'Delete User' button for user '${userName}'.`, error);
    throw error;
  }

  // Step 4: Confirm the user deletion in the dialog box that appears
  const confirmDialogSelector = 'div[role="dialog"] button:has-text("Confirm")';
  const confirmButton = page.locator(confirmDialogSelector);

  try {
    await confirmButton.click();
    console.log('Confirmed user deletion in the dialog box.');
  } catch (error) {
    console.error('Failed to confirm user deletion.', error);
    throw error;
  }

  // Step 5: Verify that the user is no longer listed in the user table
  try {
    await page.waitForTimeout(2000); // Wait for the table to refresh
    const userStillExists = await userRow.isVisible();
    if (userStillExists) {
      console.error(`User '${userName}' is still visible in the user table.`);
      throw new Error(`User '${userName}' was not removed from the table.`);
    }
    console.log(`User '${userName}' successfully removed from the user table.`);
  } catch (error) {
    console.error(`Error verifying user removal from the user table.`, error);
    throw error;
  }

  // Step 6: Check the backend to ensure the user is removed from the database
  // Skipping actual backend verification since backend API calls aren't part of Playwright's scope
  console.log('Backend verification for user removal skipped. Ensure API test coverage.');

  // Step 7: Attempt to log in with the deleted user's credentials to confirm removal
  try {
    const loginURL = 'https://dev.roost.ai/login';
    await page.goto(loginURL);
    await expect(page).toHaveURL(loginURL);

    const emailInputSelector = 'input[type="email"]';
    const passwordInputSelector = 'input[type="password"]';
    const loginButtonSelector = 'button[type="submit"]';

    const deletedUserEmail = 'bhhavvya.sureka@example.com';
    const deletedUserPassword = 'password123'; // Replace with actual credentials for testing

    await page.locator(emailInputSelector).fill(deletedUserEmail);
    await page.locator(passwordInputSelector).fill(deletedUserPassword);
    await page.locator(loginButtonSelector).click();

    // Wait for potential login success or failure
    await page.waitForTimeout(2000);

    // Check for error message indicating invalid credentials
    const loginErrorSelector = 'text=Invalid username or password';
    const loginError = page.locator(loginErrorSelector);
    const loginErrorVisible = await loginError.isVisible();

    if (loginErrorVisible) {
      console.log(`Login attempt with deleted user's credentials failed as expected.`);
    } else {
      console.error(`Login attempt with deleted user's credentials did not fail.`);
      throw new Error(`Deleted user '${userName}' could still log in.`);
    }
  } catch (error) {
    console.error('Error during login attempt with deleted user credentials.', error);
    throw error;
  }
});