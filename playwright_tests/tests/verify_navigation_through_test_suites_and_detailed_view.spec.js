import { test, expect } from '@playwright/test';

test('Verify Navigation Through Test Suites and Detailed View', async ({ page }) => {
  // Step 1: Navigate to the URL https://dev.roost.ai/roostgpt/tests.
  await page.goto('https://dev.roost.ai/roostgpt/tests');
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');

  // Step 2: Locate and click on the 'Test Suites' link using its stable selector.
  const testSuitesLink = page.locator("//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
  await expect(testSuitesLink).toBeVisible();
  await testSuitesLink.click();

  // Step 3: Verify the page loads successfully with the list of test suites.
  await expect(page).toHaveURL('https://dev.roost.ai/roostgpt/tests');
  const testSuitesTable = page.locator('table');
  await expect(testSuitesTable).toBeVisible();

  // Step 4: Identify the search bar using its stable selector.
  const searchBar = page.locator('[data-testid="tests-search-box"]');
  await expect(searchBar).toBeVisible();
  
  // Step 5: Type the name of the test suite to be searched into the search bar.
  await searchBar.fill('taher');

  // Step 6: Wait for the search results to update dynamically.
  await page.waitForTimeout(2000); // Wait for search results to update (adjustable based on dynamic behavior).

  // Step 7: Locate the specific test suite row in the table.
  const testSuiteRow = page.locator("//div[@id='layout']/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr[1]/td[2]/div/div[2]/div[2]/a");
  await expect(testSuiteRow).toBeVisible();

  // Step 8: Click on the test suite row using its stable selector.
  await testSuiteRow.click();

  // Step 9: Verify the detailed view of the test suite is displayed.
  await page.waitForURL('https://dev.roost.ai/roostgpt/tests');
  const detailViewHeader = page.locator('h1'); // Assuming the detailed view has an <h1> header.
  await expect(detailViewHeader).toBeVisible();
  await expect(detailViewHeader).toContainText('taher'); // Ensure the detailed view corresponds to the test suite.

  // Step 10: Check that the details include creation and modification history.
  const creationHistory = page.locator('text=Creation History'); // Assuming there’s a label or section for creation history.
  const modificationHistory = page.locator('text=Modification History'); // Assuming there’s a label or section for modification history.
  await expect(creationHistory).toBeVisible();
  await expect(modificationHistory).toBeVisible();
});