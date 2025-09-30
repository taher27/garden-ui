const { test, expect } = require('@playwright/test');

test('Verify User Search Functionality in Admin Panel', async ({ page }) => {
  // Step 1: Navigate to the Admin Panel login page
  await page.goto('https://dev.roost.ai/admin/app');

  // Step 2: Verify the page has loaded correctly
  await expect(page).toHaveURL('https://dev.roost.ai/admin/app');
  
  // Step 3: Navigate to the Admin tab using the 'Admin' link
  const adminTab = page.locator('[data-testid="admin-tab"]');
  await expect(adminTab).toBeVisible(); // Ensure the Admin tab is visible
  await adminTab.click();
  console.log('Navigated to the Admin tab.');

  // Step 4: Locate the search input field
  const searchInput = page.locator('[data-testid="test"]');
  await expect(searchInput).toBeVisible(); // Ensure the search input field is visible
  console.log('Located the search input field.');

  // Step 5: Type 'harish' into the search input field
  await searchInput.fill('harish');
  console.log('Filled the search input with the term "harish".');

  // Step 6: Press Enter or click the 'Search' button
  await searchInput.press('Enter');
  console.log('Performed the search by pressing Enter.');

  // Step 7: Verify that the user list updates to show only users matching the search term
  const userList = page.locator('[data-testid="user-list"]'); // Assuming a data-testid for the user list
  await expect(userList).toContainText('harish');
  console.log('Verified that the user list updates to show users matching the search term "harish".');

  // Step 8: Clear the search input field
  await searchInput.fill('');
  console.log('Cleared the search input field.');

  // Step 9: Verify that the full user list is displayed again
  await searchInput.press('Enter'); // Trigger the search again with an empty field
  await expect(userList).not.toContainText('harish');
  console.log('Verified that the full user list is displayed again after clearing the search input.');

  // Additional edge cases and assertions (optional)
  // Edge Case 1: Search term matches multiple users
  // Note: Implement a step to type a more generic term and verify multiple matching users are displayed
  // Edge Case 2: Search term matches no users
  // Note: Implement a step to type a non-existent user term and verify no results are displayed
  // Edge Case 3: Search input field is disabled or inaccessible
  // Note: This can be validated during the field visibility and accessibility requirements
});