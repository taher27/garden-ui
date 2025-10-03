import { test, expect } from '@playwright/test';

test('Verify Navigation Between Tabs', async ({ page }) => {
  // Step 1: Navigate to the Generations tab (default tab)
  await page.goto('https://dev.roost.ai/roostgpt/events');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/events');
  console.log('Navigated to Generations tab.');

  // Verify Generations tab content loads correctly
  const generationsTabContent = page.locator('text=Generations'); // Adjust selector based on the actual content
  await expect(generationsTabContent).toBeVisible();
  console.log('Verified Generations tab content.');

  // Step 2: Click on the "Test Suites" tab
  const testSuitesTab = page.locator("//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
  await testSuitesTab.click();
  console.log('Clicked on Test Suites tab.');

  // Wait for the Test Suites page to load and verify its content
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
  const testSuitesContent = page.locator('text=Test Suites'); // Adjust selector based on the actual content
  await expect(testSuitesContent).toBeVisible();
  console.log('Verified Test Suites page content.');

  // Step 3: Click on the "Analysis" tab
  const analysisTab = page.locator("//a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
  await analysisTab.click();
  console.log('Clicked on Analysis tab.');

  // Wait for the Analysis page to load and verify its content
  await page.waitForURL('https://dev.roost.ai/roostgpt/analyses');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/analyses');
  const analysisContent = page.locator('text=Analysis'); // Adjust selector based on the actual content
  await expect(analysisContent).toBeVisible();
  console.log('Verified Analysis page content.');

  // Step 4: Return to the Generations tab
  const generationsTab = page.locator("//a[@href='/roostgpt/events' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
  await generationsTab.click();
  console.log('Clicked on Generations tab.');

  // Wait for the Generations page to reload and verify its content
  await page.waitForURL('https://dev.roost.ai/roostgpt/events');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/events');
  await expect(generationsTabContent).toBeVisible();
  console.log('Verified Generations tab content reloads as expected.');

  console.log('Test completed successfully.');
});