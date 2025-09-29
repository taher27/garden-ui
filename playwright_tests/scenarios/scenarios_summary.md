# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 9
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-09-29 11:58:42

## Scenarios

### 1. Verify Navigation to 'Analysis' Page and Search Functionality
_This test verifies that the user can navigate to the 'Analysis' page from the dashboard and use the search box to filter analysis results._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, form-submission, keyboard-navigation, navigation_and_search, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: medium

**Type**: navigation_and_search
**Pages Involved:**
- https://dev.roost.ai
- https://dev.roost.ai/roostgpt/analyses

#### Steps:
- Navigate to the primary dashboard at https://dev.roost.ai.
- Click on the 'RoostGPT' tab using the selector [data-testid="roostGPT-tab"].
- Once the 'RoostGPT' page loads, click on the 'Analysis' link using the selector //a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')].
- Verify that the 'Analysis' page URL is https://dev.roost.ai/roostgpt/analyses.
- Locate the search input box using the selector [data-testid="events-search-box"].
- Type the search term 'performance' into the search input box.
- Press the Enter key to initiate the search.
- Validate that the displayed results on the 'Analysis' page are filtered based on the search term 'performance'.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT', **Selector**: `[data-testid="roostGPT-tab"]`, **Action**: click
- **Type**: a, **Text**: 'Analysis', **Selector**: `//a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="events-search-box"]`, **Action**: type

#### Expected Results:
- The user successfully navigates to the 'Analysis' page.
- The search input box is functional and responsive.
- The search results are accurately filtered based on the entered query.

---

### 2. Verify Navigation Between Tabs and Analysis Page
_This test ensures seamless navigation between the 'RoostGPT', 'Connectors', and 'Analysis' tabs to confirm proper functionality and URL handling._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, keyboard-navigation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai
- https://dev.roost.ai/roostgpt/analyses
- https://dev.roost.ai/roostgpt/connectors

#### Steps:
- Open the primary dashboard at https://dev.roost.ai.
- Click on the 'RoostGPT' tab using the selector [data-testid="roostGPT-tab"].
- Verify that the 'RoostGPT' page loads successfully.
- Click on the 'Connectors' tab using the selector [data-testid="connectors-tab"].
- Validate the URL changes to https://dev.roost.ai/roostgpt/connectors.
- Click on the 'Analysis' link using the selector //a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')].
- Confirm the URL changes to https://dev.roost.ai/roostgpt/analyses.
- Verify visible content matches the 'Analysis' page description.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT', **Selector**: `[data-testid="roostGPT-tab"]`, **Action**: click
- **Type**: a, **Text**: 'Connectors', **Selector**: `[data-testid="connectors-tab"]`, **Action**: click
- **Type**: a, **Text**: 'Analysis', **Selector**: `//a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click

#### Expected Results:
- Navigation between tabs and pages functions correctly.
- URLs update accurately based on user interaction.
- Content on each page loads as expected.

---

### 3. Verify User Role Modification to Admin
_This test validates the functionality of modifying a user's role to Admin and ensures that the role update reflects correctly in the system._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, form-submission, keyboard-navigation, network-resilience, performance, role_management, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: role_management
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Navigate to the Admin View page.
- Locate the user 'Aishwarya Rane' in the user table.
- Click on the 'Make Admin' button next to the user's details.
- Confirm the role update in the dialog box that appears.
- Verify that the user now has the Admin role in the table.
- Log out and log in as the modified user to confirm Admin privileges.
- Check if the Admin-specific tabs are accessible to the modified user.

#### Selectors Used:
- **Type**: a, **Text**: 'aishwarya', **Selector**: `//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[4]/td[1]/div/div[2]/div[2]/a`, **Action**: click
- **Type**: a, **Text**: 'Admin', **Selector**: `[data-testid="admin-tab"]`, **Action**: click

#### Expected Results:
- The user's role is successfully updated to Admin.
- The Admin-specific tabs and privileges are accessible to the modified user.

---

### 4. Verify User Removal Functionality
_This test ensures that the 'Delete User' functionality removes a user from the system and updates the user table accordingly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, keyboard-navigation, network-resilience, performance, ui-test, user_management
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: user_management
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Navigate to the Admin View page.
- Locate the user 'Bhhavvya Sureka' in the user table.
- Click on the 'Delete User' button next to the user's details.
- Confirm the user deletion in the dialog box that appears.
- Verify that the user is no longer listed in the user table.
- Check the backend to ensure the user is removed from the database.
- Attempt to log in with the deleted user's credentials to confirm removal.

#### Selectors Used:
- **Type**: a, **Text**: 'bhhavvya.sureka', **Selector**: `//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div[2]/div[2]/a`, **Action**: click
- **Type**: a, **Text**: 'Admin', **Selector**: `[data-testid="admin-tab"]`, **Action**: click

#### Expected Results:
- The user is successfully removed from the system.
- The user table updates to reflect the removal.
- The backend database no longer contains the removed user.

