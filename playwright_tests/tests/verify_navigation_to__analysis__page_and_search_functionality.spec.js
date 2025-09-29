import { test, expect } from '@playwright/test';

// Test Scenario: Verify Navigation to 'Analysis' Page and Search Functionality
test('Verify Navigation to Analysis Page and Search Functionality', async ({ page }) => {
  // Step 1: Navigate to the primary dashboard
  await page.goto('https://dev.roost.ai');
  await expect(page).toHaveURL('https://dev.roost.ai');

  // Step 2: Click on the 'RoostGPT' tab
  const roostGPTTab = page.locator('[data-testid="roostGPT-tab"]');
  await expect(roostGPTTab).toBeVisible(); // Ensure the tab is visible
  await roostGPTTab.click();

  // Step 3: Click on the 'Analysis' link
  const analysisLink = page.locator('//a[@href="/roostgpt/analyses" and contains(@class, "headerButton_collabButton__1E3Qx")]');
  await expect(analysisLink).toBeVisible(); // Ensure the link is visible
  await analysisLink.click();

  // Step 4: Verify that the 'Analysis' page URL is correct
  await page.waitForURL('https://dev.roost.ai/roostgpt/analyses');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/analyses');

  // Step 5: Locate the search input box
  const searchBox = page.locator('[data-testid="events-search-box"]');
  await expect(searchBox).toBeVisible(); // Ensure the search box is visible

  // Step 6: Type the search term 'performance' into the search input box
  await searchBox.fill('performance');

  // Step 7: Press the Enter key to initiate the search
  await searchBox.press('Enter');

  // Step 8: Validate that the displayed results on the 'Analysis' page are filtered based on the search term
  const searchResults = page.locator('.analysis-result'); // Assuming analysis results have a class of 'analysis-result'
  await expect(searchResults).toHaveCountGreaterThan(0); // Ensure there are results displayed
  await expect(searchResults.first()).toContainText('performance'); // Validate the first result contains the search term

  // Edge Case: Verify no results message for an invalid search term
  await searchBox.fill('nonexistent-term');
  await searchBox.press('Enter');
  const noResultsMessage = page.locator('.no-results'); // Assuming there is a 'no-results' class for empty states
  await expect(noResultsMessage).toBeVisible();
  await expect(noResultsMessage).toContainText('No results found');

  // Edge Case: Verify the search box handles special characters
  await searchBox.fill('!@#$%^&*()');
  await searchBox.press('Enter');
  await expect(searchResults).toHaveCount(0); // Ensure no results are displayed

  // Edge Case: Verify the search box handles long inputs
  const longString = 'a'.repeat(1000); // 1000 characters long
  await searchBox.fill(longString);
  await searchBox.press('Enter');
  await expect(searchResults).toHaveCount(0); // Ensure no results are displayed
});