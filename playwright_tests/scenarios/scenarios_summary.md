# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 6
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-09-30 14:20:36

## Scenarios

### 1. Verify Google Login Integration
_This test verifies the integration and functionality of the Google login option on the login page. It ensures that users are directed to the Google authentication page, can authenticate successfully, and are redirected back to the application._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, form-submission, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://accounts.google.com/

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate the Google login button on the page.
- Click on the Google login button.
- Verify the redirection to Google's OAuth2 authentication page.
- Enter valid Google credentials on the authentication form.
- Click the 'Next' button to proceed.
- Complete any additional Google verification steps if prompted, such as 2FA.
- Verify redirection back to the https://dev.roost.ai domain.
- Check if the user is successfully logged in by verifying the presence of the dashboard or user-specific elements.
- Capture and log the authentication token returned by Google.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google authentication page.
- Authentication is successful with valid credentials.
- User is redirected back to the application's dashboard.
- Google authentication token is captured and validated.

---

### 2. Verify Okta Login Integration
_This test verifies the integration and functionality of the Okta login option on the login page. It ensures that users are directed to the Okta authentication page, can authenticate successfully, and are redirected back to the application._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, form-submission, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev-53854943.okta.com/oauth2/

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate the Okta login button on the page.
- Click on the Okta login button.
- Verify the redirection to Okta's authentication page.
- Enter valid Okta credentials on the authentication form.
- Click the 'Sign In' button to proceed.
- Complete any additional Okta verification steps if prompted, such as 2FA.
- Verify redirection back to the https://dev.roost.ai domain.
- Check if the user is successfully logged in by verifying the presence of the dashboard or user-specific elements.
- Capture and log the authentication token returned by Okta.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]`, **Action**: click

#### Expected Results:
- User is redirected to the Okta authentication page.
- Authentication is successful with valid credentials.
- User is redirected back to the application's dashboard.
- Okta authentication token is captured and validated.

---

### 3. Verify User Role Management in Admin Panel
_This test ensures that an admin can manage user roles by making a user an admin, revoking admin rights, and deleting a user._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, keyboard-navigation, performance, ui-test, user_management
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: user_management
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Log in as an admin user.
- Navigate to the Admin tab using the 'Admin' link.
- Locate the user 'bhhavya.sureka' in the user list.
- Click the 'Make Admin' button beside the user 'bhhavya.sureka'.
- Verify that the user role changes to 'Admin'.
- Click the 'Remove Admin' button beside the user 'bhhavya.sureka'.
- Verify that the user role changes back to 'User'.
- Click the 'Delete User' button beside the user 'bhhavya.sureka'.
- Confirm deletion in the confirmation dialog.
- Verify that the user 'bhhavya.sureka' is removed from the user list.

#### Selectors Used:
- **Type**: a, **Text**: 'Admin', **Selector**: `[data-testid="admin-tab"]`, **Action**: click
- **Type**: a, **Text**: 'bhhavya.sureka', **Selector**: `//div[@id='layout']/div[1]/div/div/div[2]/div/div/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div[2]/div[2]/a`, **Action**: locate

#### Expected Results:
- User role is updated to 'Admin' when 'Make Admin' is clicked.
- User role is reverted to 'User' when 'Remove Admin' is clicked.
- User is successfully deleted from the user list.

---

### 4. Verify User Search Functionality in Admin Panel
_This test ensures that an admin can search for users in the user list using the search functionality._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, form-submission, keyboard-navigation, performance, search, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: medium

**Type**: search
**Pages Involved:**
- https://dev.roost.ai/admin/app

#### Steps:
- Log in as an admin user.
- Navigate to the Admin tab using the 'Admin' link.
- Locate the search input field.
- Type 'harish' into the search input field.
- Press Enter or click the 'Search' button.
- Verify that the user list updates to show only users matching the search term.
- Clear the search input field.
- Verify that the full user list is displayed again.

#### Selectors Used:
- **Type**: a, **Text**: 'Admin', **Selector**: `[data-testid="admin-tab"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test"]`, **Action**: type

#### Expected Results:
- Only users matching the search term are displayed.
- The full user list is restored when the search term is cleared.

---

### 5. Verify Navigation Through Test Suites and Detailed View
_Ensure users can navigate through the list of test suites, search for a specific suite, and view detailed information about the selected suite._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, form-submission, keyboard-navigation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the URL https://dev.roost.ai/roostgpt/tests.
- Locate and click on the 'Test Suites' link using its stable selector.
- Verify the page loads successfully with the list of test suites.
- Identify the search bar using its stable selector.
- Type the name of the test suite to be searched into the search bar.
- Wait for the search results to update dynamically.
- Locate the specific test suite row in the table.
- Click on the test suite row using its stable selector.
- Verify the detailed view of the test suite is displayed.
- Check that the details include creation and modification history.

#### Selectors Used:
- **Type**: a, **Text**: 'Test Suites', **Selector**: `//a[@href='/roostgpt/tests' and contains(@class, 'headerButton_collabButton__1E3Qx')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="tests-search-box"]`, **Action**: type
- **Type**: a, **Text**: 'taher', **Selector**: `//div[@id='layout']/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr[1]/td[2]/div/div[2]/div[2]/a`, **Action**: click

#### Expected Results:
- The user can see the list of test suites.
- Search functionality filters the list based on the input.
- The selected test suite's detailed view is displayed correctly.
- Details include creation and modification history.

---

### 6. Pagination Functionality in Test Suites List
_Validate that users can navigate through multiple pages of test suites using pagination controls._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, network-resilience, pagination, performance, ui-test
**Est. Execution Time**: 55 seconds | **Flakiness Potential**: high

**Type**: pagination
**Pages Involved:**
- https://dev.roost.ai/roostgpt/tests

#### Steps:
- Navigate to the URL https://dev.roost.ai/roostgpt/tests.
- Verify the presence of pagination controls at the bottom of the test suites list.
- Click the 'Next' button to move to the next page.
- Verify that the next page of test suites is displayed.
- Click the 'Previous' button to return to the previous page.
- Use the 'First' button to navigate to the first page.
- Verify the first page is displayed correctly.
- Use the 'Last' button to navigate to the last page.
- Verify the last page is displayed correctly.
- Click on a specific page number to navigate directly to that page.
- Verify the content corresponds to the selected page number.

#### Selectors Used:
- **Type**: button, **Text**: '»', **Selector**: `[data-testid="arrow-icon"]`, **Action**: click
- **Type**: button, **Text**: '«', **Selector**: `[data-testid="arrow-left"]`, **Action**: click
- **Type**: button, **Text**: 'First', **Selector**: `[data-testid="paginator-first-page-button"]`, **Action**: click
- **Type**: button, **Text**: 'Last', **Selector**: `[data-testid="paginator-last-page-button"]`, **Action**: click
- **Type**: button, **Text**: '2', **Selector**: `//button[normalize-space()="2"]`, **Action**: click

#### Expected Results:
- Pagination controls navigate correctly between pages.
- Content updates dynamically based on the selected page.
- First and Last buttons work as expected.
- Specific page numbers navigate directly to the correct page.

---

