# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 12
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-10-03 11:19:44

## Scenarios

### 1. Verify User Login via Google OAuth
_This test verifies that users can log in using their Google account via OAuth integration on the login page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, error-handling, form-submission, keyboard-navigation, network-resilience, performance, security, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate the Google OAuth login button using the stable selector.
- Click on the Google OAuth login button.
- Ensure the browser is redirected to the Google OAuth login page.
- Enter valid Google account credentials and submit.
- Verify that the user is redirected back to the application dashboard.
- Check that the user's session is authenticated and a valid token is received.
- Verify the presence of user-specific data on the dashboard (e.g., username or account details).

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- The user is redirected to the Google OAuth login page.
- The user is redirected back to the application dashboard after successful authentication.
- The user's session is authenticated and a valid token is available.
- User-specific data is displayed on the dashboard.

---

### 2. Verify Navigation to Privacy Policy from Login Page
_This test ensures users can navigate to the Privacy Policy page from the login page and return back without issues._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, authentication, auto-generated, cross-browser, keyboard-navigation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Scroll to the footer section of the page.
- Locate the Privacy Policy link using the stable selector.
- Click on the Privacy Policy link.
- Ensure the browser navigates to https://roost.ai/privacy-policy.
- Verify the contents of the Privacy Policy page are loaded.
- Locate the 'Back' button in the browser and click it.
- Ensure the browser navigates back to the login page.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- The user is redirected to the Privacy Policy page.
- The Privacy Policy page content is displayed correctly.
- The user can navigate back to the login page using the browser's back button.

---

### 3. Verify Login via GitHub OAuth
_This test ensures that users can log in using their GitHub account via OAuth integration._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, error-handling, form-submission, keyboard-navigation, network-resilience, performance, security, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate the GitHub OAuth login button using the stable selector.
- Click on the GitHub OAuth login button.
- Ensure the browser is redirected to the GitHub OAuth login page.
- Enter valid GitHub account credentials and submit.
- Verify that the user is redirected back to the application dashboard.
- Check that the user's session is authenticated and a valid token is received.
- Verify the presence of user-specific data on the dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- The user is redirected to the GitHub OAuth login page.
- The user is redirected back to the application dashboard after successful authentication.
- The user's session is authenticated and a valid token is available.
- User-specific data is displayed on the dashboard.

---

### 4. Verify Admin Role Assignment and Removal Workflow
_Ensures that an admin can successfully assign and remove user roles such as 'Admin' and verify updates to the system._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, keyboard-navigation, network-resilience, performance, ui-test, user_role_management
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: user_role_management
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Navigate to the Admin tab using the link with the text 'Admin'.
- Locate the user named 'bhhavya.sureka' in the user table.
- Click the 'Remove Admin' button next to the user 'bhhavya.sureka'.
- Verify a confirmation prompt appears and click the 'Confirm' button.
- Locate the same user 'bhhavya.sureka' and click the 'Make Admin' button.
- Verify that the user's role is updated to 'Admin' in the user table.

#### Selectors Used:
- **Type**: a, **Text**: 'Admin', **Selector**: `[data-testid="admin-tab"]`, **Action**: click
- **Type**: a, **Text**: 'bhhavya.sureka', **Selector**: `//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div[2]/div[2]/a`, **Action**: verify

#### Expected Results:
- User 'bhhavya.sureka' is successfully removed as an admin.
- User 'bhhavya.sureka' is successfully re-assigned as an admin.

---

### 5. Search and Filter Users in Admin Dashboard
_Verifies that the search functionality in the Admin dashboard filters users accurately based on input criteria._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, keyboard-navigation, performance, search_functionality, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: medium

**Type**: search_functionality
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Navigate to the Admin tab using the link with the text 'Admin'.
- Locate the search bar labeled 'Search for the users'.
- Type 'harish' into the search bar.
- Click the 'Apply' button next to the search bar.
- Verify that the user list is filtered to show only users matching 'harish'.
- Clear the search criteria and verify the full user list is displayed.

