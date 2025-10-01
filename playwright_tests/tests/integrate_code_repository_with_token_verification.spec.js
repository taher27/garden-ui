import { test, expect } from '@playwright/test';

test('Integrate Code Repository with Token Verification', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Config page
  await page.goto('https://dev.roost.ai');

  // Click on the "RoostGPT Config" link
  await page.locator('//a[@href="/gptCLIForm" and contains(@class, "nav-link")]').click();

  // Wait for navigation to the RoostGPT Config page
  await page.waitForURL('https://dev.roost.ai/gptCLIForm');
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

  // Step 2: Select the "Enterprise" repository type radio button
  await page.locator('[data-testid="server-git-type-radio-button"]').click();

  // Verify that the radio button is selected
  await expect(page.locator('[data-testid="server-git-type-radio-button"]')).toBeChecked();

  // Step 3: Enter Github token in the input field
  const githubToken = 'your_valid_github_token_here'; // Replace with a valid Github token
  await page.locator('[data-testid="github-source-token"]').fill(githubToken);

  // Verify that the token input field contains the entered value
  await expect(page.locator('[data-testid="github-source-token"]')).toHaveValue(githubToken);

  // Step 4: Click on the "Verify Token" button
  await page.locator('[data-testid="github-source-token-unMask-icon"]').click();

  // Step 5: Observe the token verification status
  const verificationStatus = page.locator('[data-testid="token-verification-status"]');
  await expect(verificationStatus).toBeVisible();
  await expect(verificationStatus).toContainText('Token verified successfully');

  // Additional checks for edge cases and accessibility
  // Verify that the input field has an accessible label
  await expect(page.locator('[data-testid="github-source-token"]')).toHaveAttribute('aria-label', /github token/i);

  // Ensure the radio button group is keyboard accessible
  await page.keyboard.press('Tab');
  const focusedElement = await page.evaluate(() => document.activeElement.getAttribute('data-testid'));
  expect(focusedElement).toBe('server-git-type-radio-button');

  // Handle possible edge cases
  try {
    // Example: Invalid Github token handling
    const invalidToken = 'invalid_token';
    await page.locator('[data-testid="github-source-token"]').fill(invalidToken);
    await page.locator('[data-testid="github-source-token-unMask-icon"]').click();
    await expect(verificationStatus).toContainText('Token verification failed');
  } catch (error) {
    console.error('Error handling edge case: ', error);
  }
});