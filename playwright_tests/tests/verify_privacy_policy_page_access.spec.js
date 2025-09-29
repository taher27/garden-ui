import { test, expect } from '@playwright/test';

test('Verify Privacy Policy Page Access', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageURL = 'https://dev.roost.ai/login';
  await page.goto(loginPageURL);

  // Verify that the login page loaded correctly
  await expect(page).toHaveURL(loginPageURL);

  // Step 2: Scroll down to the footer section
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Step 3: Locate the 'Privacy Policy' link
  const privacyPolicyLink = page.locator("//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]");

  // Ensure the link is visible and accessible
  await expect(privacyPolicyLink).toBeVisible();
  await expect(privacyPolicyLink).toHaveText('Privacy Policy');

  // Step 4: Click the 'Privacy Policy' link
  await privacyPolicyLink.click();

  // Step 5: Redirect to the privacy policy page
  const privacyPolicyPageURL = 'https://roost.ai/privacy-policy';
  await page.waitForURL(privacyPolicyPageURL);

  // Verify that the privacy policy page loaded correctly
  await expect(page).toHaveURL(privacyPolicyPageURL);

  // Step 6: Verify the presence of privacy terms and conditions
  const privacyContent = page.locator('body');
  await expect(privacyContent).toContainText('Privacy'); // Modify the text match as per actual content

  // Step 7: Confirm the content is readable and accessible
  const isContentReadable = await privacyContent.isVisible();
  if (!isContentReadable) {
    throw new Error('Privacy policy content is not visible or accessible.');
  }

  console.log('Privacy policy page successfully verified.');
});