#### Selectors Used:
- **Type**: a, **Text**: 'Admin', **Selector**: `[data-testid="admin-tab"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test"]`, **Action**: type

#### Expected Results:
- User list is successfully filtered based on the search criteria.
- Clearing the search criteria restores the full user list.

---

### 6. Verify Search Functionality in Event Management
_Tests the ability of a user to search for specific events in the Event Management dashboard and verify that the results match the search criteria._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, form-submission, functional, performance, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/roostgpt/events

#### Steps:
- Navigate to https://dev.roost.ai/roostgpt/events.
- Verify that the page loads correctly and the search bar is visible.
- Click on the search bar identified by the selector '[data-testid="events-search-box"].
- Type 'test-event-123' into the search bar.
- Simulate pressing the Enter key.
- Wait for the results to load on the page.
- Verify that the displayed events include 'test-event-123' in the event name or details.
- Verify that no unrelated events are displayed in the results.
- Clear the search input field and verify that the full list of events is displayed again.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="events-search-box"]`, **Action**: type

#### Expected Results:
- Matching search results appear based on the input query.
- No unrelated events are displayed in the search results.
- Clearing the search field restores the full list of events.

---

### 7. Verify Navigation Between Tabs
_Tests the ability of a user to navigate between different tabs on the dashboard (e.g., RoostGPT, Admin, Connectors, etc.) and verify correct page content loads._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, functional, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/roostgpt/events
- https://dev.roost.ai/roostgpt/tests
- https://dev.roost.ai/roostgpt/analyses

#### Steps:
- Navigate to https://dev.roost.ai/roostgpt/events.
- Verify that the Generations tab is active by default.
- Click on the 'Test Suites' tab with selector '//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]'.
- Wait for the Test Suites page to load and verify its content.
- Click on the 'Analysis' tab with selector '//a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')]'.
- Verify that the Analysis page is displayed correctly.
- Return to the Generations tab and verify the content reloads as expected.

#### Selectors Used:
- **Type**: a, **Text**: 'Test Suites', **Selector**: `//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click
- **Type**: a, **Text**: 'Analysis', **Selector**: `//a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click

#### Expected Results:
- Correct content loads when navigating to each tab.
- No errors or visual glitches during navigation.
- Active tab is visually highlighted.

---

### 8. Verify Test Suite Search Functionality
_Ensure users can search for test suites using the search functionality and the results are correctly filtered._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, form-submission, performance, search, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: search
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the Test Suites page.
- Locate the search input field.
- Type a search query into the input field.
- Press 'Enter' to execute the search.
- Wait for the search results to load.
- Verify that the displayed test suites match the search criteria.
- Attempt to search for a test suite that does not exist.
- Check that no results are displayed for invalid queries.
- Clear the search box and ensure all test suites are displayed again.
- Validate that pagination works correctly for filtered results, if applicable.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="tests-search-box"]`, **Action**: type

#### Expected Results:
- Results are filtered according to the search query.
- Search results update dynamically as the query changes.
- No results are displayed for invalid queries.
- Clearing the search box restores the full list of test suites.

---

### 9. Verify Pagination for Test Suite List
_Ensure that users can navigate through multiple pages of test suites using pagination controls._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, keyboard-navigation, navigation, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the Test Suites page.
- Verify the presence of pagination controls.
- Click on the '2' button to navigate to the second page.
- Verify that the second page of test suites is displayed.
- Click the 'Next' arrow button to go to the next page.
- Validate that pagination updates correctly.
- Click the 'Last' button to navigate to the last page.
- Verify that the last page of test suites is displayed.
- Click the 'First' button to navigate to the first page.
- Ensure that the first page of test suites is displayed.

#### Selectors Used:
- **Type**: button, **Text**: '2', **Selector**: `//button[normalize-space()="2"]`, **Action**: click
- **Type**: button, **Text**: '»', **Selector**: `[data-testid="arrow-icon"]`, **Action**: click
- **Type**: button, **Text**: 'Last', **Selector**: `[data-testid="paginator-last-page-button"]`, **Action**: click
- **Type**: button, **Text**: 'First', **Selector**: `[data-testid="paginator-first-page-button"]`, **Action**: click

