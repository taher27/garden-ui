import { test, expect } from '@playwright/test';

test('Verify Pagination for Test Suite List', async ({ page }) => {
  // Step 1: Navigate to the Test Suites page
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
  console.log('Navigated to the Test Suites page.');

  // Step 2: Verify the presence of pagination controls
  const paginationControls = page.locator('[data-testid="arrow-icon"], [data-testid="paginator-last-page-button"], [data-testid="paginator-first-page-button"], //button[normalize-space()="2"]');
  await expect(paginationControls).toBeVisible();
  console.log('Verified the presence of pagination controls.');

  // Step 3: Click on the '2' button to navigate to the second page
  const secondPageButton = page.locator('//button[normalize-space()="2"]');
  await secondPageButton.click();
  console.log('Clicked on the "2" button to navigate to the second page.');

  // Step 4: Verify that the second page of test suites is displayed
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  const secondPageActive = page.locator('//button[normalize-space()="2"] >> xpath=ancestor::li[contains(@class, "active")]');
  await expect(secondPageActive).toBeVisible();
  console.log('Verified that the second page of test suites is displayed.');

  // Step 5: Click the 'Next' arrow button to go to the next page
  const nextArrowButton = page.locator('[data-testid="arrow-icon"]');
  await nextArrowButton.click();
  console.log('Clicked the "Next" arrow button to go to the next page.');

  // Step 6: Validate that pagination updates correctly
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  const nextPageActive = page.locator('[data-testid="arrow-icon"] >> xpath=ancestor::li[contains(@class, "active")]');
  await expect(nextPageActive).toBeVisible();
  console.log('Validated that pagination updated correctly.');

  // Step 7: Click the 'Last' button to navigate to the last page
  const lastPageButton = page.locator('[data-testid="paginator-last-page-button"]');
  await lastPageButton.click();
  console.log('Clicked the "Last" button to navigate to the last page.');

  // Step 8: Verify that the last page of test suites is displayed
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  const lastPageActive = page.locator('[data-testid="paginator-last-page-button"] >> xpath=ancestor::li[contains(@class, "active")]');
  await expect(lastPageActive).toBeVisible();
  console.log('Verified that the last page of test suites is displayed.');

  // Step 9: Click the 'First' button to navigate to the first page
  const firstPageButton = page.locator('[data-testid="paginator-first-page-button"]');
  await firstPageButton.click();
  console.log('Clicked the "First" button to navigate to the first page.');

  // Step 10: Ensure that the first page of test suites is displayed
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  const firstPageActive = page.locator('[data-testid="paginator-first-page-button"] >> xpath=ancestor::li[contains(@class, "active")]');
  await expect(firstPageActive).toBeVisible();
  console.log('Ensured that the first page of test suites is displayed.');
});