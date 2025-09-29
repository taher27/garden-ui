import { test, expect } from '@playwright/test';

test('Search for a Connector and Verify Results', async ({ page }) => {
  // Step 1: Navigate to the 'Connectors' page
  const connectorsPageUrl = 'https://dev.roost.ai/connectors';
  await page.goto(connectorsPageUrl);

  // Verify that the page loaded correctly
  await expect(page).toHaveURL(connectorsPageUrl);

  // Step 2: Locate the search input field
  const searchInput = page.locator('[data-testid="Connector-search-box"]');
  await expect(searchInput).toBeVisible();

  // Step 3: Type 'Postgres' into the search input field
  const searchQuery = 'Postgres';
  await searchInput.fill(searchQuery);

  // Step 4: Press the 'Enter' key to submit the search query
  await searchInput.press('Enter');

  // Step 5: Verify that the connectors list updates to show only connectors matching 'Postgres'
  const connectorList = page.locator('.connector-list-item'); // Adjust the selector if necessary for the connectors list
  await expect(connectorList).toHaveCount(1); // Assuming only one result matches 'Postgres'
  await expect(connectorList.first()).toContainText(searchQuery);

  // Step 6: Click on the first connector in the filtered list to view its details
  await connectorList.first().click();

  // Step 7: Verify that the connector details page displays information relevant to 'Postgres'
  const detailsPageHeader = page.locator('.connector-details-header'); // Adjust the selector if necessary for the details page
  await expect(detailsPageHeader).toContainText(searchQuery);

  // Wait for the details page to load
  await page.waitForURL(`https://dev.roost.ai/connectors/${searchQuery.toLowerCase()}`); // Assuming the URL format includes the connector name
});