import { test, expect } from '@playwright/test';

test('Verify Pagination Across Connector List', async ({ page }) => {
  // Step 1: Navigate to the Connectors page
  await page.goto('https://dev.roost.ai');
  const connectorsTab = page.locator('[data-testid="connectors-tab"]');
  await expect(connectorsTab).toBeVisible();
  await connectorsTab.click();

  // Verify the page navigated to the Connectors page
  await expect(page).toHaveURL('https://dev.roost.ai/connectors');

  // Step 2: Verify the visibility of pagination controls
  const paginationControls = [
    page.locator('[data-testid="paginator-first-page-button"]'),
    page.locator('[data-testid="arrow-icon"]:text("\u00ab")'),
    page.locator('[data-testid="arrow-icon"]:text("\u00bb")'),
    page.locator('[data-testid="paginator-last-page-button"]'),
    page.locator('//button[normalize-space()="2"]')
  ];
  for (const control of paginationControls) {
    await expect(control).toBeVisible();
  }

  // Step 3: Click on the button for page '2' and verify the connectors list updates
  const page2Button = page.locator('//button[normalize-space()="2"]');
  await page2Button.click();
  await page.waitForURL('https://dev.roost.ai/connectors?page=2');
  await expect(page).toHaveURL('https://dev.roost.ai/connectors?page=2');

  // Verify connectors list updates (basic check for presence of list)
  const connectorsList = page.locator('[data-testid="connectors-list"]');
  await expect(connectorsList).toBeVisible();

  // Step 4: Click on the '»' button and verify the next page of connectors is displayed
  const nextPageButton = page.locator('[data-testid="arrow-icon"]:text("\u00bb")');
  await nextPageButton.click();
  await page.waitForURL('https://dev.roost.ai/connectors?page=3');
  await expect(page).toHaveURL('https://dev.roost.ai/connectors?page=3');
  await expect(connectorsList).toBeVisible();

  // Step 5: Click on the 'Last' button and verify the last page of connectors is displayed
  const lastPageButton = page.locator('[data-testid="paginator-last-page-button"]');
  await lastPageButton.click();
  await page.waitForURL('https://dev.roost.ai/connectors?page=last');
  await expect(page).toHaveURL('https://dev.roost.ai/connectors?page=last');
  await expect(connectorsList).toBeVisible();

  // Step 6: Click on the 'First' button and verify the first page of connectors is displayed
  const firstPageButton = page.locator('[data-testid="paginator-first-page-button"]');
  await firstPageButton.click();
  await page.waitForURL('https://dev.roost.ai/connectors?page=1');
  await expect(page).toHaveURL('https://dev.roost.ai/connectors?page=1');
  await expect(connectorsList).toBeVisible();

  // Step 7: Click on the '«' button to navigate back to the previous page
  const previousPageButton = page.locator('[data-testid="arrow-icon"]:text("\u00ab")');
  await previousPageButton.click();
  await page.waitForURL('https://dev.roost.ai/connectors?page=last'); // Assuming this navigates to the last page from the first page
  await expect(page).toHaveURL('https://dev.roost.ai/connectors?page=last');
  await expect(connectorsList).toBeVisible();

  // Additional validations for edge cases, accessibility, and performance can be added here as needed
});