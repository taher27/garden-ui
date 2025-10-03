import { test, expect } from '@playwright/test';

test('Validate External Navigation to Swagger API Page', async ({ page }) => {
  // Step 1: Navigate to the API documentation page
  const apiDocumentationUrl = 'https://dev.roost.ai/docs/api';
  const swaggerApiUrl = 'https://dev.roost.ai/api/swagger';
  await page.goto(apiDocumentationUrl);

  // Verify that the page loaded correctly
  await expect(page).toHaveURL(apiDocumentationUrl);

  // Step 2: Locate the link pointing to the Swagger API page
  const swaggerLink = page.locator("//a[@href='https://dev.roost.ai/api/swagger' and contains(@class, 'roost-icon')]");

  // Step 3: Verify that the link is visible and enabled
  await expect(swaggerLink).toBeVisible();
  await expect(swaggerLink).toBeEnabled();

  // Step 4: Click on the Swagger API link
  await swaggerLink.click();

  // Step 5: Wait for the external page to load completely
  await page.waitForURL(swaggerApiUrl);

  // Step 6: Verify that the user is navigated to the Swagger API page
  await expect(page).toHaveURL(swaggerApiUrl);

  // Step 7: Confirm the presence of Swagger interface elements
  const endpointList = page.locator('.swagger-ui .endpoints-wrapper'); // Example selector for endpoint list
  const interactiveTools = page.locator('.swagger-ui .try-out-wrapper'); // Example selector for interactive testing tools

  await expect(endpointList).toBeVisible();
  await expect(interactiveTools).toBeVisible();

  // Log success message
  console.log('Successfully validated navigation to Swagger API page and presence of interface elements.');
});