import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Verify OpenAPI Specification File Download', async ({ page }) => {
  // Step 1: Navigate to the API Documentation page
  const apiDocsUrl = 'https://dev.roost.ai/docs/api';
  await page.goto(apiDocsUrl);

  // Assertion: Verify the page loaded correctly
  await expect(page).toHaveURL(apiDocsUrl);

  // Step 2: Locate the 'Download OpenAPI Specification' button
  const downloadButton = page.locator("//a[@href='https://dev.roost.ai/api/swagger' and contains(@class, 'roost-icon')]");

  // Assertion: Verify the button is visible and clickable
  await expect(downloadButton).toBeVisible();
  await expect(downloadButton).toBeEnabled();

  // Step 3: Click the 'Download OpenAPI Specification' button
  const [download] = await Promise.all([
    page.waitForEvent('download'), // Wait for the download to start
    downloadButton.click() // Trigger the download
  ]);

  // Step 4: Verify that the browser prompts for file download
  const downloadPath = await download.path();
  expect(downloadPath).not.toBeNull(); // Ensure the download path exists

  // Step 5: Confirm the file is saved to the default downloads directory
  const fileName = download.suggestedFilename();
  const downloadsDir = path.resolve(__dirname, 'downloads'); // Define a downloads directory
  const filePath = path.join(downloadsDir, fileName);

  // Save the file to the specified downloads directory
  await download.saveAs(filePath);

  // Assertion: Verify the file exists in the downloads directory
  expect(fs.existsSync(filePath)).toBe(true);

  // Step 6: Open the downloaded file and validate its contents
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  // Basic validation: Check if the file contains valid OpenAPI format (e.g., it should include "openapi" field)
  expect(fileContents).toContain('openapi');
  expect(fileContents).toContain('paths');

  // Cleanup: Optionally, delete the downloaded file after validation
  fs.unlinkSync(filePath);

  console.log('Test completed successfully: The OpenAPI specification file was downloaded, saved, and validated.');
});