const { test, expect } = require('@playwright/test');

test('Configure and Validate a New Test Suite', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Config page
  const url = 'https://dev.roost.ai/gptCLIForm';
  await page.goto(url);
  await expect(page).toHaveURL(url);

  // Step 2: Type 'Sample Test Suite' into the test name input field
  const testNameInput = page.locator('[data-testid="test-name-input"]');
  await testNameInput.fill('Sample Test Suite');

  // Step 3: Verify that the test name input field accepts the text
  await expect(testNameInput).toHaveValue('Sample Test Suite');

  // Step 4: Select the 'Cloud Git' radio button option for the repository type
  const cloudGitRadioButton = page.locator('[data-testid="cloud-git-type-radio-button-selected"]');
  await cloudGitRadioButton.click();

  // Step 5: Verify that the 'Cloud Git' option is selected
  await expect(cloudGitRadioButton).toBeChecked();

  // Step 6: Type a valid OpenAI token into the OpenAI token input field
  const openAITokenInput = page.locator('[data-testid="openai-token"]');
  await openAITokenInput.fill('valid-openai-token');

  // Step 7: Click the 'Show Token' button to unmask the token and verify its visibility
  const openAITokenUnmaskButton = page.locator('[data-testid="openai-token-unMask-icon"]');
  await openAITokenUnmaskButton.click();
  await expect(openAITokenInput).toHaveAttribute('type', 'text');

  // Step 8: Type a GitHub repository access token into the GitHub token input field
  const githubTokenInput = page.locator('[data-testid="github-source-token"]');
  await githubTokenInput.fill('valid-github-token');

  // Step 9: Click the 'Show Token' button to unmask the GitHub token and verify its visibility
  const githubTokenUnmaskButton = page.locator('[data-testid="github-source-token-unMask-icon"]');
  await githubTokenUnmaskButton.click();
  await expect(githubTokenInput).toHaveAttribute('type', 'text');

  // Step 10: Enable the 'Traverse to all sub-directories' advanced testing option
  const traverseSubDirectoriesOption = page.locator('//div[@id="advanced"]/div[2]/div[4]/div[2]/div/div/label');
  await traverseSubDirectoriesOption.click();

  // Step 11: Verify that the option is toggled on
  const traverseSubDirectoriesCheckbox = traverseSubDirectoriesOption.locator('input[type="checkbox"]');
  await expect(traverseSubDirectoriesCheckbox).toBeChecked();

  // Step 12: Enable the 'Check for Vulnerability' advanced testing option
  const checkForVulnerabilityOption = page.locator('//div[@id="advanced"]/div[2]/div[5]/div[2]/div/div/label');
  await checkForVulnerabilityOption.click();

  // Step 13: Verify that the option is toggled on
  const checkForVulnerabilityCheckbox = checkForVulnerabilityOption.locator('input[type="checkbox"]');
  await expect(checkForVulnerabilityCheckbox).toBeChecked();

  // Step 14: Submit the configuration and verify that the test suite is saved successfully
  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();
  await page.waitForNavigation();
  await expect(page).toHaveURL(`${url}/dashboard`);

  // Step 15: Check that the new test suite name appears in the list of test suites on the dashboard
  const testSuiteList = page.locator('.test-suite-list');
  await expect(testSuiteList.locator('text=Sample Test Suite')).toBeVisible();
});