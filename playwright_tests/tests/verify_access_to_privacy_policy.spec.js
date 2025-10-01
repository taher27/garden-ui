import { test, expect } from '@playwright/test';

test('Verify Access to Privacy Policy', async ({ page }) => {
  // Step 1: Navigate to the login page
  const loginPageUrl = 'https://dev.roost.ai/login';
  await page.goto(loginPageUrl);

  // Verify that the login page has loaded correctly
  await expect(page).toHaveURL(loginPageUrl);

  // Step 2: Locate the 'Privacy Policy' link in the footer
  const privacyPolicyLink = page.locator("//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]");
  await expect(privacyPolicyLink).toBeVisible();

  // Step 3: Click on the 'Privacy Policy' link
  await privacyPolicyLink.click();

  // Step 4: Redirect to the privacy policy page
  const privacyPolicyPageUrl = 'https://roost.ai/privacy-policy';
  await page.waitForURL(privacyPolicyPageUrl);

  // Verify that the privacy policy page has loaded correctly
  await expect(page).toHaveURL(privacyPolicyPageUrl);

  // Step 5: Verify that the privacy policy page loads with the expected content
  // Example: Check for the presence of a heading or specific text content
  const privacyPolicyHeading = page.locator('h1'); // Assuming there's an <h1> tag on the page
  await expect(privacyPolicyHeading).toBeVisible();
  await expect(privacyPolicyHeading).toContainText('Privacy Policy'); // Adjust text as per the actual content

  // Log success message
  console.log('Test passed: Successfully navigated to Privacy Policy page and verified content.');
});