import { test, expect } from '@playwright/test';

test('Verify Navigation to Documentation Page', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated to the login page.');

  // Step 2: Scroll to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Scrolled to the footer section.');

  // Step 3: Verify the presence of the Documentation link using its stable selector
  const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]");
  await expect(documentationLink).toBeVisible();
  console.log('Verified the presence of the Documentation link.');

  // Step 4: Click on the Documentation link
  await documentationLink.click();
  console.log('Clicked on the Documentation link.');

  // Step 5: Wait for the redirection to the Documentation page
  await page.waitForURL('https://docs.roost.ai');
  await expect(page).toHaveURL('https://docs.roost.ai');
  console.log('Redirection to the Documentation page was successful.');

  // Step 6: Verify that the Documentation page is loaded successfully
  const pageTitle = await page.title();
  expect(pageTitle).toBeTruthy();
  console.log('Verified the Documentation page is loaded successfully.');

  // Step 7: Check for the presence of API reference content on the page
  const apiReferenceContent = page.locator("text=API Reference"); // Adjust selector if necessary
  await expect(apiReferenceContent).toBeVisible();
  console.log('Verified the presence of API reference content on the Documentation page.');
});