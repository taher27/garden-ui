import { test, expect } from '@playwright/test';

test('Verify Privacy Policy Link Navigation', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  
  // Assert that the login page is loaded
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Login page loaded successfully.');

  // Step 2: Scroll down to the footer section of the page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Scrolled to the footer section.');

  // Step 3: Locate the Privacy Policy link in the footer
  const privacyPolicyLink = page.locator("//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]");
  await expect(privacyPolicyLink).toBeVisible();
  console.log('Privacy Policy link found in the footer.');

  // Step 4: Click on the Privacy Policy link
  await privacyPolicyLink.click();
  console.log('Clicked on the Privacy Policy link.');

  // Step 5: Assert that the Privacy Policy page loads successfully
  await page.waitForURL('https://roost.ai/privacy-policy');
  await expect(page).toHaveURL('https://roost.ai/privacy-policy');
  console.log('Privacy Policy page loaded successfully.');
});