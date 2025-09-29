import { test, expect } from '@playwright/test';

test('Verify Documentation Access', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageUrl = 'https://dev.roost.ai/login';
  await page.goto(loginPageUrl);

  // Step 2: Verify the login page is loaded correctly
  await expect(page).toHaveURL(loginPageUrl);

  // Step 3: Scroll down to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Step 4: Locate the 'Documentation' link
  const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')][contains(text(), 'Documentation')]");
  await expect(documentationLink).toBeVisible();

  // Step 5: Click the 'Documentation' link
  await documentationLink.click();

  // Step 6: Wait for the redirection to the documentation page
  const documentationPageUrl = 'https://docs.roost.ai';
  await page.waitForURL(documentationPageUrl);

  // Step 7: Verify the documentation page is loaded correctly
  await expect(page).toHaveURL(documentationPageUrl);

  // Step 8: Verify the presence of API and setup guides
  const apiGuide = page.locator('text=API');
  const setupGuide = page.locator('text=Setup Guide');
  await expect(apiGuide).toBeVisible();
  await expect(setupGuide).toBeVisible();

  // Step 9: Confirm that the content is readable and accessible
  const pageContent = page.locator('body');
  await expect(pageContent).toBeVisible();
  await expect(pageContent).toContainText('API');
  await expect(pageContent).toContainText('Setup Guide');

  console.log('Test completed successfully: Documentation page is accessible and content is verified.');
});