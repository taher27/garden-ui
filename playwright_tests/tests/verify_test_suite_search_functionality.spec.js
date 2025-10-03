import { test, expect } from '@playwright/test';

test('Verify Test Suite Search Functionality', async ({ page }) => {
  // Step 1: Navigate to the Test Suites page
  const baseUrl = 'https://dev.roost.ai/roostgpt/tests';
  await page.goto(baseUrl);

  // Ensure we are on the correct page
  await expect(page).toHaveURL(baseUrl);
  console.log('Navigated to the Test Suites page.');

  // Step 2: Locate the search input field
  const searchBox = page.locator('[data-testid="tests-search-box"]');
  await expect(searchBox).toBeVisible();
  console.log('Search input field located.');

  // Step 3: Type a search query into the input field
  const validSearchQuery = 'Test Suite 1';
  await searchBox.fill(validSearchQuery);
  console.log(`Typed search query: "${validSearchQuery}".`);

  // Step 4: Press 'Enter' to execute the search
  await searchBox.press('Enter');
  console.log('Executed search by pressing Enter.');

  // Step 5: Wait for the search results to load
  await page.waitForTimeout(2000);
  console.log('Waited for search results to load.');

  // Step 6: Verify that the displayed test suites match the search criteria
  const searchResults = page.locator('.test-suite-result'); // Replace with a more specific selector if available
  await expect(searchResults).toContainText(validSearchQuery);
  console.log('Verified that search results match the search criteria.');

  // Step 7: Attempt to search for a test suite that does not exist
  const invalidSearchQuery = 'NonExistentTestSuite';
  await searchBox.fill(invalidSearchQuery);
  await searchBox.press('Enter');
  console.log(`Typed invalid search query: "${invalidSearchQuery}".`);

  // Step 8: Check that no results are displayed for invalid queries
  await page.waitForTimeout(2000);
  const noResultsMessage = page.locator('.no-results-message'); // Adjust selector for the "no results" message
  await expect(noResultsMessage).toBeVisible();
  await expect(noResultsMessage).toContainText('No results found'); // Adjust text based on actual implementation
  console.log('Verified that no results are displayed for invalid queries.');

  // Step 9: Clear the search box and ensure all test suites are displayed again
  await searchBox.fill('');
  await searchBox.press('Enter');
  console.log('Cleared the search box and executed search.');

  // Wait for full list to load
  await page.waitForTimeout(2000);
  const allTestSuites = page.locator('.test-suite-result'); // Replace with a more specific selector for all test suites
  await expect(allTestSuites).toHaveCountGreaterThan(0);
  console.log('Verified that clearing the search box restores the full list of test suites.');

  // Step 10: Validate that pagination works correctly for filtered results, if applicable
  const paginationNextButton = page.locator('.pagination-next'); // Adjust selector for the pagination "next" button
  if (await paginationNextButton.isVisible()) {
    await paginationNextButton.click();
    console.log('Clicked "Next" on pagination.');

    // Verify the page changes
    await page.waitForTimeout(2000);
    const currentPage = page.locator('.pagination-current'); // Adjust selector for the current page indicator
    await expect(currentPage).toContainText('2'); // Adjust based on actual pagination implementation
    console.log('Verified pagination works correctly for filtered results.');
  } else {
    console.log('No pagination available to test.');
  }

  // Edge Cases: Additional tests for robustness
  try {
    // Empty search query
    await searchBox.fill('');
    await searchBox.press('Enter');
    await page.waitForTimeout(2000);
    await expect(allTestSuites).toHaveCountGreaterThan(0);
    console.log('Verified that empty search restores full results.');

    // Partial match search
    const partialSearchQuery = 'Test';
    await searchBox.fill(partialSearchQuery);
    await searchBox.press('Enter');
    await page.waitForTimeout(2000);
    await expect(searchResults).toContainText(partialSearchQuery);
    console.log('Verified partial match search.');

    // Special character search
    const specialCharacterQuery = '!@#$%^&*()';
    await searchBox.fill(specialCharacterQuery);
    await searchBox.press('Enter');
    await page.waitForTimeout(2000);
    await expect(noResultsMessage).toBeVisible();
    console.log('Verified special character search returns no results.');

    // Search for very long strings
    const longSearchQuery = 'a'.repeat(256);
    await searchBox.fill(longSearchQuery);
    await searchBox.press('Enter');
    await page.waitForTimeout(2000);
    await expect(noResultsMessage).toBeVisible();
    console.log('Verified very long string search returns no results.');
  } catch (error) {
    console.error('Error during edge case tests:', error);
    throw error;
  }
});