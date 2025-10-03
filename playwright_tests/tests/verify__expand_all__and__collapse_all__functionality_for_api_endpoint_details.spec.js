import { test, expect } from '@playwright/test';

test('Verify \'Expand all\' and \'Collapse all\' functionality for API endpoint details', async ({ page }) => {
  // Step 1: Navigate to the API documentation page
  const apiDocsUrl = 'https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest';
  await page.goto(apiDocsUrl);

  // Verify that the page has loaded correctly
  await expect(page).toHaveURL(apiDocsUrl);

  // Step 2: Locate the 'Expand all' button
  const expandAllButton = page.locator("//button[normalize-space()='Expand all']");
  await expect(expandAllButton).toBeVisible();

  // Step 3: Click the 'Expand all' button
  await expandAllButton.click();

  // Step 4: Verify that all API endpoint details are expanded
  const expandedDetails = page.locator('.endpoint-details.expanded'); // Adjust class selector as necessary
  await expect(expandedDetails).toHaveCountGreaterThan(0); // Assuming more than 0 details should be expanded

  // Step 5: Locate the 'Collapse all' button
  const collapseAllButton = page.locator("//button[normalize-space()='Collapse all']");
  await expect(collapseAllButton).toBeVisible();

  // Step 6: Click the 'Collapse all' button
  await collapseAllButton.click();

  // Step 7: Verify that all API endpoint details are collapsed
  const collapsedDetails = page.locator('.endpoint-details.collapsed'); // Adjust class selector as necessary
  await expect(collapsedDetails).toHaveCountGreaterThan(0); // Assuming more than 0 details should be collapsed
});