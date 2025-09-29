import { test, expect } from '@playwright/test';

test('Paginate Through Connectors List', async ({ page }) => {
  // Step 1: Navigate to the 'Connectors' page
  await page.goto('https://dev.roost.ai/connectors');
  
  // Verify that the page loaded correctly
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');

  // Step 2: Verify that the pagination controls are visible
  const nextButton = page.locator('[data-testid="arrow-icon"]');
  const previousButton = page.locator('[data-testid="arrow-left"]');
  const firstButton = page.locator('[data-testid="paginator-first-page-button"]');
  const lastButton = page.locator('[data-testid="paginator-last-page-button"]');
  await expect(nextButton).toBeVisible();
  await expect(previousButton).toBeVisible();
  await expect(firstButton).toBeVisible();
  await expect(lastButton).toBeVisible();

  // Step 3: Click the 'Next' button to navigate to the next page
  await nextButton.click();

  // Step 4: Verify that the list updates to display connectors from the next page
  await page.waitForURL('https://dev.roost.ai/connectors'); // Assuming the URL remains the same, no page reload occurs
  // Add assertion to verify connectors update (e.g., based on specific content or identifier)
  const connectorsList = page.locator('.connectors-list'); // Replace '.connectors-list' with the actual selector for the connectors list
  await expect(connectorsList).toBeVisible();

  // Step 5: Click the 'Previous' button to navigate back to the previous page
  await previousButton.click();

  // Step 6: Verify that the connectors from the previous page are displayed
  await page.waitForURL('https://dev.roost.ai/connectors'); // Assuming the URL remains the same
  // Add assertion to confirm connectors update to the previous page's content

  // Step 7: Click the 'First' button to navigate to the first page
  await firstButton.click();

  // Step 8: Verify that the first set of connectors is displayed
  await page.waitForURL('https://dev.roost.ai/connectors'); // Assuming the URL remains the same
  // Add assertion to confirm the first page's connectors are displayed

  // Step 9: Click the 'Last' button to navigate to the last page
  await lastButton.click();

  // Step 10: Verify that the connectors from the last page are displayed
  await page.waitForURL('https://dev.roost.ai/connectors'); // Assuming the URL remains the same
  // Add assertion to confirm the last page's connectors are displayed
});