#### Expected Results:
- Pagination controls are displayed correctly.
- Users can navigate between pages seamlessly.
- The correct page of test suites is displayed after navigation.
- Edge buttons ('First' and 'Last') work as expected.

---

### 10. Verify Navigation to RoostGPT Pages
_Validate that users can navigate between the RoostGPT tabs seamlessly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, data-validation, keyboard-navigation, mobile, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests
- https://dev.roost.ai/roostgpt/analyses
- https://dev.roost.ai/roostgpt/events

#### Steps:
- Navigate to the Test Suites page.
- Click on the 'Analysis' tab.
- Verify that the Analysis page is displayed.
- Click on the 'Generations' tab.
- Ensure that the Generations page is loaded.
- Return to the Test Suites tab.
- Verify that the Test Suites page is displayed again.

#### Selectors Used:
- **Type**: a, **Text**: 'Analysis', **Selector**: `//a[@href='/roostgpt/analyses' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click
- **Type**: a, **Text**: 'Generations', **Selector**: `//a[@href='/roostgpt/events' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click
- **Type**: a, **Text**: 'Test Suites', **Selector**: `//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click

#### Expected Results:
- Users can navigate seamlessly between tabs.
- Each tab displays its respective content correctly.
- The browser URL updates to reflect the selected tab.

---

### 11. Verify Connector Search Functionality
_Test the functionality of the search bar to ensure users can locate connectors efficiently using specific keywords._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, keyboard-navigation, performance, search, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: medium

**Type**: search
**Pages Involved:**
- https://dev.roost.ai/connectors

#### Steps:
- Navigate to the Connectors page using the 'Connectors' tab.
- Verify the visibility of the search bar identified by the stable selector [data-testid="Connector-search-box"].
- Type 'test-connector' into the search bar.
- Press Enter or wait for the search results to populate.
- Verify that the list of connectors updates and displays only those matching the search term.
- Assert that the displayed connectors contain the term 'test-connector' in their names or descriptions.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="Connector-search-box"]`, **Action**: type
- **Type**: a, **Text**: 'Connectors', **Selector**: `[data-testid="connectors-tab"]`, **Action**: click

#### Expected Results:
- Search results update dynamically to display only matching connectors.
- No connectors are displayed if no match is found.
- Search functionality works without performance degradation.

---

### 12. Verify Pagination Across Connector List
_Test the functionality of pagination controls to navigate through multiple pages of listed connectors._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, keyboard-navigation, navigation, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/connectors

#### Steps:
- Navigate to the Connectors page using the 'Connectors' tab.
- Verify the visibility of pagination controls, including buttons for 'First', '«', '»', 'Last', and numbered pages.
- Click on the button for page '2' and verify that the connectors list updates to display page 2 results.
- Click on the '»' button and verify that the next page of connectors is displayed.
- Click on the 'Last' button and verify that the last page of connectors is displayed.
- Click on the 'First' button and verify that the first page of connectors is displayed.
- Click on the '«' button to navigate back to the previous page and verify results.

#### Selectors Used:
- **Type**: a, **Text**: 'Connectors', **Selector**: `[data-testid="connectors-tab"]`, **Action**: click
- **Type**: button, **Text**: '2', **Selector**: `//button[normalize-space()="2"]`, **Action**: click
- **Type**: button, **Text**: '»', **Selector**: `[data-testid="arrow-icon"]`, **Action**: click
- **Type**: button, **Text**: 'Last', **Selector**: `[data-testid="paginator-last-page-button"]`, **Action**: click
- **Type**: button, **Text**: 'First', **Selector**: `[data-testid="paginator-first-page-button"]`, **Action**: click

#### Expected Results:
- Each pagination button navigates to the correct page.
- Connector list updates correctly based on page selection.
- No duplicate or missing connectors are displayed.

---

