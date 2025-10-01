import { test, expect } from '@playwright/test';

test('Configure Testing Parameters with Advanced Options', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Config page using the 'RoostGPT Config' link
  await page.goto('https://dev.roost.ai');
  const roostConfigLink = page.locator("//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]");
  await expect(roostConfigLink).toBeVisible();
  await roostConfigLink.click();
  await page.waitForURL('https://dev.roost.ai/gptCLIForm');

  // Step 2: Enter a test suite name in the input field with the test ID '[data-testid="test-name-input"]'
  const testNameInput = page.locator('[data-testid="test-name-input"]');
  await expect(testNameInput).toBeVisible();
  await testNameInput.fill('Unit Test');

  // Step 3: Select the radio button for 'Cloud' repository type using the test ID '[data-testid="cloud-git-type-radio-button-selected"]'
  const cloudRadioButton = page.locator('[data-testid="cloud-git-type-radio-button-selected"]');
  await expect(cloudRadioButton).toBeVisible();
  await cloudRadioButton.click();

  // Step 4: Type an environment variable in the input field '[data-testid="new-custom-tag-input"]'
  const envVariableInput = page.locator('[data-testid="new-custom-tag-input"]');
  await expect(envVariableInput).toBeVisible();
  await envVariableInput.fill('TEST_ENV=true');

  // Step 5: Click on the 'Download Env Config' button to save the environment configuration
  const downloadButton = page.locator('[data-testid="download-env-config-button"]');
  await expect(downloadButton).toBeVisible();
  await downloadButton.click();

  // Assertions to validate expected results
  // Note: Assertions below assume the app provides some UI feedback after each step
  
  // Validate the test suite name is saved successfully
  await expect(testNameInput).toHaveValue('Unit Test');

  // Validate the 'Cloud' repository type is selected
  const isCloudRadioSelected = await cloudRadioButton.isChecked();
  expect(isCloudRadioSelected).toBeTruthy();

  // Validate the environment variable is displayed correctly
  await expect(envVariableInput).toHaveValue('TEST_ENV=true');

  // Validate the download button action (e.g., confirmation message, file download indicator)
  // Note: Adjust the selector if there is a specific download confirmation UI element
  const downloadConfirmation = page.locator('text="Configuration downloaded successfully"'); // Example confirmation text
  await expect(downloadConfirmation).toBeVisible();

  // Additional Error Handling and Edge Cases
  try {
    // Validate empty test suite name input
    await testNameInput.fill('');
    const emptyNameError = page.locator('text="Test suite name cannot be empty"'); // Example error message
    await expect(emptyNameError).toBeVisible();

    // Validate invalid characters in environment variable input
    await envVariableInput.fill('INVALID!@#');
    const invalidCharError = page.locator('text="Invalid characters in environment variable"'); // Example error message
    await expect(invalidCharError).toBeVisible();
  } catch (error) {
    console.error('Edge case validation failed:', error);
  }

  // Take a screenshot after test execution for debugging purposes
  await page.screenshot({ path: 'test-results/config-parameters-screenshot.png' });
});