# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 9
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-10-01 18:15:57

## Scenarios

### 1. Verify Login via Okta Authentication
_Tests the login functionality using Okta OAuth integration, ensuring the user can authenticate and access their dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the Okta login option.
- Redirect to Okta's authentication page.
- Enter valid Okta credentials (username and password).
- Submit the login form on the Okta page.
- Redirect back to the primary application dashboard upon successful authentication.
- Verify that the dashboard loads with user-specific data and environment management options.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]`, **Action**: click

#### Expected Results:
- User is successfully redirected to Okta's authentication page.
- Upon entering valid credentials, user is redirected back to the application dashboard.
- Dashboard displays user-specific options such as environment creation and monitoring.

---

### 2. Verify Access to Privacy Policy
_Tests the ability to navigate to the privacy policy page from the login page, ensuring the link works correctly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 25 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate the 'Privacy Policy' link in the footer.
- Click on the 'Privacy Policy' link.
- Redirect to the privacy policy page at https://roost.ai/privacy-policy.
- Verify that the privacy policy page loads with the expected content.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the privacy policy page upon clicking the link.
- Privacy policy page displays the correct and complete content.

---

### 3. Verify Login via GitHub OAuth
_Tests the login functionality using GitHub OAuth integration, ensuring the user can authenticate and access their dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the GitHub login option.
- Redirect to GitHub's authentication page.
- Enter valid GitHub credentials (username and password).
- Grant access to the application if prompted.
- Redirect back to the primary application dashboard upon successful authentication.
- Verify that the dashboard loads with user-specific data and environment management options.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is successfully redirected to GitHub's authentication page.
- Upon entering valid credentials, user is redirected back to the application dashboard.
- Dashboard displays user-specific options such as environment creation and monitoring.

---

### 4. Verify Admin User Search and Permission Management
_This test verifies that an admin can search for a user, view their details, and manage their permissions (e.g., removing admin rights)._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, keyboard-navigation, network-resilience, performance, security, ui-test, user_management
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: high

**Type**: user_management
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Navigate to the Admin Dashboard page.
- Locate the user search input field.
- Type the username 'bhhavya.sureka' into the search input field.
- Click the 'Apply' button to filter the results.
- Verify that the user 'bhhavya.sureka' appears in the search results.
- Click on the username 'bhhavya.sureka' to open the user details.
- Locate the 'Remove Admin' button under permissions.
- Click the 'Remove Admin' button.
- Confirm the removal action in the modal dialog (if applicable).
- Verify that the user's admin rights have been successfully removed by checking their updated role in the user list.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test"]`, **Action**: type
- **Type**: a, **Text**: 'bhhavya.sureka', **Selector**: `//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div[2]/div[2]/a`, **Action**: click

#### Expected Results:
- The user list is filtered to show 'bhhavya.sureka'.
- Admin rights for 'bhhavya.sureka' are successfully removed.

---

### 5. Validate Adding a New Rooster User
_This test verifies that an admin can successfully add a new user by filling out a form and submitting it._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, drag-and-drop, error-handling, form-submission, performance, ui-test, user_creation
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: medium

**Type**: user_creation
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Navigate to the Admin Dashboard page.
- Locate and click on the 'Add Roosters' button.
- Verify that the user creation form is displayed.
- Fill out the username field with 'new_user'.
- Fill out the email field with 'new_user@example.com'.
- Select 'Developer' from the role dropdown.
- Click the 'Submit' button to add the user.
- Verify that a success message appears after submission.
- Check that the new user 'new_user' is visible in the user list.

#### Selectors Used:
- **Type**: a, **Text**: 'Admin', **Selector**: `[data-testid="admin-tab"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test"]`, **Action**: type

#### Expected Results:
- User creation form is displayed.
- Admin successfully adds a new user.
- New user appears in the user list.

---

### 6. Verify Connector Search Functionality
_This test verifies that the search functionality on the Connectors page correctly filters the displayed connectors based on the search term entered by the user._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, form-submission, keyboard-navigation, performance, search, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: search
**Pages Involved:**
- https://dev.roost.ai/connectors

