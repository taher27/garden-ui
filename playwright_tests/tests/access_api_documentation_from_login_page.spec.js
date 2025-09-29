import { test, expect } from '@playwright/test';

test('Access API Documentation from Login Page', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  
  // Verify that the login page loaded successfully
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  
  // Step 2: Verify that the 'Documentation' link is visible in the footer section of the page
  const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]");
  await expect(documentationLink).toBeVisible();
  
  // Step 3: Click on the 'Documentation' link
  await documentationLink.click();
  
  // Step 4: Verify that the user is redirected to the API documentation page
  await page.waitForURL('https://docs.roost.ai');
  await expect(page).toHaveURL('https://docs.roost.ai');
  
  // Step 5: Check that the API documentation page loads completely
  // Verify that the page contains relevant content (e.g., a header or main documentation section)
  const documentationHeader = page.locator('h1, h2, .header, .main-doc-section');
  await expect(documentationHeader).toBeVisible();
  
  // Log a success message
  console.log('Test completed successfully: API Documentation page is accessible from the login page.');
});