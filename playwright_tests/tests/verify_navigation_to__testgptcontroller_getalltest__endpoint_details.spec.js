import { test, expect } from '@playwright/test';

test('Verify navigation to TestGptController_getAllTest endpoint details', async ({ page }) => {
  // Step 1: Navigate to the API documentation main page
  await page.goto('https://dev.roost.ai/docs/api');
  await expect(page).toHaveURL('https://dev.roost.ai/docs/api');
  console.log('Navigated to the API documentation main page.');

  // Step 2: Locate the 'tag/RoostGPT/operation/TestGptController_getAllTest' link
  const endpointLink = page.locator("//a[@href='#tag/RoostGPT/operation/TestGptController_getAllTest' and contains(@class, 'sc-jlZhew')]");
  await expect(endpointLink).toBeVisible();
  console.log("'tag/RoostGPT/operation/TestGptController_getAllTest' link is visible.");

  // Step 3: Click the link to navigate to the endpoint details
  await endpointLink.click();
  await page.waitForURL('https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest');
  await expect(page).toHaveURL('https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest');
  console.log('Navigated to the endpoint details for TestGptController_getAllTest.');

  // Step 4: Verify the endpoint details are visible
  const endpointDetails = page.locator("//a[@href='#tag/RoostGPT/operation/TestGptController_getAllTest' and contains(@class, 'sc-jlZhew')]");
  await expect(endpointDetails).toBeVisible();
  console.log('Endpoint details are visible.');

  // Step 5: Locate the 'GET /test' button
  const getTestButton = page.locator("//button[normalize-space()='GET\\n/test']");
  await expect(getTestButton).toBeVisible();
  console.log("'GET /test' button is visible.");

  // Step 6: Click the 'GET /test' button
  await getTestButton.click();
  console.log('Clicked the "GET /test" button.');

  // Step 7: Verify the sample payload and response details are displayed
  const samplePayload = page.locator('text="Sample payload"'); // Adjust the selector if more specific content is available
  const responseDetails = page.locator('text="Response details"'); // Adjust the selector if more specific content is available
  await expect(samplePayload).toBeVisible();
  await expect(responseDetails).toBeVisible();
  console.log('Sample payload and response details are displayed.');
});