#### Steps:
- Navigate to https://dev.roost.ai/connectors.
- Locate the search input field using the stable selector '[data-testid="Connector-search-box"]'.
- Type a valid connector name into the search input field.
- Verify that the search results update dynamically to match the search term.
- Clear the search input field.
- Type a partial connector name into the search input field.
- Verify that the search results include all connectors matching the partial term.
- Type a connector name that does not exist into the search input field.
- Verify that no results are displayed.
- Click the 'First' button using the stable selector '[data-testid="paginator-first-page-button"]' to ensure pagination works with filtered results.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="Connector-search-box"]`, **Action**: type
- **Type**: button, **Text**: 'First', **Selector**: `[data-testid="paginator-first-page-button"]`, **Action**: click

#### Expected Results:
- Search results dynamically update based on the inputted search term.
- Results include partial matches when a partial term is entered.
- No connectors are displayed when an invalid name is searched.
- Pagination functionality works correctly with filtered results.

---

### 7. Verify Pagination Controls on Connectors Page
_This test validates that pagination controls such as 'First', 'Last', and numbered pages work correctly and update the displayed connectors._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, keyboard-navigation, pagination, performance, ui-test
**Est. Execution Time**: 55 seconds | **Flakiness Potential**: medium

**Type**: pagination
**Pages Involved:**
- https://dev.roost.ai/connectors

#### Steps:
- Navigate to https://dev.roost.ai/connectors.
- Click the 'First' button using the stable selector '[data-testid="paginator-first-page-button"]'.
- Verify that the first page of connectors is displayed.
- Click the numbered page button '2' using the stable selector '//button[normalize-space()="2"]'.
- Verify that the second page of connectors is displayed.
- Click the 'Last' button using the stable selector '[data-testid="paginator-last-page-button"]'.
- Verify that the last page of connectors is displayed.
- Click the 'Left Arrow' button using the stable selector '[data-testid="arrow-left"]'.
- Verify that the previous page of connectors is displayed.
- Click the 'Right Arrow' button using the stable selector '[data-testid="arrow-icon"]'.
- Verify that the next page of connectors is displayed.

#### Selectors Used:
- **Type**: button, **Text**: 'First', **Selector**: `[data-testid="paginator-first-page-button"]`, **Action**: click
- **Type**: button, **Text**: '2', **Selector**: `//button[normalize-space()="2"]`, **Action**: click
- **Type**: button, **Text**: 'Last', **Selector**: `[data-testid="paginator-last-page-button"]`, **Action**: click
- **Type**: button, **Text**: '«', **Selector**: `[data-testid="arrow-left"]`, **Action**: click
- **Type**: button, **Text**: '»', **Selector**: `[data-testid="arrow-icon"]`, **Action**: click

#### Expected Results:
- The first page of connectors is displayed when 'First' is clicked.
- The respective page number is displayed when a numbered page button is clicked.
- The last page of connectors is displayed when 'Last' is clicked.
- Pagination updates correctly with 'Left Arrow' and 'Right Arrow' actions.

---

### 8. Verify Test Suite Search Functionality
_Tests the ability to search for a specific test suite using the search box._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, form-submission, functional, keyboard-navigation, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the 'Test Suites' page.
- Verify the presence of the search box using its selector.
- Click on the search box to focus.
- Type a specific test suite name into the search box.
- Press 'Enter' or wait for the results to auto-populate.
- Verify that the test suite matching the search query is displayed in the table.
- Scroll through the table and confirm that only relevant results are shown.
- Clear the search box and validate that the full list of test suites reappears.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="tests-search-box"]`, **Action**: type

#### Expected Results:
- Test suite matching the search query is displayed.
- The table updates dynamically to reflect the search results.
- Clearing the search box restores the full list of test suites.

---

### 9. Verify Pagination Workflow for Test Suites
_Tests the navigation between pages using pagination controls._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, functional, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the 'Test Suites' page.
- Verify the presence of pagination controls (First, Last, Arrow Left, Arrow Right).
- Click on the 'Next' button and verify that the next page is displayed.
- Click on the 'Previous' button and verify that the previous page is displayed.
- Click on the 'First' button and verify that the first page is displayed.
- Click on the 'Last' button and verify that the last page is displayed.
- Click on a specific page number and verify that the corresponding page is displayed.
- Attempt rapid navigation through pages and verify no UI glitches occur.

#### Selectors Used:
- **Type**: button, **Text**: 'First', **Selector**: `[data-testid="paginator-first-page-button"]`, **Action**: click
- **Type**: button, **Text**: '«', **Selector**: `[data-testid="arrow-left"]`, **Action**: click
- **Type**: button, **Text**: '»', **Selector**: `[data-testid="arrow-icon"]`, **Action**: click
- **Type**: button, **Text**: 'Last', **Selector**: `[data-testid="paginator-last-page-button"]`, **Action**: click

#### Expected Results:
- Pagination buttons correctly navigate to the intended pages.
- No UI glitches or errors during navigation.
- The table updates dynamically to display the corresponding page's content.

---

