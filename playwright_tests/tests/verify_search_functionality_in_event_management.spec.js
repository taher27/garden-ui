import { test, expect } from '@playwright/test';

test('Verify Search Functionality in Event Management', async ({ page }) => {
  // Step 1: Navigate to the Event Management dashboard
  const url = 'https://dev.roost.ai/roostgpt/events';
  await page.goto(url);

  // Step 2: Verify that the page loads correctly and the search bar is visible
  await expect(page).toHaveURL(url);
  const searchBox = page.locator('[data-testid="events-search-box"]');
  await expect(searchBox).toBeVisible();

  // Step 3: Click on the search bar
  await searchBox.click();

  // Step 4: Type 'test-event-123' into the search bar
  const searchQuery = 'test-event-123';
  await searchBox.fill(searchQuery);

  // Step 5: Simulate pressing the Enter key
  await page.keyboard.press('Enter');

  // Step 6: Wait for the results to load
  await page.waitForResponse((response) =>
    response.url().includes('/api/events') && response.status() === 200
  );

  // Step 7: Verify that the displayed events include 'test-event-123' in the event name or details
  const eventResults = page.locator('.event-item'); // Adjust selector as needed
  await expect(eventResults).toContainText(searchQuery);

  // Step 8: Verify that no unrelated events are displayed in the results
  const unrelatedEvent = 'unrelated-event-name'; // Example unrelated event
  await expect(eventResults).not.toContainText(unrelatedEvent);

  // Step 9: Clear the search input field
  await searchBox.fill('');
  await page.keyboard.press('Enter');

  // Verify that the full list of events is displayed again
  await page.waitForResponse((response) =>
    response.url().includes('/api/events') && response.status() === 200
  );
  const fullEventList = page.locator('.event-item'); // Adjust selector as needed
  await expect(fullEventList).toHaveCountGreaterThan(1); // Assuming multiple events exist
});