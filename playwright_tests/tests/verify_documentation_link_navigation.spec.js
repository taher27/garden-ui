import { test, expect } from '@playwright/test';

test('Verify Documentation Link Navigation', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Successfully navigated to the login page.');

  // Step 2: Locate and click on the 'Documentation' footer link
  try {
    const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]");
    await expect(documentationLink).toBeVisible();
    console.log('Documentation link is visible.');
    await documentationLink.click();
    console.log('Clicked on the Documentation link.');
  } catch (error) {
    console.error('Error locating or clicking the Documentation link:', error);
    throw new Error('Test aborted due to missing or inaccessible Documentation link.');
  }

  // Step 3: Verify that the user is redirected to https://docs.roost.ai
  try {
    await page.waitForURL('https://docs.roost.ai', { timeout: 5000 });
    await expect(page).toHaveURL('https://docs.roost.ai');
    console.log('Successfully navigated to the Documentation page.');
  } catch (error) {
    console.error('Navigation to the Documentation page failed:', error);
    throw new Error('Test failed due to incorrect redirection or timeout.');
  }

  // Step 4: Check if the documentation page loads correctly with all expected elements visible
  try {
    // Example check for a main header or expected content (customize as needed)
    const mainHeader = page.locator('h1');
    await expect(mainHeader).toBeVisible();
    console.log('Documentation page loaded successfully with the main header visible.');
  } catch (error) {
    console.error('Error verifying content on the Documentation page:', error);
    throw new Error('Test failed due to missing or inaccessible elements on the Documentation page.');
  }

  console.log('All steps completed successfully.');
});