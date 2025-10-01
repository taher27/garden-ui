const { test, expect } = require('@playwright/test');

test('Access Privacy Policy', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://dev.roost.ai/login');
  // Verify that the login page is loaded correctly
  await expect(page).toHaveURL('https://dev.roost.ai/login');
  console.log('Navigated to the login page.');

  // Step 2: Verify the presence of the Privacy Policy link in the footer
  const privacyPolicyLink = page.locator("//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]");
  await expect(privacyPolicyLink).toBeVisible();
  console.log('Verified the presence of the Privacy Policy link.');

  // Step 3: Click on the Privacy Policy link
  try {
    await privacyPolicyLink.click();
    console.log('Clicked on the Privacy Policy link.');
  } catch (error) {
    console.error('Failed to click on the Privacy Policy link:', error);
    throw error;
  }

  // Step 4: Wait for the Privacy Policy page to load
  await page.waitForURL('https://roost.ai/privacy-policy');
  console.log('Waited for the Privacy Policy page to load.');

  // Step 5: Verify that the page URL is correct
  await expect(page).toHaveURL('https://roost.ai/privacy-policy');
  console.log('Verified that the page URL matches the expected Privacy Policy URL.');

  // Step 6: Ensure the content of the Privacy Policy page is displayed correctly
  const privacyPolicyContent = page.locator('body');
  try {
    await expect(privacyPolicyContent).toBeVisible();
    console.log('Verified that the content of the Privacy Policy page is displayed correctly.');
  } catch (error) {
    console.error('Privacy Policy content is not visible or failed to load:', error);
    throw error;
  }
});