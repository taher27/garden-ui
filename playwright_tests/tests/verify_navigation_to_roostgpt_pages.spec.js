import { test, expect } from '@playwright/test';

test('Verify Navigation to RoostGPT Pages', async ({ page }) => {
  // Step 1: Navigate to the Test Suites page
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
  console.log('Navigated to the Test Suites page.');

  // Step 2: Click on the 'Analysis' tab
  try {
    const analysisTab = page.locator("//a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
    await expect(analysisTab).toBeVisible();
    await analysisTab.click();
    console.log('Clicked on the Analysis tab.');
  } catch (error) {
    console.error('Error clicking on the Analysis tab:', error);
    throw error;
  }

  // Step 3: Verify that the Analysis page is displayed
  await page.waitForURL('https://dev.roost.ai/roostgpt/analyses');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/analyses');
  console.log('Verified that the Analysis page is displayed.');

  // Step 4: Click on the 'Generations' tab
  try {
    const generationsTab = page.locator("//a[@href='/roostgpt/events' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
    await expect(generationsTab).toBeVisible();
    await generationsTab.click();
    console.log('Clicked on the Generations tab.');
  } catch (error) {
    console.error('Error clicking on the Generations tab:', error);
    throw error;
  }

  // Step 5: Ensure that the Generations page is loaded
  await page.waitForURL('https://dev.roost.ai/roostgpt/events');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/events');
  console.log('Verified that the Generations page is loaded.');

  // Step 6: Return to the Test Suites tab
  try {
    const testSuitesTab = page.locator("//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
    await expect(testSuitesTab).toBeVisible();
    await testSuitesTab.click();
    console.log('Clicked on the Test Suites tab.');
  } catch (error) {
    console.error('Error clicking on the Test Suites tab:', error);
    throw error;
  }

  // Step 7: Verify that the Test Suites page is displayed again
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
  console.log('Verified that the Test Suites page is displayed again.');
});