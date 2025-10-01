import { test, expect } from '@playwright/test';

test('Verify Admin User Search and Permission Management', async ({ page }) => {
  // Step 1: Navigate to the Admin Dashboard page
  await page.goto('https://dev.roost.ai/admin/app');
  await expect(page).toHaveURL('https://dev.roost.ai/admin/app');
  
  // Step 2: Locate the user search input field and type the username
  const searchInput = page.locator('[data-testid="test"]'); // Selector for the search input field
  await searchInput.fill('bhhavya.sureka');
  
  // Step 3: Click the 'Apply' button to filter the results
  const applyButton = page.locator('button:has-text("Apply")'); // Inferring the button based on text
  await applyButton.click();
  
  // Step 4: Verify that the user 'bhhavya.sureka' appears in the search results
  const userRow = page.locator('//div[@id="layout"]/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div[2]/div[2]/a');
  await expect(userRow).toContainText('bhhavya.sureka');
  
  // Step 5: Click on the username 'bhhavya.sureka' to open the user details
  await userRow.click();
  await page.waitForURL('https://dev.roost.ai/admin/app'); // Confirm that the page stays the same since it's a modal or on-page dialog
  
  // Step 6: Locate the 'Remove Admin' button under permissions
  const removeAdminButton = page.locator('button:has-text("Remove Admin")'); // Inferring button by text
  await expect(removeAdminButton).toBeVisible();
  
  // Step 7: Click the 'Remove Admin' button
  await removeAdminButton.click();
  
  // Step 8: Confirm the removal action in the modal dialog (if applicable)
  const confirmButton = page.locator('button:has-text("Confirm")'); // Inferring confirmation button by text
  if (await confirmButton.count() > 0) {
    await confirmButton.click();
  }
  
  // Step 9: Verify that the user's admin rights have been successfully removed
  const updatedRole = page.locator('span:has-text("User")'); // Assuming role is displayed as 'User' after removal
  await expect(updatedRole).toBeVisible(); // Check if the user role has updated

  console.log('Test completed successfully: Admin rights removed for user "bhhavya.sureka".');
});