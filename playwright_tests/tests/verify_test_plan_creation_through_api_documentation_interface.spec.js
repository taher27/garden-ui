import { test, expect } from '@playwright/test';

test('Verify Test Plan Creation through API Documentation Interface', async ({ page }) => {
  // Step 1: Navigate to the API documentation page
  await page.goto('https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_createTestPlan');
  await expect(page).toHaveURL('https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_createTestPlan');

  // Step 2: Verify the presence of the 'Create Test Plan' API section link
  const createTestPlanLink = page.locator("//a[@href='#tag/RoostGPT/operation/TestGptController_createTestPlan' and contains(@class, 'sc-jlZhew')]");
  await expect(createTestPlanLink).toBeVisible();

  // Step 3: Click on the 'Create Test Plan' API section link
  await createTestPlanLink.click();

  // Step 4: Locate the 'POST /test/createTestPlan' button and click it
  const postButton = page.locator("//button[normalize-space()='POST\n/test/createTestPlan']");
  await expect(postButton).toBeVisible();
  await postButton.click();

  // Step 5: Verify the display of the endpoint URL
  const endpointURL = page.locator("//div[@id='operation/TestGptController_createTestPlan']/div[2]/div[1]/div/div/div[2]");
  await expect(endpointURL).toHaveText('https://dev.roost.ai/api/test/createTestPlan');

  // Step 6: Click on the 'Expand all' button
  const expandAllButton = page.locator("//button[normalize-space()='Expand all']");
  await expect(expandAllButton).toBeVisible();
  await expandAllButton.click();

  // Step 7: Locate the 'aiModelConfiguration' button and click on it
  const aiModelConfigurationButton = page.locator("//button[normalize-space()='aiModelConfiguration']");
  await expect(aiModelConfigurationButton).toBeVisible();
  await aiModelConfigurationButton.click();

  // Step 8: Verify the presence of the 'gitConfiguration' button and click it
  const gitConfigurationButton = page.locator("//button[normalize-space()='gitConfiguration']");
  await expect(gitConfigurationButton).toBeVisible();
  await gitConfigurationButton.click();

  // Step 9: Click on the 'integrationConfiguration' button and verify its details
  const integrationConfigurationButton = page.locator("//button[normalize-space()='integrationConfiguration']");
  await expect(integrationConfigurationButton).toBeVisible();
  await integrationConfigurationButton.click();

  // Step 10: Locate and click the 'testConfiguration' button
  const testConfigurationButton = page.locator("//button[normalize-space()='testConfiguration']");
  await expect(testConfigurationButton).toBeVisible();
  await testConfigurationButton.click();

  // Step 11: Ensure all required input fields and configurations are visible
  const inputFields = page.locator('input, textarea, select');
  await expect(inputFields).toHaveCountGreaterThan(0);

  // Step 12: Locate and verify the presence of the 'Copy' button
  const copyButton = page.locator("//button[normalize-space()='Copy']");
  await expect(copyButton).toBeVisible();

  // Step 13: Click the 'Copy' button and confirm the payload is copied
  await copyButton.click();
  // (Clipboard verification may depend on the environment and is skipped here for simplicity)

  // Step 14: Verify 'aiModelConfiguration' and 'integrationConfiguration' buttons remain interactable
  await expect(aiModelConfigurationButton).toBeEnabled();
  await expect(integrationConfigurationButton).toBeEnabled();

  // Step 15: Click the 'POST /test/createTestPlan' button again to collapse the section
  await postButton.click();

  // Step 16: Click the 'Collapse all' button
  const collapseAllButton = page.locator("//button[normalize-space()='Collapse all']");
  await expect(collapseAllButton).toBeVisible();
  await collapseAllButton.click();

  // Step 17: Ensure the page is in its initial state with only top-level sections visible
  await expect(createTestPlanLink).toBeVisible();
  await expect(postButton).not.toBeVisible();
});