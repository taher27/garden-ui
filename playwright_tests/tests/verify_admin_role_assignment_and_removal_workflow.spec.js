import { test, expect } from '@playwright/test';

test('Verify Admin Role Assignment and Removal Workflow', async ({ page }) => {
  // Step 1: Navigate to the Admin dashboard
  const adminDashboardUrl = 'https://dev.roost.ai/admin/app';
  await page.goto(adminDashboardUrl);

  // Verify the page has loaded correctly
  await expect(page).toHaveURL(adminDashboardUrl);

  // Step 2: Navigate to the Admin tab
  try {
    const adminTab = page.locator('[data-testid="admin-tab"]');
    await expect(adminTab).toBeVisible();
    await adminTab.click();
    console.log('Navigated to the Admin tab.');
  } catch (error) {
    console.error('Error navigating to the Admin tab:', error);
    throw error;
  }

  // Step 3: Locate the user 'bhhavya.sureka' in the user table
  const userRowLocator = page.locator("//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div[2]/div[2]/a[text()='bhhavya.sureka']");
  try {
    await expect(userRowLocator).toBeVisible();
    console.log('Located user "bhhavya.sureka" in the user table.');
  } catch (error) {
    console.error('Error locating the user "bhhavya.sureka":', error);
    throw error;
  }

  // Step 4: Click the 'Remove Admin' button next to the user 'bhhavya.sureka'
  try {
    const removeAdminButton = userRowLocator.locator('xpath=../../../../td/button[contains(text(), "Remove Admin")]');
    await expect(removeAdminButton).toBeVisible();
    await removeAdminButton.click();
    console.log('Clicked "Remove Admin" button.');
  } catch (error) {
    console.error('Error clicking "Remove Admin" button:', error);
    throw error;
  }

  // Step 5: Verify a confirmation prompt appears and click 'Confirm'
  try {
    const confirmationPrompt = page.locator('text="Are you sure you want to remove admin role?"');
    await expect(confirmationPrompt).toBeVisible();
    const confirmButton = page.locator('button:has-text("Confirm")');
    await confirmButton.click();
    console.log('Confirmed role removal.');
  } catch (error) {
    console.error('Error handling confirmation prompt:', error);
    throw error;
  }

  // Step 6: Verify the user is no longer an admin
  try {
    await page.waitForTimeout(1000); // Wait for the table to refresh
    const userRoleColumn = userRowLocator.locator('xpath=../../../../td[contains(@class, "role-column")]');
    await expect(userRoleColumn).not.toContainText('Admin');
    console.log('Verified user "bhhavya.sureka" is no longer an admin.');
  } catch (error) {
    console.error('Error verifying role removal:', error);
    throw error;
  }

  // Step 7: Locate the user again and click the 'Make Admin' button
  try {
    const makeAdminButton = userRowLocator.locator('xpath=../../../../td/button[contains(text(), "Make Admin")]');
    await expect(makeAdminButton).toBeVisible();
    await makeAdminButton.click();
    console.log('Clicked "Make Admin" button.');
  } catch (error) {
    console.error('Error clicking "Make Admin" button:', error);
    throw error;
  }

  // Step 8: Verify a confirmation prompt appears and click 'Confirm'
  try {
    const confirmationPrompt = page.locator('text="Are you sure you want to assign admin role?"');
    await expect(confirmationPrompt).toBeVisible();
    const confirmButton = page.locator('button:has-text("Confirm")');
    await confirmButton.click();
    console.log('Confirmed role assignment.');
  } catch (error) {
    console.error('Error handling confirmation prompt:', error);
    throw error;
  }

  // Step 9: Verify the user role is updated to 'Admin'
  try {
    await page.waitForTimeout(1000); // Wait for the table to refresh
    const userRoleColumn = userRowLocator.locator('xpath=../../../../td[contains(@class, "role-column")]');
    await expect(userRoleColumn).toContainText('Admin');
    console.log('Verified user "bhhavya.sureka" is now an admin.');
  } catch (error) {
    console.error('Error verifying role assignment:', error);
    throw error;
  }

  console.log('Test completed successfully.');
});