import { test, expect } from '@playwright/test';

test('Verify Access to Documentation Page', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);
  await expect(page).toHaveURL(loginPageURL);
  console.log('Navigated to the login page.');

  // Step 2: Scroll to the footer section of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Scrolled to the footer.');

  // Step 3: Locate the 'Documentation' link using its stable selector
  const documentationLinkSelector = "//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]";
  const documentationLink = page.locator(documentationLinkSelector);
  await expect(documentationLink).toBeVisible();
  console.log('Located the "Documentation" link.');

  // Step 4: Click the 'Documentation' link
  await documentationLink.click();
  console.log('Clicked the "Documentation" link.');

  // Step 5: Verify redirection to the documentation page
  const documentationPageURL = 'https://docs.roost.ai';
  await page.waitForURL(documentationPageURL, { timeout: 10000 });
  console.log('Redirected to the documentation page.');

  // Step 6: Ensure that the documentation page loads successfully
  await expect(page).toHaveURL(documentationPageURL);
  console.log('Verified that the documentation page loaded successfully.');

  // Step 7: Verify the presence of key documentation sections
  const keySectionSelector = 'h1, h2, .doc-section'; // Adjust as needed for the actual documentation structure
  const keySections = page.locator(keySectionSelector);
  await expect(keySections.first()).toBeVisible();
  console.log('Verified the presence of key documentation sections.');

  console.log('Test completed: Verify Access to Documentation Page');
});