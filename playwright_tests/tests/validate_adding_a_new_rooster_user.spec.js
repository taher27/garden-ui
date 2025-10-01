import { test, expect } from '@playwright/test';

test('Validate Adding a New Rooster User', async ({ page }) => {
  // Step 1: Navigate to the Admin Dashboard page
  await page.goto('https://dev.roost.ai/admin/app');
  await expect(page).toHaveURL('https://dev.roost.ai/admin/app');

  // Step 2: Locate and click on the 'Add Roosters' button
  const addRoostersButton = page.locator('button:has-text("Add Roosters")');
  await expect(addRoostersButton).toBeVisible(); // Verify button is visible
  await addRoostersButton.click();

  // Step 3: Verify that the user creation form is displayed
  const userCreationForm = page.locator('form[data-testid="user-creation-form"]');
  await expect(userCreationForm).toBeVisible(); // Verify form is visible

  // Step 4: Fill out the username field with 'new_user'
  const usernameField = page.locator('input[name="username"]');
  await expect(usernameField).toBeVisible(); // Verify username field is visible
  await usernameField.fill('new_user'); // Fill out the username field

  // Step 5: Fill out the email field with 'new_user@example.com'
  const emailField = page.locator('input[name="email"]');
  await expect(emailField).toBeVisible(); // Verify email field is visible
  await emailField.fill('new_user@example.com'); // Fill out the email field

  // Step 6: Select 'Developer' from the role dropdown
  const roleDropdown = page.locator('select[name="role"]');
  await expect(roleDropdown).toBeVisible(); // Verify dropdown is visible
  await roleDropdown.selectOption('Developer'); // Select the 'Developer' option

  // Step 7: Click the 'Submit' button to add the user
  const submitButton = page.locator('button[type="submit"]:has-text("Submit")');
  await expect(submitButton).toBeVisible(); // Verify submit button is visible
  await submitButton.click();

  // Step 8: Verify that a success message appears after submission
  const successMessage = page.locator('div.alert-success');
  await expect(successMessage).toBeVisible(); // Verify success message is visible
  await expect(successMessage).toContainText('User added successfully'); // Verify the success message text

  // Step 9: Check that the new user 'new_user' is visible in the user list
  const userList = page.locator('table[data-testid="user-list"]');
  await expect(userList).toBeVisible(); // Verify the user list table is visible
  const newUserRow = userList.locator('tr:has-text("new_user")');
  await expect(newUserRow).toBeVisible(); // Verify the new user is in the user list
});