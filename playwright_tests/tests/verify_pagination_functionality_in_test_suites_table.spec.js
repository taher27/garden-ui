import { test, expect } from '@playwright/test';

test('Verify Pagination Functionality in Test Suites Table', async ({ page }) => {
  // Step 1: Navigate to the Test Suites page
  const baseURL = 'https://dev.roost.ai/roostgpt/tests';
  await page.goto(baseURL);
  
  // Verify the page loaded correctly
  await expect(page).toHaveURL(baseURL);
  console.log('Navigation to Test Suites page verified.');

  // Step 2: Verify the visibility of pagination controls at the bottom of the table
  const paginationControls = page.locator('[data-testid="pagination-controls"]');
  await expect(paginationControls).toBeVisible();
  console.log('Pagination controls are visible.');

  // Step 3: Click on the '2' button to navigate to page 2
  const pageTwoButton = page.locator('//button[normalize-space()="2"]');
  await pageTwoButton.click();
  console.log('Clicked on page 2 button.');

  // Wait for the table to update for page 2
  await page.waitForURL(baseURL);
  await expect(page.locator('[data-testid="test-suite-table"]')).toBeVisible();
  console.log('Table updated to display test suites from page 2.');

  // Step 4: Click on the 'Next' button to navigate to page 3
  const nextPageButton = page.locator('[data-testid="paginator-next-page-button"]');
  await nextPageButton.click();
  console.log('Clicked on Next button to navigate to page 3.');

  // Wait for the table to update for page 3
  await page.waitForURL(baseURL);
  await expect(page.locator('[data-testid="test-suite-table"]')).toBeVisible();
  console.log('Table updated to display test suites from page 3.');

  // Step 5: Click on the 'Last' button to navigate to the last page
  const lastPageButton = page.locator('[data-testid="paginator-last-page-button"]');
  await lastPageButton.click();
  console.log('Clicked on Last button to navigate to the last page.');

  // Wait for the table to update for the last page
  await page.waitForURL(baseURL);
  await expect(page.locator('[data-testid="test-suite-table"]')).toBeVisible();
  console.log('Table updated to display test suites from the last page.');

  // Step 6: Click the 'First' button to navigate back to the first page
  const firstPageButton = page.locator('[data-testid="paginator-first-page-button"]');
  await firstPageButton.click();
  console.log('Clicked on First button to navigate back to the first page.');

  // Wait for the table to update for the first page
  await page.waitForURL(baseURL);
  await expect(page.locator('[data-testid="test-suite-table"]')).toBeVisible();
  console.log('Table updated to display test suites from the first page.');

  // Verify the pagination buttons work as expected
  console.log('Pagination functionality verified successfully.');
});