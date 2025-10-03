import { test, expect } from '@playwright/test';

test('Integrate OpenAI Model with Token Validation', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Config page
  await page.goto('https://dev.roost.ai/gptCLIForm');
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

  // Step 2: Click the Gen AI Models tab to view integration options
  const genAITab = page.locator('//a[@href="/gptCLIForm" and contains(@class, "nav-link")]');
  await genAITab.click();
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

  // Step 3: Type the OpenAI Base URL into the input field
  const openAIBaseURLInput = page.locator('[data-testid="openai-base-url"]');
  const openAIBaseURL = 'https://api.openai.com';
  await openAIBaseURLInput.fill(openAIBaseURL);

  // Step 4: Type the OpenAI Token into the input field
  const openAITokenInput = page.locator('[data-testid="openai-token"]');
  const openAIToken = 'sk-test-valid-token';
  await openAITokenInput.fill(openAIToken);

  // Optional: Unmask the token to ensure it's entered correctly
  const unmaskTokenButton = page.locator('[data-testid="openai-token-unMask-icon"]');
  await unmaskTokenButton.click();

  // Step 5: Click the Verify button to validate the integration
  const verifyButton = page.locator('[data-testid="verify-button"]');
  await verifyButton.click();

  // Step 6: Check that a success message is displayed confirming the integration
  const successMessage = page.locator('[data-testid="success-message"]');
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText('Integration validated successfully');

  // Edge Case: Check for error message if the token is invalid
  const errorMessage = page.locator('[data-testid="error-message"]');
  await openAITokenInput.fill('sk-invalid-token');
  await verifyButton.click();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Invalid token provided');

  // Edge Case: Check for error when Base URL is invalid
  await openAIBaseURLInput.fill('invalid-url');
  await verifyButton.click();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Invalid Base URL');

  // Edge Case: Check for error when Base URL or Token is missing
  await openAIBaseURLInput.fill('');
  await verifyButton.click();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Base URL is required');

  await openAIBaseURLInput.fill(openAIBaseURL);
  await openAITokenInput.fill('');
  await verifyButton.click();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Token is required');

  // Network Timeout: Simulate and check error message for network failure
  // (Assumes mock API to simulate this scenario)
  await page.route('**/api/openai/integration', route => {
    route.abort('failed');
  });
  await verifyButton.click();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Network error occurred during verification');
});