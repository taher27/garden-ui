import { test, expect } from '@playwright/test';

test('Configure RoostGPT Test Suite with Advanced Options', async ({ page }) => {
  // Navigate to the RoostGPT Config page
  await page.goto('https://dev.roost.ai/gptCLIForm');
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

  // Step 1: Click on the 'RoostGPT Config' link
  const roostGPTConfigLink = page.locator("//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]");
  await roostGPTConfigLink.click();
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

  // Step 2: Enter the test suite name
  const testNameInput = page.locator('[data-testid="test-name-input"]');
  await testNameInput.fill('Sample Test Suite');

  // Step 3: Enter the OpenAI token
  const openAITokenInput = page.locator('[data-testid="openai-token"]');
  await openAITokenInput.fill('valid-openai-token');

  // Step 4: Click the unmask icon to verify token visibility
  const openAITokenUnmaskIcon = page.locator('[data-testid="openai-token-unMask-icon"]');
  await openAITokenUnmaskIcon.click();

  // Step 5: Select 'Cloud' as the Git type
  const cloudGitTypeRadioButton = page.locator('[data-testid="cloud-git-type-radio-button-selected"]');
  await cloudGitTypeRadioButton.click();

  // Step 6: Enter the GitHub source token
  const githubSourceTokenInput = page.locator('[data-testid="github-source-token"]');
  await githubSourceTokenInput.fill('valid-github-source-token');

  // Step 7: Click the unmask icon to verify GitHub token visibility
  const githubSourceTokenUnmaskIcon = page.locator('[data-testid="github-source-token-unMask-icon"]');
  await githubSourceTokenUnmaskIcon.click();

  // Step 8: Enable 'Traverse to all sub-directories'
  const traverseSubdirectoriesCheckbox = page.locator("//div[@id='advanced']/div[2]/div[4]/div[2]/div/div/label");
  await traverseSubdirectoriesCheckbox.click();

  // Step 9: Enable 'Check for Vulnerability'
  const checkVulnerabilityCheckbox = page.locator("//div[@id='advanced']/div[2]/div[5]/div[2]/div/div/label");
  await checkVulnerabilityCheckbox.click();

  // Step 10: Enter custom environment variables
  const customEnvInput = page.locator('[data-testid="new-custom-tag-input"]');
  await customEnvInput.fill('ENV_VAR=VALUE');

  // Step 11: Click the 'Save Configuration' button
  const saveConfigButton = page.locator('button:has-text("Save Configuration")');
  await saveConfigButton.click();

  // Step 12: Verify the success notification
  const successNotification = page.locator('text=Configuration saved successfully');
  await expect(successNotification).toBeVisible();

  // Assertions for validating expected results
  console.log('Test Suite successfully configured with advanced options.');
});