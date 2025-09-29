import { test, expect } from '@playwright/test';

test('Verify Users Can Search and Filter Test Suites', async ({ page }) => {
  // Step 1: Navigate to the Test Suites page
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');

  // Step 2: Verify the visibility of the search box with placeholder text
  const searchBox = page.locator('[data-testid="tests-search-box"]');
  await expect(searchBox).toBeVisible();
  await expect(searchBox).toHaveAttribute('placeholder', 'Search test suites');

  // Step 3: Type a valid test suite name into the search box
  const searchQuery = 'Functional Test Suite';
  await searchBox.fill(searchQuery);

  // Step 4: Press the 'Enter' key to initiate the search
  await searchBox.press('Enter');

  // Step 5: Observe the filtered results displayed in the test suites table
  const testSuitesTable = page.locator('table');
  await expect(testSuitesTable).toBeVisible();

  // Step 6: Verify that the table updates with results matching the search query
  const matchingRows = page.locator(`table tr:has-text("${searchQuery}")`);
  await expect(matchingRows).toHaveCountGreaterThan(0);

  // Step 7: Click on the 'Show My Test Suites' filter option
  const myTestSuitesFilter = page.locator('button:has-text("Show My Test Suites")');
  await myTestSuitesFilter.click();

  // Step 8: Verify the table updates and only displays test suites created by the logged-in user
  const userOwnedRows = page.locator('table tr:has-text("Created by me")');
  await expect(userOwnedRows).toHaveCountGreaterThan(0);

  // Step 9: Clear the search box input and verify the table resets to display all test suites
  await searchBox.fill('');
  await searchBox.press('Enter');
  await expect(testSuitesTable).toBeVisible(); // Ensure the table is still visible
  const allRows = page.locator('table tr');
  await expect(allRows).toHaveCountGreaterThan(0); // Expect the table to display all rows
});