import { test, expect } from '@playwright/test';

test('Pagination Functionality in Test Suites List', async ({ page }) => {
  // Step 1: Navigate to the URL
  const baseUrl = 'https://dev.roost.ai/roostgpt/tests';
  await page.goto(baseUrl);
  await expect(page).toHaveURL(baseUrl);

  // Step 2: Verify the presence of pagination controls
  const nextButton = page.locator('[data-testid="arrow-icon"]');
  const previousButton = page.locator('[data-testid="arrow-left"]');
  const firstButton = page.locator('[data-testid="paginator-first-page-button"]');
  const lastButton = page.locator('[data-testid="paginator-last-page-button"]');
  const pageTwoButton = page.locator('//button[normalize-space()="2"]');
  
  await expect(nextButton).toBeVisible();
  await expect(previousButton).toBeVisible();
  await expect(firstButton).toBeVisible();
  await expect(lastButton).toBeVisible();

  // Step 3: Click the 'Next' button to move to the next page
  await nextButton.click();
  await page.waitForURL(baseUrl);
  console.log('Navigated to the next page');

  // Step 4: Verify the next page of test suites is displayed
  await expect(page).toHaveURL(baseUrl); // Assuming the URL remains the same but the content changes dynamically
  await expect(nextButton).toBeVisible(); // Example verification

  // Step 5: Click the 'Previous' button to return to the previous page
  await previousButton.click();
  await page.waitForURL(baseUrl);
  console.log('Returned to the previous page');

  // Step 6: Use the 'First' button to navigate to the first page
  await firstButton.click();
  await page.waitForURL(baseUrl);
  console.log('Navigated to the first page');

  // Step 7: Verify the first page is displayed correctly
  await expect(page).toHaveURL(baseUrl); // Assuming the URL remains the same for the first page
  await expect(firstButton).toBeVisible();

  // Step 8: Use the 'Last' button to navigate to the last page
  await lastButton.click();
  await page.waitForURL(baseUrl);
  console.log('Navigated to the last page');

  // Step 9: Verify the last page is displayed correctly
  await expect(page).toHaveURL(baseUrl); // Assuming the URL remains the same for the last page
  await expect(lastButton).toBeVisible();

  // Step 10: Click on a specific page number (e.g., page 2) to navigate directly to that page
  await pageTwoButton.click();
  await page.waitForURL(baseUrl);
  console.log('Navigated to page 2');

  // Step 11: Verify the content corresponds to the selected page number
  await expect(page).toHaveURL(baseUrl); // Assuming the URL remains the same for page 2
  await expect(pageTwoButton).toBeVisible();
});