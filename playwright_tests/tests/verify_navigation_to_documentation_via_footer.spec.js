import { test, expect } from '@playwright/test';

test('Verify Navigation to Documentation via Footer', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);
  
  // Verify the page loaded successfully
  await expect(page).toHaveURL(loginPageURL);

  // Step 2: Scroll down to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Step 3: Verify the visibility of the 'Documentation' link
  const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]");
  await expect(documentationLink).toBeVisible();

  // Step 4: Click on the 'Documentation' link
  await documentationLink.click();

  // Step 5: Wait for the documentation page to load
  const documentationPageURL = 'https://docs.roost.ai';
  await page.waitForURL(documentationPageURL);

  // Verify the user is redirected to the documentation page
  await expect(page).toHaveURL(documentationPageURL);

  // Step 6: Verify the title and content of the documentation page
  const pageTitle = await page.title();
  expect(pageTitle).toContain('Documentation'); // Adjust based on the actual page title

  // Verify the documentation page contains expected content (example: header or main section)
  const mainContent = page.locator('main'); // Adjust the selector based on the structure of the page
  await expect(mainContent).toBeVisible();
});