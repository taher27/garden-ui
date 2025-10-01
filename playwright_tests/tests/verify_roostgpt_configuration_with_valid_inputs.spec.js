import { test, expect } from '@playwright/test';

test('Verify RoostGPT Configuration with Valid Inputs', async ({ page }) => {
  // Step 1: Navigate to the main page
  await page.goto('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');

  // Step 2: Click on the 'RoostGPT Config' link in the navigation bar
  const roostGPTConfigLink = page.locator("//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]");
  await roostGPTConfigLink.click();
  await page.waitForURL('https://dev.roost.ai/gptCLIForm');
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');

  // Step 3: Verify that the Roost Token input field is displayed
  const roostTokenInput = page.locator('[data-testid="test-name-input"]');
  await expect(roostTokenInput).toBeVisible();

  // Step 4: Enter a valid Roost Token
  await roostTokenInput.fill('valid-roost-token');

  // Step 5: Enter a valid OpenAI Token
  const openAITokenInput = page.locator('[data-testid="openai-token"]');
  await openAITokenInput.fill('valid-openai-token');

  // Step 6: Click the 'Unmask' button to verify the OpenAI Token value entered
  const unmaskOpenAITokenButton = page.locator('[data-testid="openai-token-unMask-icon"]');
  await unmaskOpenAITokenButton.click();

  // Step 7: Select the 'Cloud' option in the Git type radio button group
  const cloudGitTypeOption = page.locator('[data-testid="cloud-git-type-radio-button-selected"]');
  await cloudGitTypeOption.check();

  // Step 8: Enter a valid GitHub source token
  const githubSourceTokenInput = page.locator('[data-testid="github-source-token"]');
  await githubSourceTokenInput.fill('valid-github-source-token');

  // Step 9: Click the 'Unmask' button to verify the GitHub source token value entered
  const unmaskGithubSourceTokenButton = page.locator('[data-testid="github-source-token-unMask-icon"]');
  await unmaskGithubSourceTokenButton.click();

  // Step 10: Check the 'Traverse to all sub-directories' option
  const traverseSubDirsOption = page.locator("//div[@id='advanced']/div[2]/div[4]/div[2]/div/div/label");
  await traverseSubDirsOption.click();

  // Step 11: Check the 'Check for Vulnerability' option
  const checkForVulnerabilityOption = page.locator("//div[@id='advanced']/div[2]/div[5]/div[2]/div/div/label");
  await checkForVulnerabilityOption.click();

  // Step 12: Enter a valid value for custom functions to test
  const functionsToTestInput = page.locator('[data-testid="functions-to-test"]');
  await functionsToTestInput.fill('test-function-value');

  // Step 13: Click the 'Save Configuration' button
  const saveConfigurationButton = page.locator('button:has-text("Save Configuration")');
  await saveConfigurationButton.click();

  // Step 14: Verify that a success message is displayed
  const successMessage = page.locator('text=Configuration saved successfully');
  await expect(successMessage).toBeVisible();
});