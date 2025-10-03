import { test, expect } from '@playwright/test';

test('Search and Filter Users in Admin Dashboard', async ({ page }) => {
  // Step 1: Navigate to the Admin dashboard page
  await page.goto('https://dev.roost.ai/admin/app');
  await expect(page).toHaveURL('https://dev.roost.ai/admin/app');

  // Step 2: Click on the Admin tab using the provided selector
  const adminTab = page.locator('[data-testid="admin-tab"]');
  await expect(adminTab).toBeVisible(); // Ensure the Admin tab is visible
  await adminTab.click();
  await page.waitForURL('https://dev.roost.ai/admin/app'); // Wait for the correct page URL

  // Step 3: Locate the search bar labeled 'Search for the users' and ensure it is visible
  const searchBar = page.locator('[data-testid="test"]');
  await expect(searchBar).toBeVisible();

  // Step 4: Type 'harish' into the search bar
  await searchBar.fill('harish');

  // Step 5: Click the 'Apply' button next to the search bar
  const applyButton = page.locator('button:has-text("Apply")');
  await expect(applyButton).toBeVisible(); // Ensure the Apply button is visible
  await applyButton.click();

  // Step 6: Verify that the user list is filtered to show only users matching 'harish'
  const filteredResults = page.locator('table tbody tr');
  await expect(filteredResults).toBeVisible(); // Ensure filtered results are visible
  const filteredText = await filteredResults.allTextContents();
  for (const text of filteredText) {
    expect(text.toLowerCase()).toContain('harish'); // Verify each row contains 'harish'
  }

  // Step 7: Clear the search criteria
  await searchBar.fill(''); // Clear the search bar
  await applyButton.click(); // Click Apply again to reset the search

  // Step 8: Verify the full user list is displayed
  const fullUserList = page.locator('table tbody tr');
  await expect(fullUserList).toBeVisible(); // Ensure the user list is visible
  const userListCount = await fullUserList.count();
  expect(userListCount).toBeGreaterThan(1); // Verify that more than one user is visible
});