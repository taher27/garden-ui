import { test, expect } from '@playwright/test';

test('Verify Test Suite Search Functionality', async ({ page }) => {
  // Step 1: Navigate to the 'Test Suites' page.
  const testSuitesPageUrl = 'https://dev.roost.ai/roostgpt/tests';
  await page.goto(testSuitesPageUrl);

  // Assertion: Verify we are on the correct page.
  await expect(page).toHaveURL(testSuitesPageUrl);

  // Step 2: Verify the presence of the search box using its selector.
  const searchBox = page.locator('[data-testid="tests-search-box"]');
  await expect(searchBox).toBeVisible();

  // Step 3: Click on the search box to focus.
  await searchBox.click();

  // Step 4: Type a specific test suite name into the search box.
  const specificTestSuiteName = 'Sample Test Suite';
  await searchBox.fill(specificTestSuiteName);

  // Step 5: Press 'Enter' or wait for the results to auto-populate.
  await page.keyboard.press('Enter');

  // Step 6: Verify that the test suite matching the search query is displayed in the table.
  const tableRows = page.locator('table tbody tr');
  await expect(tableRows).toHaveCount(1); // Assuming only one result should match the search query
  const firstRowText = await tableRows.first().textContent();
  expect(firstRowText).toContain(specificTestSuiteName);

  // Step 7: Scroll through the table and confirm that only relevant results are shown.
  const allRows = await tableRows.allTextContents();
  allRows.forEach((row) => {
    expect(row).toContain(specificTestSuiteName);
  });

  // Step 8: Clear the search box and validate that the full list of test suites reappears.
  await searchBox.fill('');
  await page.keyboard.press('Enter');

  // Wait for the table to reload with the full list.
  await page.waitForTimeout(1000); // Adjust this timeout based on application behavior
  const fullTableRows = await tableRows.count();
  expect(fullTableRows).toBeGreaterThan(1); // Assuming the full list has more than one entry

  // Additional Edge Case 1: Entering a non-existent test suite name should display no results.
  const nonExistentTestSuiteName = 'NonExistent1234';
  await searchBox.fill(nonExistentTestSuiteName);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000); // Adjust this timeout based on application behavior
  await expect(tableRows).toHaveCount(0);

  // Additional Edge Case 2: Special characters in the search query should not break the functionality.
  const specialCharactersQuery = '!@#$%^&*()_+';
  await searchBox.fill(specialCharactersQuery);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000); // Adjust this timeout based on application behavior
  await expect(tableRows).toHaveCount(0);

  // Additional Edge Case 3: Very long search queries should not cause UI or performance issues.
  const longQuery = 'a'.repeat(1000); // A very long string
  await searchBox.fill(longQuery);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000); // Adjust this timeout based on application behavior
  await expect(tableRows).toHaveCount(0);

  // Additional Edge Case 4: Empty search queries should restore the full list of test suites.
  await searchBox.fill('');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000); // Adjust this timeout based on application behavior
  const restoredTableRows = await tableRows.count();
  expect(restoredTableRows).toBeGreaterThan(1);

  // Additional Edge Case 5: Case-insensitive search should match test suites correctly.
  const caseInsensitiveQuery = 'sample test suite'; // Lowercase version of the specificTestSuiteName
  await searchBox.fill(caseInsensitiveQuery);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000); // Adjust this timeout based on application behavior
  const caseInsensitiveRows = await tableRows.allTextContents();
  caseInsensitiveRows.forEach((row) => {
    expect(row.toLowerCase()).toContain(caseInsensitiveQuery);
  });
});