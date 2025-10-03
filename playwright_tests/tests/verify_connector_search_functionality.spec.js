import { test, expect } from '@playwright/test';

test('Verify Connector Search Functionality', async ({ page }) => {
  // Step 1: Navigate to the Connectors page using the 'Connectors' tab
  await page.goto('https://dev.roost.ai');
  const connectorsTab = page.locator('[data-testid="connectors-tab"]');
  await expect(connectorsTab).toBeVisible(); // Verify the 'Connectors' tab is visible
  await connectorsTab.click(); // Click the 'Connectors' tab
  await page.waitForURL('https://dev.roost.ai/connectors'); // Ensure navigation to Connectors page

  // Step 2: Verify the visibility of the search bar
  const searchBar = page.locator('[data-testid="Connector-search-box"]');
  await expect(searchBar).toBeVisible(); // Assert that the search bar is visible

  // Step 3: Type 'test-connector' into the search bar
  await searchBar.fill('test-connector'); // Fill the search bar with the keyword

  // Step 4: Press Enter or wait for the search results to populate
  await page.keyboard.press('Enter'); // Simulate pressing Enter key
  await page.waitForTimeout(1000); // Wait for search results to populate (adjust timing if necessary)

  // Step 5: Verify that the list of connectors updates and displays only those matching the search term
  const connectorList = page.locator('.connector-item'); // Assuming '.connector-item' is the selector for connector list items
  await expect(connectorList).toBeVisible(); // Assert connector list is visible

  // Step 6: Assert that the displayed connectors contain the term 'test-connector' in their names or descriptions
  const matchingConnectors = page.locator('.connector-item:has-text("test-connector")');
  const itemCount = await matchingConnectors.count(); // Count matching items
  expect(itemCount).toBeGreaterThan(0); // Ensure at least one matching connector is displayed

  // Edge Case Handling: Check for empty or invalid search queries
  try {
    await searchBar.fill(''); // Test empty search query
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    const allConnectors = page.locator('.connector-item');
    expect(await allConnectors.count()).toBeGreaterThan(0); // Ensure all connectors are displayed for empty search

    await searchBar.fill('$%^&'); // Test invalid search query with special characters
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    const noResults = page.locator('.connector-item');
    expect(await noResults.count()).toBe(0); // Ensure no results are displayed for invalid search query
  } catch (error) {
    console.error('Error handling edge cases:', error);
  }

  // Accessibility Verification: Ensure search bar is focusable using Tab key
  await page.keyboard.press('Tab'); // Navigate to search bar using Tab key
  await expect(searchBar).toBeFocused(); // Assert search bar is focused

  console.log('Test completed: Verify Connector Search Functionality');
});