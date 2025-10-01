import { test, expect } from '@playwright/test';

test('Verify Navigation to API Reference Page', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');

  // Step 2: Assert that the page title is correct
  await expect(page).toHaveTitle('Roost Enterprise Login | Software as a Service');

  // Step 3: Scroll down to the footer of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Step 4: Locate the 'API Reference' link using its stable selector
  const apiReferenceLink = page.locator("//a[@href='/docs/api' and contains(@class, 'footer-item')]");
  await expect(apiReferenceLink).toBeVisible(); // Ensure the link is visible

  // Step 5: Click on the 'API Reference' link
  await apiReferenceLink.click();

  // Step 6: Verify that the browser navigates to the API Reference page
  await page.waitForURL('https://dev.roost.ai/docs/api');
  await expect(page).toHaveURL('https://dev.roost.ai/docs/api');

  // Step 7: Assert that the API Reference page title includes 'API Reference'
  await expect(page).toHaveTitle(/API Reference/);

  // Step 8: Verify that the API documentation content is visible on the page
  const apiDocumentationContent = page.locator('main'); // Assuming the main content is inside the <main> tag
  await expect(apiDocumentationContent).toBeVisible();

  console.log('Test completed: Navigation to API Reference Page verified successfully.');
});