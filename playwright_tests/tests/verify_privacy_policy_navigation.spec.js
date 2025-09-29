import { test, expect } from '@playwright/test';

test('Verify Privacy Policy Navigation', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');

  // Step 2: Verify the login page loaded successfully
  await expect(page).toHaveURL('https://dev.roost.ai/login');

  // Step 3: Scroll to the footer section of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Step 4: Locate the 'Privacy Policy' link using the stable selector
  const privacyPolicyLink = page.locator("//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]");
  await expect(privacyPolicyLink).toBeVisible();

  // Step 5: Click the 'Privacy Policy' link
  await privacyPolicyLink.click();

  // Step 6: Verify redirection to the privacy policy page
  await page.waitForURL('https://roost.ai/privacy-policy');
  await expect(page).toHaveURL('https://roost.ai/privacy-policy');

  // Step 7: Ensure that the privacy policy page loads successfully
  await expect(page.locator('body')).toBeVisible();

  // Step 8: Verify the presence of key privacy policy sections
  const keySection = page.locator('h1:has-text("Privacy Policy"), h2:has-text("Privacy Policy")'); // Adapt the selector as needed
  await expect(keySection).toBeVisible();

  console.log('Test completed successfully: Privacy Policy page navigated and key sections verified.');
});