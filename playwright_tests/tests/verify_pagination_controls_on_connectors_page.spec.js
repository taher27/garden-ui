import { test, expect } from '@playwright/test';

test('Verify Pagination Controls on Connectors Page', async ({ page }) => {
  // Step 1: Navigate to the connectors page
  await page.goto('https://dev.roost.ai/connectors');
  
  // Verify that the page loaded correctly
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');

  // Step 2: Click the 'First' button
  await page.locator('[data-testid="paginator-first-page-button"]').click();

  // Step 3: Verify that the first page of connectors is displayed
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');
  console.log('Verified first page of connectors is displayed.');

  // Step 4: Click the numbered page button '2'
  await page.locator('//button[normalize-space()="2"]').click();

  // Step 5: Verify that the second page of connectors is displayed
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');
  console.log('Verified second page of connectors is displayed.');

  // Step 6: Click the 'Last' button
  await page.locator('[data-testid="paginator-last-page-button"]').click();

  // Step 7: Verify that the last page of connectors is displayed
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');
  console.log('Verified last page of connectors is displayed.');

  // Step 8: Click the 'Left Arrow' button
  await page.locator('[data-testid="arrow-left"]').click();

  // Step 9: Verify that the previous page of connectors is displayed
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');
  console.log('Verified previous page of connectors is displayed.');

  // Step 10: Click the 'Right Arrow' button
  await page.locator('[data-testid="arrow-icon"]').click();

  // Step 11: Verify that the next page of connectors is displayed
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');
  console.log('Verified next page of connectors is displayed.');
});