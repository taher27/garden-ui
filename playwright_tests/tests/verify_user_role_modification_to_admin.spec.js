import { test, expect } from '@playwright/test';

test('Verify User Role Modification to Admin', async ({ page }) => {
  // Step 1: Navigate to the Admin View page
  const adminViewUrl = 'https://dev.roost.ai/admin/app';
  await page.goto(adminViewUrl);
  await expect(page).toHaveURL(adminViewUrl);

  // Step 2: Locate the user 'Aishwarya Rane' in the user table
  const userSelector = "//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[4]/td[1]/div/div[2]/div[2]/a";
  const userElement = page.locator(userSelector);
  await expect(userElement).toBeVisible();

  // Step 3: Click on the 'Make Admin' button next to the user's details
  const makeAdminButtonSelector = "//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[4]/td[1]//button[contains(text(), 'Make Admin')]";
  const makeAdminButton = page.locator(makeAdminButtonSelector);
  await expect(makeAdminButton).toBeVisible();
  await makeAdminButton.click();

  // Step 4: Confirm the role update in the dialog box that appears
  const confirmDialogSelector = "//div[contains(@class, 'dialog')]//button[contains(text(), 'Confirm')]";
  const confirmDialogButton = page.locator(confirmDialogSelector);
  await expect(confirmDialogButton).toBeVisible();
  await confirmDialogButton.click();

  // Step 5: Verify that the user now has the Admin role in the table
  const adminRoleCellSelector = "//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[4]/td[3]"; // Adjust td index for role column
  const adminRoleCell = page.locator(adminRoleCellSelector);
  await expect(adminRoleCell).toContainText('Admin');

  // Step 6: Log out and log in as the modified user to confirm Admin privileges
  const logoutButtonSelector = "[data-testid='logout-button']";
  await page.locator(logoutButtonSelector).click();
  await page.waitForURL('https://dev.roost.ai/login');

  // Log in as the modified user
  const loginUrl = 'https://dev.roost.ai/login';
  await page.goto(loginUrl);
  await page.locator('input[name="username"]').fill('aishwarya.rane');
  await page.locator('input[name="password"]').fill('securepassword123');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(adminViewUrl);

  // Step 7: Check if the Admin-specific tabs are accessible to the modified user
  const adminTabSelector = "[data-testid=\"admin-tab\"]";
  const adminTab = page.locator(adminTabSelector);
  await expect(adminTab).toBeVisible();
  await adminTab.click();
  await expect(page).toHaveURL('https://dev.roost.ai/admin/app');
});