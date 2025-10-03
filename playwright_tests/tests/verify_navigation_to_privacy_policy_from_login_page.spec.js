import { test, expect } from '@playwright/test';

test('Verify Navigation to Privacy Policy from Login Page', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  
  // Verify the page loaded correctly
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Successfully navigated to the login page.');

  // Step 2: Scroll to the footer section of the page
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  console.log('Scrolled to the footer section.');

  // Step 3: Locate the Privacy Policy link using the stable selector
  const privacyPolicyLink = page.locator("//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]");
  await expect(privacyPolicyLink).toBeVisible();
  console.log('Privacy Policy link is visible.');

  // Step 4: Click on the Privacy Policy link
  await privacyPolicyLink.click();
  console.log('Clicked on the Privacy Policy link.');

  // Step 5: Ensure the browser navigates to the Privacy Policy page
  await page.waitForURL('https://roost.ai/privacy-policy');
  await expect(page).toHaveURL('https://roost.ai/privacy-policy');
  console.log('Successfully navigated to the Privacy Policy page.');

  // Step 6: Verify the contents of the Privacy Policy page are loaded
  const privacyContent = page.locator('body'); // Ensure the body content is loaded
  await expect(privacyContent).toBeVisible();
  console.log('Privacy Policy page content is displayed correctly.');

  // Step 7: Locate the 'Back' button in the browser and click it
  await page.goBack();
  console.log('Clicked the browser back button.');

  // Step 8: Ensure the browser navigates back to the login page
  await page.waitForURL('https://dev.roost.ai/login');
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Successfully navigated back to the login page.');
});