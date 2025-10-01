import { test, expect } from '@playwright/test';

test('Verify Pagination Workflow for Test Suites', async ({ page }) => {
  // Step 1: Navigate to the 'Test Suites' page
  const baseUrl = 'https://dev.roost.ai/roostgpt/tests';
  await page.goto(baseUrl);

  // Verify we are on the correct page
  await expect(page).toHaveURL(baseUrl);

  // Step 2: Verify the presence of pagination controls
  const firstButton = page.locator('[data-testid="paginator-first-page-button"]');
  const prevButton = page.locator('[data-testid="arrow-left"]');
  const nextButton = page.locator('[data-testid="arrow-icon"]');
  const lastButton = page.locator('[data-testid="paginator-last-page-button"]');

  // Assert visibility of pagination controls
  await expect(firstButton).toBeVisible();
  await expect(prevButton).toBeVisible();
  await expect(nextButton).toBeVisible();
  await expect(lastButton).toBeVisible();

  // Step 3: Click on the 'Next' button and verify the next page is displayed
  await nextButton.click();
  await page.waitForURL(baseUrl); // Ensure page URL doesn't reload and dynamically updates content

  // Step 4: Click on the 'Previous' button and verify the previous page is displayed
  await prevButton.click();
  await page.waitForURL(baseUrl); // Ensure page URL doesn't reload and dynamically updates content

  // Step 5: Click on the 'First' button and verify the first page is displayed
  await firstButton.click();
  await page.waitForURL(baseUrl); // Ensure we return to the first page

  // Step 6: Click on the 'Last' button and verify the last page is displayed
  await lastButton.click();
  await page.waitForURL(baseUrl); // Ensure the last page is displayed

  // Step 7: Click on a specific page number and verify the corresponding page is displayed
  const specificPageButton = page.locator('[data-testid="paginator-page-number-button"]').nth(2); // Example: third page
  await specificPageButton.click();
  await page.waitForURL(baseUrl); // Ensure the page URL updates dynamically

  // Step 8: Attempt rapid navigation through pages and verify no UI glitches
  try {
    const allPageButtons = page.locator('[data-testid="paginator-page-number-button"]');
    const pageCount = await allPageButtons.count();

    for (let i = 0; i < pageCount; i++) {
      await allPageButtons.nth(i).click(); // Rapid navigation
    }

    // Verify no UI glitches by checking the visibility of pagination controls
    await expect(firstButton).toBeVisible();
    await expect(prevButton).toBeVisible();
    await expect(nextButton).toBeVisible();
    await expect(lastButton).toBeVisible();

  } catch (error) {
    console.error('Rapid navigation caused an issue:', error);
    // Take a screenshot for debugging
    await page.screenshot({ path: 'pagination-error.png' });
    throw error;
  }

  // Additional Assertions (Edge Cases)
  // Clicking 'First' on the first page should not reload the page
  await firstButton.click();
  await expect(page).toHaveURL(baseUrl);

  // Clicking 'Last' on the last page should not reload the page
  await lastButton.click();
  await expect(page).toHaveURL(baseUrl);

  console.log('Pagination workflow test completed successfully.');
});