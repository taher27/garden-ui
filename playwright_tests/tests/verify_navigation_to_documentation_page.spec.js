import { test, expect } from '@playwright/test';

test('Verify Navigation to Documentation Page', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Step 2: Assert that the login page loads successfully
  await expect(page).toHaveURL(loginPageURL);

  // Step 3: Scroll down to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Step 4: Locate the Documentation link in the footer
  const documentationLink = page.locator("//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]");

  // Step 5: Ensure the Documentation link is visible
  await expect(documentationLink).toBeVisible();

  // Step 6: Click on the Documentation link
  await documentationLink.click();

  // Step 7: Wait for navigation to the Documentation page
  const documentationPageURL = 'https://docs.roost.ai';
  await page.waitForURL(documentationPageURL);

  // Step 8: Assert that the Documentation page loads successfully
  await expect(page).toHaveURL(documentationPageURL);

  // Step 9: Verify that API information is displayed on the Documentation page
  const apiInfo = page.locator('text=API'); // Adjust this selector to target the specific API information element
  await expect(apiInfo).toBeVisible();

  console.log('Test completed successfully: Verified navigation to Documentation page and API information visibility.');
});