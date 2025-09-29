import { test, expect } from '@playwright/test';

test('Verify Addition of a New Test Suite', async ({ page }) => {
  // Step 1: Navigate to the Test Suites page
  const testSuitesPageURL = 'https://dev.roost.ai/roostgpt/tests';
  await page.goto(testSuitesPageURL);
  await expect(page).toHaveURL(testSuitesPageURL);

  // Step 2: Click on the 'Add Test Suite' option
  const addTestSuiteButton = page.locator("//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]");
  await expect(addTestSuiteButton).toBeVisible(); // Verify the button is visible
  await addTestSuiteButton.click(); // Perform the click action

  // Step 3: Verify that the 'Add Test Suite' form appears
  const addTestSuiteForm = page.locator('form#add-test-suite'); // Assuming form has ID 'add-test-suite'
  await expect(addTestSuiteForm).toBeVisible(); // Verify the form is visible

  // Step 4: Fill in all required fields for the test suite
  const testNameField = page.locator('input[name="testSuiteName"]'); // Assuming input field has name 'testSuiteName'
  const creatorField = page.locator('input[name="creatorName"]'); // Assuming input field has name 'creatorName'
  const genAIModelDropdown = page.locator('select[name="genAIModel"]'); // Assuming dropdown has name 'genAIModel'
  const testTypeDropdown = page.locator('select[name="testType"]'); // Assuming dropdown has name 'testType'

  await testNameField.fill('New Test Suite Name'); // Fill test suite name
  await creatorField.fill('Test Creator'); // Fill creator name
  await genAIModelDropdown.selectOption('GPT-4'); // Select GenAI model
  await testTypeDropdown.selectOption('Functional'); // Select test type

  // Step 5: Click on the 'Submit' button to create the test suite
  const submitButton = page.locator('button[type="submit"]'); // Assuming submit button has type 'submit'
  await expect(submitButton).toBeEnabled(); // Verify the button is enabled
  await submitButton.click(); // Submit the form

  // Step 6: Verify that the new test suite appears in the table after submission
  const successMessage = page.locator('.alert-success'); // Assuming success alert has class 'alert-success'
  await expect(successMessage).toBeVisible(); // Verify success message is visible
  await expect(successMessage).toContainText('Test Suite created successfully'); // Verify success message text

  const newTestSuiteRow = page.locator('table tr:has-text("New Test Suite Name")'); // Locate the new test suite row
  await expect(newTestSuiteRow).toBeVisible(); // Verify the new test suite is visible in the table

  // Step 7: Search for the newly created test suite using the search box
  const searchBox = page.locator('[data-testid="tests-search-box"]'); // Search box selector from `selectors` array
  await expect(searchBox).toBeVisible(); // Verify the search box is visible
  await searchBox.fill('New Test Suite Name'); // Enter the test suite name in the search box

  // Step 8: Verify the table updates to display the newly created test suite
  await page.waitForTimeout(1000); // Wait for the table to update
  const searchResultRow = page.locator('table tr:has-text("New Test Suite Name")'); // Locate the search result row
  await expect(searchResultRow).toBeVisible(); // Verify the search result is visible
});