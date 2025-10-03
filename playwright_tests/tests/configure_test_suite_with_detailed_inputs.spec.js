import { test, expect } from '@playwright/test';

test('Configure Test Suite with Detailed Inputs', async ({ page }) => {
  // Step 1: Navigate to the RoostGPT Config page
  await page.goto('https://dev.roost.ai/gptCLIForm');
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');
  console.log('Navigated to the RoostGPT Config page.');

  // Step 2: Click the Test Suite tab to open configuration options
  const testSuiteTab = page.locator('//a[@href="/gptCLIForm" and contains(@class, "nav-link")]');
  await expect(testSuiteTab).toBeVisible();
  await testSuiteTab.click();
  await expect(page).toHaveURL('https://dev.roost.ai/gptCLIForm');
  console.log('Clicked on the Test Suite tab.');

  // Step 3: Type a test suite name into the input field
  const testNameInput = page.locator('[data-testid="test-name-input"]');
  await expect(testNameInput).toBeVisible();
  await testNameInput.fill('Sample Test Suite');
  console.log('Entered test suite name.');

  // Step 4: Select a test type from the dropdown
  const testTypeDropdown = page.locator('[data-testid="radio-button"]');
  await expect(testTypeDropdown).toBeVisible();
  await testTypeDropdown.selectOption({ label: 'Regression' });
  console.log('Selected test type.');

  // Step 5: Select a programming language from the dropdown
  const languageDropdown = page.locator('[data-testid="language-dropdown"]');
  await expect(languageDropdown).toBeVisible();
  await languageDropdown.selectOption({ label: 'JavaScript' });
  console.log('Selected programming language.');

  // Step 6: Select a testing framework from the dropdown
  const frameworkDropdown = page.locator('[data-testid="framework-dropdown"]');
  await expect(frameworkDropdown).toBeVisible();
  await frameworkDropdown.selectOption({ label: 'Playwright' });
  console.log('Selected testing framework.');

  // Step 7: Select a build tool from the dropdown
  const buildToolDropdown = page.locator('[data-testid="build-tool-dropdown"]');
  await expect(buildToolDropdown).toBeVisible();
  await buildToolDropdown.selectOption({ label: 'Webpack' });
  console.log('Selected build tool.');

  // Step 8: Click the Save button to save the test suite configuration
  const saveButton = page.locator('[data-testid="save-button"]');
  await expect(saveButton).toBeVisible();
  await saveButton.click();
  console.log('Clicked the Save button.');

  // Step 9: Verify that a confirmation message is displayed indicating the test suite was saved successfully
  const confirmationMessage = page.locator('[data-testid="confirmation-message"]');
  await expect(confirmationMessage).toBeVisible();
  await expect(confirmationMessage).toContainText('Test suite saved successfully');
  console.log('Verified the confirmation message.');

  console.log('Test completed: Configure Test Suite with Detailed Inputs');
});