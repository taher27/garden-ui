import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { login } from './util/auth.js';

test('Discovered Workflow: navigation_flow - Happy Path Scenario', async ({ page }) => {
  // Step 0: Login if required
  await login(page);

  // Step 1: Navigate to website homepage
  await page.goto(process.env.BASE_URL);
  try {
    console.log('Verifying homepage elements...');
    await expect(page).toHaveURL(process.env.BASE_URL);
    // Verify main navigation menu is visible
    const navMenu = page.locator('nav');
    await expect(navMenu).toBeVisible();

    // Verify primary call-to-action buttons are present
    const ctaButtons = page.locator('button');
    await expect(ctaButtons).toHaveCountGreaterThan(0);

    // Verify page title and branding
    const title = await page.title();
    console.log(`Page title: ${title}`);
    const branding = page.locator('a.brand-logo-container');
    await expect(branding).toBeVisible();

    // Check for console errors
    const [consoleError] = await Promise.all([
      page.on('console', message => {
        if (message.type() === 'error') {
          throw new Error(`Console error detected: ${message.text()}`);
        }
      }),
    ]);
    console.log('No console errors detected.');
  } catch (error) {
    console.error('Error during homepage verification:', error);
    throw error;
  }

  // Step 2: Click RoostGPT tab
  try {
    console.log('Navigating to RoostGPT tab...');
    const roostGPTTab = page.getByTestId('roostGPT-tab');
    await roostGPTTab.click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/roostgpt/tests`);
    console.log('RoostGPT tab loaded successfully.');
  } catch (error) {
    console.error('Error navigating to RoostGPT tab:', error);
    throw error;
  }

  // Step 3: Click Admin tab
  try {
    console.log('Navigating to Admin tab...');
    const adminTab = page.getByTestId('admin-tab');
    await adminTab.click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/admin`);
    console.log('Admin tab loaded successfully.');
  } catch (error) {
    console.error('Error navigating to Admin tab:', error);
    throw error;
  }

  // Step 4: Click Test Suites link
  try {
    console.log('Navigating to Test Suites page...');
    const testSuitesLink = page.getByRole('link', { name: 'Test Suites' });
    await testSuitesLink.click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/testsuites`);
    console.log('Test Suites page loaded successfully.');
  } catch (error) {
    console.error('Error navigating to Test Suites page:', error);
    throw error;
  }
});