import { test, expect } from '@playwright/test';

test('Verify Access to Documentation Link', async ({ page }) => {
  // Step 1: Navigate to 'https://dev.roost.ai'.
  await page.goto('https://dev.roost.ai');

  // Step 2: Verify the page loaded correctly.
  await expect(page).toHaveURL('https://dev.roost.ai');

  // Step 3: Locate the 'Documentation' link in the footer using the stable selector.
  const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]");

  // Ensure the 'Documentation' link is visible and has the correct text.
  await expect(documentationLink).toBeVisible();
  await expect(documentationLink).toContainText('Documentation');

  // Step 4: Click on the 'Documentation' link.
  await documentationLink.click();

  // Step 5: Verify redirection to the 'https://docs.roost.ai' page.
  await page.waitForURL('https://docs.roost.ai');
  await expect(page).toHaveURL('https://docs.roost.ai');

  // Step 6: Ensure the documentation page content is loaded successfully.
  const pageContent = page.locator('body');
  await expect(pageContent).toBeVisible();

  // Additional checks for accessibility requirements:
  // Ensure the 'Documentation' link is accessible via keyboard navigation.
  await page.keyboard.press('Tab'); // Simulate keyboard navigation.
  const activeElement = await page.evaluate(() => document.activeElement.innerText);
  expect(activeElement).toContain('Documentation');

  console.log('Test passed: The documentation link is accessible and functional.');
});