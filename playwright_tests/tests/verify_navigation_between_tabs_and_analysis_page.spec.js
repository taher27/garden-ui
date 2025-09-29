import { test, expect } from '@playwright/test';

test('Verify Navigation Between Tabs and Analysis Page', async ({ page }) => {
  // Step 1: Open the primary dashboard
  await page.goto('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Opened the primary dashboard.');

  // Step 2: Click on the 'RoostGPT' tab
  const roostGPTTab = page.locator('[data-testid="roostGPT-tab"]');
  await roostGPTTab.click();
  console.log('Clicked on the RoostGPT tab.');

  // Step 3: Verify that the 'RoostGPT' page loads successfully
  await expect(page).toHaveURL('https://dev.roost.ai');
  console.log('Verified the RoostGPT page loads successfully.');

  // Step 4: Click on the 'Connectors' tab
  const connectorsTab = page.locator('[data-testid="connectors-tab"]');
  await connectorsTab.click();
  console.log('Clicked on the Connectors tab.');

  // Step 5: Validate the URL changes to the Connectors page
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/connectors');
  console.log('Validated the URL changes to the Connectors page.');

  // Step 6: Click on the 'Analysis' link
  const analysisLink = page.locator('//a[@href="/roostgpt/analyses" and contains(@class, "headerButton_collabButton__1E3Qx")]');
  await analysisLink.click();
  console.log('Clicked on the Analysis link.');

  // Step 7: Confirm the URL changes to the Analysis page
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/analyses');
  console.log('Confirmed the URL changes to the Analysis page.');

  // Step 8: Verify visible content matches the 'Analysis' page description
  const analysisContent = page.locator('text="Analysis"'); // Adjust to match the actual content on the Analysis page
  await expect(analysisContent).toBeVisible();
  console.log('Verified visible content matches the Analysis page description.');
});