import { test, expect } from '@playwright/test';

test('Verify Navigation to API Documentation and Detailed Endpoint Information', async ({ page }) => {
  // Step 1: Open the homepage
  const homepageUrl = 'https://dev.roost.ai';
  await page.goto(homepageUrl);

  // Verify that the homepage loaded successfully
  await expect(page).toHaveURL(homepageUrl);
  console.log('Homepage loaded successfully');

  // Step 2: Locate and click on the 'roost.ai' logo to navigate to the API Documentation page
  const apiDocsLogoSelector = "//a[@href='/docs/api' and contains(@class, 'logo')]";
  const apiDocsUrl = 'https://dev.roost.ai/docs/api';
  
  try {
    const apiDocsLogo = page.locator(apiDocsLogoSelector);
    await apiDocsLogo.click();
    console.log('Clicked on the roost.ai logo to navigate to API Documentation');
  } catch (error) {
    console.error('Error clicking on the roost.ai logo:', error);
    throw error;
  }

  // Step 3: Verify that the API Documentation page loads successfully
  await page.waitForURL(apiDocsUrl);
  await expect(page).toHaveURL(apiDocsUrl);
  console.log('API Documentation page loaded successfully');

  // Step 4: Locate the navigation menu for API endpoint categories
  const apiNavMenuSelector = "nav"; // Assuming the navigation menu is a <nav> element
  const apiNavMenu = page.locator(apiNavMenuSelector);
  await expect(apiNavMenu).toBeVisible();
  console.log('Navigation menu for API endpoint categories located');

  // Step 5: Select the 'Create Test App' endpoint from the menu
  const createTestAppEndpointSelector = "//a[text()='Create Test App']";
  try {
    const createTestAppEndpoint = page.locator(createTestAppEndpointSelector);
    await createTestAppEndpoint.click();
    console.log('Selected the "Create Test App" endpoint');
  } catch (error) {
    console.error('Error selecting the "Create Test App" endpoint:', error);
    throw error;
  }

  // Step 6: Verify the endpoint details are displayed
  const createTestAppDetailsSelector = "//h1[contains(text(), 'Create Test App')]/following-sibling::div";
  const createTestAppDetails = page.locator(createTestAppDetailsSelector);
  await expect(createTestAppDetails).toBeVisible();
  await expect(createTestAppDetails).toContainText('POST');
  await expect(createTestAppDetails).toContainText('Description');
  await expect(createTestAppDetails).toContainText('Request Parameters');
  await expect(createTestAppDetails).toContainText('Response Schemas');
  console.log('Verified the details for the "Create Test App" endpoint');

  // Step 7: Scroll to the 'Get All Tests' endpoint in the documentation
  const getAllTestsEndpointSelector = "//a[text()='Get All Tests']";
  const getAllTestsEndpoint = page.locator(getAllTestsEndpointSelector);
  await getAllTestsEndpoint.scrollIntoViewIfNeeded();
  console.log('Scrolled to the "Get All Tests" endpoint');

  // Step 8: Verify the endpoint details for 'Get All Tests'
  const getAllTestsDetailsSelector = "//h1[contains(text(), 'Get All Tests')]/following-sibling::div";
  const getAllTestsDetails = page.locator(getAllTestsDetailsSelector);
  await expect(getAllTestsDetails).toBeVisible();
  await expect(getAllTestsDetails).toContainText('GET');
  await expect(getAllTestsDetails).toContainText('Filters');
  await expect(getAllTestsDetails).toContainText('Expected Responses');
  console.log('Verified the details for the "Get All Tests" endpoint');
});