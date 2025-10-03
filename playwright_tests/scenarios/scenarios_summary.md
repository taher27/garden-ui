# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 8
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-10-03 16:48:42

## Scenarios

### 1. Verify Google OAuth Login
_Test the functionality of logging in with a Google account, ensuring redirection to the Google OAuth page, proper authentication, and returning to the platform dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, form-submission, network-resilience, performance, security, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://accounts.google.com/o/oauth2/v2/auth
- https://dev.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click the 'Sign in with Google' button.
- Verify redirection to the Google OAuth page.
- Enter valid Google account credentials (email and password).
- Complete any two-factor authentication if prompted.
- Consent to the requested permissions for the Roost application.
- Verify redirection back to the dashboard at https://dev.roost.ai.
- Check that the user is logged in by verifying the presence of a user-specific element on the dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google OAuth page.
- User successfully authenticates using Google credentials.
- User is redirected back to the Roost dashboard.
- A user-specific element is visible, confirming successful login.

---

### 2. Verify GitHub OAuth Login
_Test the functionality of logging in with a GitHub account, ensuring redirection to the GitHub OAuth page, proper authentication, and returning to the platform dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, form-submission, network-resilience, performance, security, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://github.com/login/oauth/authorize
- https://dev.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click the 'Sign in with GitHub' button.
- Verify redirection to the GitHub OAuth page.
- Enter valid GitHub account credentials (email and password).
- Complete any two-factor authentication if prompted.
- Consent to the requested permissions for the Roost application.
- Verify redirection back to the dashboard at https://dev.roost.ai.
- Check that the user is logged in by verifying the presence of a user-specific element on the dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is redirected to the GitHub OAuth page.
- User successfully authenticates using GitHub credentials.
- User is redirected back to the Roost dashboard.
- A user-specific element is visible, confirming successful login.

---

### 3. Verify Login with Google Authentication
_This test verifies that a user can successfully log in using their Google account through the provided Google authentication link._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, keyboard-navigation, network-resilience, performance, security, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Verify the presence of the Google authentication link using its stable selector.
- Click on the Google authentication link.
- Wait for the redirection to Google's login page.
- On the Google login page, enter valid credentials and submit.
- Wait for the redirection back to the Roost dashboard page.
- Verify that the user is successfully logged in by checking the presence of dashboard elements.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google login page.
- User is able to enter credentials and log in.
- User is redirected back to Roost and sees the dashboard.

---

### 4. Verify Navigation to Documentation Page
_This test ensures that users can navigate to the Documentation page from the footer link and access the content._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, keyboard-navigation, navigation, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Scroll to the footer section of the page.
- Verify the presence of the Documentation link using its stable selector.
- Click on the Documentation link.
- Wait for the redirection to the Documentation page.
- Verify that the Documentation page is loaded successfully.
- Check for the presence of API reference content on the page.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the Documentation page.
- API references and guides are accessible.

---

### 5. Verify Login with GitHub Authentication
_This test verifies that a user can successfully log in using their GitHub account through the provided GitHub authentication link._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, keyboard-navigation, network-resilience, performance, security, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Verify the presence of the GitHub authentication link using its stable selector.
- Click on the GitHub authentication link.
- Wait for the redirection to GitHub's login page.
- On the GitHub login page, enter valid credentials and submit.
- Wait for the redirection back to the Roost dashboard page.
- Verify that the user is successfully logged in by checking the presence of dashboard elements.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is redirected to the GitHub login page.
- User is able to enter credentials and log in.
- User is redirected back to Roost and sees the dashboard.

---

### 6. Configure and Validate a New Test Suite
_This test ensures that a user can successfully configure a new test suite by providing a test name, selecting the test type, and specifying additional configurations._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, functional, performance, security, ui-test
**Est. Execution Time**: 75 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page.
- Type 'Sample Test Suite' into the test name input field.
- Verify that the test name input field accepts the text.
- Select the 'Cloud Git' radio button option for the repository type.
- Verify that the 'Cloud Git' option is selected.
- Type a valid OpenAI token into the OpenAI token input field.
- Click the 'Show Token' button to unmask the token and verify its visibility.
- Type a GitHub repository access token into the GitHub token input field.
- Click the 'Show Token' button to unmask the GitHub token and verify its visibility.
- Enable the 'Traverse to all sub-directories' advanced testing option.
- Verify that the option is toggled on.
- Enable the 'Check for Vulnerability' advanced testing option.
- Verify that the option is toggled on.
- Submit the configuration and verify that the test suite is saved successfully.
- Check that the new test suite name appears in the list of test suites on the dashboard.

#### Selectors Used:
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test-name-input"]`, **Action**: type
- **Type**: input, **Text**: '', **Selector**: `[data-testid="cloud-git-type-radio-button-selected"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="openai-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="openai-token-unMask-icon"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="github-source-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="github-source-token-unMask-icon"]`, **Action**: click
- **Type**: label, **Text**: 'Traverse to all sub-directories', **Selector**: `//div[@id='advanced']/div[2]/div[4]/div[2]/div/div/label`, **Action**: click
- **Type**: label, **Text**: 'Check for Vulnerabilty', **Selector**: `//div[@id='advanced']/div[2]/div[5]/div[2]/div/div/label`, **Action**: click

#### Expected Results:
- The new test suite is successfully created.
- The test suite name is displayed in the list of available test suites.
- All configuration options are saved and displayed correctly.

---

### 7. Verify Navigation to API Documentation from Logo Link
_Ensure that clicking the 'roost.ai' logo link navigates the user to the API documentation page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai
- https://dev.roost.ai/docs/api

#### Steps:
- Navigate to the main dashboard at https://dev.roost.ai.
- Locate the 'roost.ai' logo link with the text 'roost.ai'.
- Verify that the logo link is visible and enabled.
- Click on the 'roost.ai' logo link.
- Wait for the page to load completely.
- Verify that the user is navigated to the API documentation page at https://dev.roost.ai/docs/api.
- Confirm the presence of API documentation elements such as endpoint descriptions and sample requests.

#### Selectors Used:
- **Type**: a, **Text**: 'roost.ai', **Selector**: `//a[@href='/docs/api' and contains(@class, 'logo')]`, **Action**: click

#### Expected Results:
- The user is successfully redirected to the API documentation page.
- All API documentation elements are visible and functional.

---

### 8. Validate External Navigation to Swagger API Page
_Verify that clicking the link to the Swagger API page navigates the user to the correct external URL._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, external_navigation, performance, security, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: external_navigation
**Pages Involved:**
- https://dev.roost.ai/docs/api
- https://dev.roost.ai/api/swagger

#### Steps:
- Navigate to the API documentation page at https://dev.roost.ai/docs/api.
- Locate the link pointing to the Swagger API page.
- Verify that the link is visible and enabled.
- Click on the Swagger API link.
- Wait for the external page to load completely.
- Verify that the user is navigated to the Swagger API page at https://dev.roost.ai/api/swagger.
- Confirm the presence of Swagger interface elements such as endpoint lists and interactive testing tools.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev.roost.ai/api/swagger' and contains(@class, 'roost-icon')]`, **Action**: click

#### Expected Results:
- The user is successfully redirected to the Swagger API page.
- All Swagger interface elements are visible and functional.

---

