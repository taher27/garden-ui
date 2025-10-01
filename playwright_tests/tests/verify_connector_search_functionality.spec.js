import { test, expect } from '@playwright/test';

test('Verify Connector Search Functionality', async ({ page }) => {
  // Step 1: Navigate to the Connectors page
  await page.goto('https://dev.roost.ai/connectors');

  // Verify that the page has loaded correctly
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');

  // Step 2: Locate the search input field
  const searchInput = page.locator('[data-testid="Connector-search-box"]');

  // Ensure the search input field is visible
  await expect(searchInput).toBeVisible();

  // Step 3: Type a valid connector name into the search field and verify results
  const validConnectorName = 'ValidConnector'; // Replace with an actual connector name for testing
  await searchInput.fill(validConnectorName);

  // Verify that search results dynamically update based on the input
  const searchResults = page.locator('.search-results'); // Replace with the actual selector for search results
  await expect(searchResults).toContainText(validConnectorName);

  // Step 4: Clear the search input field
  await searchInput.fill('');

  // Step 5: Type a partial connector name into the search field
  const partialConnectorName = 'Part'; // Replace with a term that matches multiple connectors
  await searchInput.fill(partialConnectorName);

  // Verify that search results include matches for the partial term
  await expect(searchResults).toContainText(partialConnectorName);

  // Step 6: Type a connector name that does not exist into the search field
  const nonExistentConnectorName = 'NonExistentConnector';
  await searchInput.fill(nonExistentConnectorName);

  // Verify that no results are displayed
  await expect(searchResults).toHaveText('No results found'); // Replace with actual "no results" message/selector

  // Step 7: Click the "First" button to ensure pagination works with filtered results
  const firstPageButton = page.locator('[data-testid="paginator-first-page-button"]');
  await firstPageButton.click();

  // Verify that the page navigates to the first page of results
  await expect(firstPageButton).toBeDisabled(); // Replace with an assertion that ensures you're on the first page

  // Additional edge case tests
  // Edge Case 1: Enter special characters or numbers in the search box
  await searchInput.fill('!@#$%^&*123');
  await expect(searchResults).toBeVisible(); // Replace with appropriate assertion for edge cases

  // Edge Case 2: Searching with leading or trailing spaces
  await searchInput.fill('  ValidConnector  ');
  await expect(searchResults).toContainText(validConnectorName.trim());

  // Edge Case 3: Searching while the page is loading
  await page.reload(); // Simulate a page reload
  await searchInput.fill(validConnectorName);
  await expect(searchResults).toContainText(validConnectorName);

  // Edge Case 4: Clearing the search input without clicking outside of it
  await searchInput.fill('');
  await expect(searchResults).toHaveText('No results found'); // Replace with actual "no results" message/selector

  // Edge Case 5: Searching with a term that matches multiple connectors across different pages
  await searchInput.fill(partialConnectorName);
  await expect(searchResults).toContainText(partialConnectorName); // Ensure results span multiple pages, if applicable
});