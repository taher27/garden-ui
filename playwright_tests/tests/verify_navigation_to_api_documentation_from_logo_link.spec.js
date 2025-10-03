import { test, expect } from '@playwright/test';

test('Verify Navigation to API Documentation from Logo Link', async ({ page }) => {
  // Step 1: Navigate to the main dashboard
  const mainPageUrl = 'https://dev.roost.ai';
  const apiDocumentationUrl = 'https://dev.roost.ai/docs/api';
  await page.goto(mainPageUrl);

  // Step 2: Verify the main page has loaded correctly
  await expect(page).toHaveURL(mainPageUrl);

  // Step 3: Locate the 'roost.ai' logo link
  const logoLink = page.locator("//a[@href='/docs/api' and contains(@class, 'logo')]");

  // Step 4: Verify the logo link is visible and enabled
  await expect(logoLink).toBeVisible();
  await expect(logoLink).toBeEnabled();

  // Step 5: Click on the 'roost.ai' logo link
  await logoLink.click();

  // Step 6: Wait for navigation to the API documentation page
  await page.waitForURL(apiDocumentationUrl);

  // Step 7: Verify the user is navigated to the API documentation page
  await expect(page).toHaveURL(apiDocumentationUrl);

  // Step 8: Confirm the presence of API documentation elements
  const endpointDescriptions = page.locator('.endpoint-description');
  const sampleRequests = page.locator('.sample-request');

  // Verify endpoint descriptions are visible
  await expect(endpointDescriptions).toBeVisible();

  // Verify sample requests are visible
  await expect(sampleRequests).toBeVisible();

  // Log success
  console.log('Successfully verified navigation to API documentation page and presence of required elements.');
});