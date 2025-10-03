import { test, expect } from '@playwright/test';

test('Verify navigation to the "API Documentation" section and download OpenAPI specification', async ({ page }) => {
  // Step 1: Navigate to the main page
  await page.goto('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Successfully navigated to the main page.');

  // Step 2: Click on the 'API docs by Redocly' link
  const apiDocsLink = page.locator("//div[@id='redoc-container']/div/div[1]/div[2]/div[1]/a");
  await expect(apiDocsLink).toBeVisible();
  await apiDocsLink.click();
  console.log('Clicked on the "API docs by Redocly" link.');

  // Step 3: Ensure the page navigates to the API documentation section
  const expectedApiDocsUrl = 'https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest';
  await page.waitForURL(expectedApiDocsUrl);
  await expect(page).toHaveURL(expectedApiDocsUrl);
  console.log('Navigated to the API documentation section successfully.');

  // Step 4: Locate the 'Download' button under the OpenAPI specification section
  const downloadButton = page.locator("//a[@href='https://dev.roost.ai/api/swagger-json' and contains(@class, 'sc-ktJbId')]");
  await expect(downloadButton).toBeVisible();
  console.log('Located the "Download" button under the OpenAPI specification section.');

  // Step 5: Click the 'Download' button
  const [download] = await Promise.all([
    page.waitForEvent('download'), // Wait for the download to start
    downloadButton.click()        // Trigger the download
  ]);
  console.log('Clicked the "Download" button.');

  // Step 6: Verify that the OpenAPI specification file starts downloading
  const downloadPath = await download.path();
  if (downloadPath) {
    console.log(`OpenAPI specification file downloaded successfully: ${downloadPath}`);
  } else {
    throw new Error('Download did not start or file path is invalid.');
  }
});