---

### 5. Search for a Connector and Verify Results
_This test verifies that the user can search for a specific connector using the search functionality and the results are displayed accurately._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, functional, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/connectors

#### Steps:
- Navigate to the 'Connectors' page.
- Locate the search input field.
- Type 'Postgres' into the search input field.
- Press the 'Enter' key to submit the search query.
- Verify that the connectors list updates to show only connectors matching 'Postgres'.
- Click on the first connector in the filtered list to view its details.
- Verify that the connector details page displays information relevant to 'Postgres'.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="Connector-search-box"]`, **Action**: type
- **Type**: input, **Text**: '', **Selector**: `[data-testid="Connector-search-box"]`, **Action**: press_enter

#### Expected Results:
- Only connectors matching the search query 'Postgres' are displayed.
- Clicking on a connector navigates to its details page with accurate information.

---

### 6. Paginate Through Connectors List
_This test verifies that pagination controls allow the user to navigate through the list of connectors effectively._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, functional, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/connectors

#### Steps:
- Navigate to the 'Connectors' page.
- Verify that the pagination controls are visible at the bottom of the page.
- Click the 'Next' button to navigate to the next page of connectors.
- Verify that the list updates to display connectors from the next page.
- Click the 'Previous' button to navigate back to the previous page.
- Verify that the connectors from the previous page are displayed.
- Click the 'First' button to navigate to the first page of connectors.
- Verify that the first set of connectors is displayed.
- Click the 'Last' button to navigate to the last page.
- Verify that the connectors from the last page are displayed.

#### Selectors Used:
- **Type**: button, **Text**: '»', **Selector**: `[data-testid="arrow-icon"]`, **Action**: click
- **Type**: button, **Text**: '«', **Selector**: `[data-testid="arrow-left"]`, **Action**: click
- **Type**: button, **Text**: 'First', **Selector**: `[data-testid="paginator-first-page-button"]`, **Action**: click
- **Type**: button, **Text**: 'Last', **Selector**: `[data-testid="paginator-last-page-button"]`, **Action**: click

#### Expected Results:
- Pagination controls function correctly, updating the displayed list of connectors.
- The 'Next' and 'Previous' buttons navigate between pages sequentially.
- The 'First' and 'Last' buttons navigate to the respective pages.

---

### 7. Verify Users Can Search and Filter Test Suites
_This scenario tests the ability of users to search for specific test suites using the search box and apply filters to narrow down results._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, concurrency, form-submission, functional, keyboard-navigation, performance, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the Test Suites page.
- Verify the visibility of the search box with placeholder text.
- Type a valid test suite name into the search box.
- Press the 'Enter' key to initiate the search.
- Observe the filtered results displayed in the test suites table.
- Verify that the table updates with results matching the search query.
- Click on the 'Show My Test Suites' filter option.
- Verify the table updates and only displays test suites created by the logged-in user.
- Clear the search box input and verify the table resets to display all test suites.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="tests-search-box"]`, **Action**: type
- **Type**: a, **Text**: 'Test Suites', **Selector**: `//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click

#### Expected Results:
- Search results display test suites matching the query.
- Filter updates the table to show only relevant test suites.

---

### 8. Verify Pagination Functionality in Test Suites Table
_This scenario tests the ability of users to navigate through the paginated test suite table using pagination controls._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, functional, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: high

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the Test Suites page.
- Verify the visibility of pagination controls at the bottom of the table.
- Click on the '2' button to navigate to page 2.
- Verify that the table updates to display test suites from page 2.
- Click on the 'Next' button to navigate to page 3.
- Verify that the table updates to display test suites from page 3.
- Click on the 'Last' button to navigate to the last page.
- Verify the table updates to display test suites from the last page.
- Click the 'First' button to navigate back to the first page.
- Verify the table updates to display test suites from the first page.

#### Selectors Used:
- **Type**: button, **Text**: '2', **Selector**: `//button[normalize-space()="2"]`, **Action**: click
- **Type**: button, **Text**: 'Last', **Selector**: `[data-testid="paginator-last-page-button"]`, **Action**: click

#### Expected Results:
- Table updates correctly based on the selected page.
- Pagination controls navigate between pages as expected.

---

### 9. Verify Addition of a New Test Suite
_This scenario tests the ability to add a new test suite using the 'Add Test Suite' option._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, form-submission, functional, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the Test Suites page.
- Click on the 'Add Test Suite' option.
- Verify that the 'Add Test Suite' form appears.
- Fill in all required fields for the test suite (name, creator, GenAI model, test type).
- Click on the 'Submit' button to create the test suite.
- Verify that the new test suite appears in the table after submission.
- Search for the newly created test suite using the search box.
- Verify the table updates to display the newly created test suite.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `[data-testid="tests-search-box"]`, **Action**: type
- **Type**: a, **Text**: 'Add Test Suite', **Selector**: `//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click

#### Expected Results:
- New test suite is added successfully.
- Table updates to display the new test suite.

---

