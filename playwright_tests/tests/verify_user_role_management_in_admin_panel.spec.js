import { test, expect } from '@playwright/test';

test('Verify User Role Management in Admin Panel', async ({ page }) => {
  // Step 1: Navigate to the Admin Panel login page
  await page.goto('https://dev.roost.ai/admin/app');
  await expect(page).toHaveURL('https://dev.roost.ai/admin/app');

  // Step 2: Log in as an admin user
  try {
    await page.locator('input[name="username"]').fill('admin_username'); // Replace with actual admin username
    await page.locator('input[name="password"]').fill('admin_password'); // Replace with actual admin password
    await page.locator('button[type="submit"]').click();
    // Verify successful login
    await expect(page).toHaveURL('https://dev.roost.ai/admin/app');
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }

  // Step 3: Navigate to the Admin tab
  try {
    const adminTab = page.locator('[data-testid="admin-tab"]');
    await adminTab.click();
    await expect(page).toHaveURL('https://dev.roost.ai/admin/app');
  } catch (error) {
    console.error('Error navigating to Admin tab:', error);
    throw error;
  }

  // Step 4: Locate the user 'bhhavya.sureka' in the user list
  const userRow = page.locator('//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr/td[1]/div/div[2]/div[2]/a[text()="bhhavya.sureka"]');
  await expect(userRow).toBeVisible();

  // Step 5: Click the 'Make Admin' button beside the user 'bhhavya.sureka'
  const makeAdminButton = page.locator('//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr/td[5]/button[text()="Make Admin"]');
  await makeAdminButton.click();

  // Step 6: Verify that the user role changes to 'Admin'
  const adminRoleIndicator = page.locator('//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr/td[4]');
  await expect(adminRoleIndicator).toHaveText('Admin');

  // Step 7: Click the 'Remove Admin' button beside the user 'bhhavya.sureka'
  const removeAdminButton = page.locator('//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr/td[5]/button[text()="Remove Admin"]');
  await removeAdminButton.click();

  // Step 8: Verify that the user role changes back to 'User'
  await expect(adminRoleIndicator).toHaveText('User');

  // Step 9: Click the 'Delete User' button beside the user 'bhhavya.sureka'
  const deleteUserButton = page.locator('//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr/td[6]/button[text()="Delete User"]');
  await deleteUserButton.click();

  // Step 10: Confirm deletion in the confirmation dialog
  const confirmDeletionButton = page.locator('button:has-text("Confirm")');
  await confirmDeletionButton.click();

  // Step 11: Verify that the user 'bhhavya.sureka' is removed from the user list
  await expect(userRow).toHaveCount(0);
});