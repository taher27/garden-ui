# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 8
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-10-01 17:35:32

## Scenarios

### 1. Authenticate User with Google OAuth
_This test verifies that a user can successfully authenticate using Google OAuth, ensuring the integration with Google's authentication service functions as expected._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, performance, security, ui-test
**Est. Execution Time**: 50 seconds | **Flakiness Potential**: medium

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to the https://dev.roost.ai/login page.
- Locate the Google authentication button.
- Click on the Google authentication button.
- Verify that the user is redirected to Google's OAuth login page.
- Input a valid Google email in the email field.
- Click the 'Next' button.
- Input the correct password for the account.
- Click the 'Next' button to authenticate.
- Verify that the user is redirected back to https://dev.roost.ai/login with a valid session.
- Verify that the user is logged in and redirected to the primary application dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to Google's OAuth login page.
- User successfully logs in with valid Google credentials.
- User is redirected back to the Roost application dashboard.
- A valid user session is created and maintained.

---

### 2. Authenticate User with Okta
_This test verifies that a user can successfully authenticate using Okta, ensuring the integration with Okta's identity provider service is functional._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, performance, security, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: medium

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to the https://dev.roost.ai/login page.
- Locate the Okta authentication button.
- Click on the Okta authentication button.
- Verify that the user is redirected to Okta's login page.
- Input a valid Okta username in the username field.
- Input the correct password in the password field.
- Click the 'Sign In' button.
- Verify that the user is redirected back to https://dev.roost.ai/login with a valid session.
- Verify that the user is logged in and redirected to the primary application dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]`, **Action**: click

#### Expected Results:
- User is redirected to Okta's login page.
- User successfully logs in with valid Okta credentials.
- User is redirected back to the Roost application dashboard.
- A valid user session is created and maintained.

---

### 3. Verify Google OAuth Login Functionality
_This test verifies that a user can successfully log in using Google OAuth integration and is redirected to their dashboard upon successful authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, error-handling, file-upload, form-submission, keyboard-navigation, network-resilience, performance, security, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Assert that the page title is 'Roost Enterprise Login | Software as a Service'.
- Locate the Google OAuth login button using its stable selector.
- Click on the Google OAuth login button.
- Verify that the browser is redirected to the Google login page.
- Enter valid Google credentials (email and password) and submit the form.
- Verify that the browser is redirected back to https://dev.roost.ai with the user's dashboard displayed.
- Assert that the user's name or profile information is visible on the dashboard.
- Verify that the URL of the current page is https://dev.roost.ai.

#### Selectors Used:
- **Type**: a, **Text**: 'None', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google login page.
- After entering valid credentials, user is redirected back to https://dev.roost.ai.
- The user's dashboard is visible, indicating successful login.

---

### 4. Verify Navigation to API Reference Page
_This test ensures that users can successfully navigate to the API Reference page from the login screen._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, keyboard-navigation, navigation, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: medium

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai/docs/api

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Assert that the page title is 'Roost Enterprise Login | Software as a Service'.
- Scroll down to the footer of the page.
- Locate the 'API Reference' link using its stable selector.
- Click on the 'API Reference' link.
- Verify that the browser navigates to the API Reference page.
- Assert that the API Reference page title includes 'API Reference'.
- Verify that the API documentation content is visible on the page.

#### Selectors Used:
- **Type**: a, **Text**: 'API Reference', **Selector**: `//a[@href='/docs/api' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- The user is navigated to the API Reference page.
- The API documentation content is displayed.

---

### 5. Verify Test Plan Creation through API Documentation Interface
_This test case verifies the process of navigating to the 'Create Test Plan' API endpoint, configuring test parameters, and executing a POST request to create a test plan through the API documentation interface._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, form-submission, functional, keyboard-navigation, performance, ui-test
**Est. Execution Time**: 85 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_createTestPlan

#### Steps:
- Navigate to the API documentation page at the provided URL.
- Verify the presence of the 'Create Test Plan' API section link with text 'tag/RoostGPT/operation/TestGptController_createTestPlan'.
- Click on the 'tag/RoostGPT/operation/TestGptController_createTestPlan' link to expand the create test plan API details.
- Locate the 'POST /test/createTestPlan' button and click it to expand the request details.
- Verify the display of the endpoint URL 'https://dev.roost.ai/api/test/createTestPlan'.
- Click on the 'Expand all' button to reveal all available options in the API documentation section.
- Locate the 'aiModelConfiguration' button and click on it to view AI model configuration details.
- Verify the presence of the 'gitConfiguration' button and click to expand Git configuration details.
- Click on the 'integrationConfiguration' button and verify the displayed integration configuration details.
- Locate and click the 'testConfiguration' button to view test configuration options.
- Ensure all required input fields and configurations are visible and properly labeled.
- Locate and verify the presence of the 'Copy' button to copy API payload examples.
- Click the 'Copy' button and confirm that the API payload is copied to the clipboard.
- Verify that the 'aiModelConfiguration' and 'integrationConfiguration' buttons remain interactable after expanding.
- Click the 'POST /test/createTestPlan' button again to collapse the section.
- Click the 'Collapse all' button to collapse all expanded API sections.
- Ensure the page returns to its initial state with only top-level API sections visible.

#### Selectors Used:
- **Type**: a, **Text**: 'tag/RoostGPT/operation/TestGptController_createTestPlan', **Selector**: `//a[@href='#tag/RoostGPT/operation/TestGptController_createTestPlan' and contains(@class, 'sc-jlZhew')]`, **Action**: click
- **Type**: button, **Text**: 'POST
/test/createTestPlan', **Selector**: `//button[normalize-space()="POST
/test/createTestPlan"]`, **Action**: click
- **Type**: div, **Text**: 'https://dev.roost.ai/api/test/createTestPlan', **Selector**: `//div[@id='operation/TestGptController_createTestPlan']/div[2]/div[1]/div/div/div[2]`, **Action**: verify
- **Type**: button, **Text**: 'Expand all', **Selector**: `//button[normalize-space()="Expand all"]`, **Action**: click
- **Type**: button, **Text**: 'Collapse all', **Selector**: `//button[normalize-space()="Collapse all"]`, **Action**: click

#### Expected Results:
- The user can expand the 'Create Test Plan' API section details.
- The endpoint URL 'https://dev.roost.ai/api/test/createTestPlan' is displayed correctly.
- All configuration buttons, such as 'aiModelConfiguration', are visible and functional.
- The 'Copy' button copies the payload example to the clipboard.
- 'Expand all' and 'Collapse all' buttons function as expected to control the visibility of sections.

---

### 6. Verify Navigation to API Documentation and Detailed Endpoint Information
_This test validates that the user can navigate to the API Documentation page, explore available API endpoints, and view detailed information about a specific endpoint._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, data-validation, form-submission, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai
- https://dev.roost.ai/docs/api

#### Steps:
- Open the homepage at https://dev.roost.ai.
- Locate and click on the 'roost.ai' logo to navigate to the API Documentation page.
- Verify that the API Documentation page loads successfully.
- Locate the navigation menu for API endpoint categories on the API Documentation page.
- Select the 'Create Test App' endpoint from the menu.
- Verify the endpoint details are displayed, including the HTTP method (POST), description, request parameters, and response schemas.
- Scroll to the 'Get All Tests' endpoint in the documentation.
- Verify the endpoint details for 'Get All Tests', including filters and expected responses.

#### Selectors Used:
- **Type**: a, **Text**: 'roost.ai', **Selector**: `//a[@href='/docs/api' and contains(@class, 'logo')]`, **Action**: click

#### Expected Results:
- User is successfully navigated to the API Documentation page.
- All available API endpoints are listed in the navigation menu.
- The details of the selected API endpoint are displayed, including method, URL, request/response schemas, and description.

---

### 7. Verify OpenAPI Specification File Download
_This test checks that a user can successfully download the OpenAPI specification file for integration into their project._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, data-validation, error-handling, file-download, file-upload, file_download, form-submission, performance, security, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: medium

**Type**: file_download
**Pages Involved:**
- https://dev.roost.ai/docs/api

#### Steps:
- Open the API Documentation page at https://dev.roost.ai/docs/api.
- Locate the 'Download OpenAPI Specification' button.
- Click the 'Download OpenAPI Specification' button.
- Verify that the browser prompts for file download confirmation.
- Confirm the file download and verify the file is saved to the default downloads directory.
- Open the downloaded file and validate its contents against the expected OpenAPI specification format.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev.roost.ai/api/swagger' and contains(@class, 'roost-icon')]`, **Action**: click

#### Expected Results:
- The 'Download OpenAPI Specification' button is visible and clickable.
- The browser's file download prompt is triggered.
- The OpenAPI specification file is downloaded and saved successfully.
- The contents of the downloaded file are valid and match the OpenAPI format.

---

### 8. Verify RoostGPT Configuration with Valid Inputs
_This test verifies that a user can successfully configure the RoostGPT platform with valid inputs, including setting tokens, selecting repository types, and saving the configuration._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, configuration, error-handling, form-submission, keyboard-navigation, performance, security, ui-test
**Est. Execution Time**: 70 seconds | **Flakiness Potential**: medium

**Type**: configuration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to https://dev.roost.ai.
- Click on the 'RoostGPT Config' link in the navigation bar.
- Verify that the Roost Token input field is displayed.
- Enter a valid Roost Token in the input field with stable selector '[data-testid="test-name-input"]'.
- Enter a valid OpenAI Token in the input field with stable selector '[data-testid="openai-token"]'.
- Click the 'Unmask' button to verify the OpenAI Token value entered.
- Select the 'Cloud' option in the Git type radio button group using '[data-testid="cloud-git-type-radio-button-selected"]'.
- Enter a valid GitHub source token in the input field with stable selector '[data-testid="github-source-token"]'.
- Click the 'Unmask' button to verify the GitHub source token value entered.
- Check the 'Traverse to all sub-directories' option using the label with stable selector '//div[@id="advanced"]/div[2]/div[4]/div[2]/div/div/label'.
- Check the 'Check for Vulnerability' option using the label with stable selector '//div[@id="advanced"]/div[2]/div[5]/div[2]/div/div/label'.
- Enter a valid value for custom functions to test in the input field with stable selector '[data-testid="functions-to-test"]'.
- Click the 'Save Configuration' button.
- Verify that a success message is displayed confirming the configuration was saved.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test-name-input"]`, **Action**: type
- **Type**: input, **Text**: '', **Selector**: `[data-testid="openai-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="openai-token-unMask-icon"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="cloud-git-type-radio-button-selected"]`, **Action**: select
- **Type**: input, **Text**: '', **Selector**: `[data-testid="github-source-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="github-source-token-unMask-icon"]`, **Action**: click
- **Type**: label, **Text**: 'Traverse to all sub-directories', **Selector**: `//div[@id='advanced']/div[2]/div[4]/div[2]/div/div/label`, **Action**: check
- **Type**: label, **Text**: 'Check for Vulnerability', **Selector**: `//div[@id='advanced']/div[2]/div[5]/div[2]/div/div/label`, **Action**: check
- **Type**: input, **Text**: '', **Selector**: `[data-testid="functions-to-test"]`, **Action**: type

#### Expected Results:
- The user is able to navigate to the RoostGPT Config page.
- The Roost Token and OpenAI Token fields are editable.
- The 'Cloud' Git type option is selected by default.
- The user is able to check additional options like 'Traverse to all sub-directories' and 'Check for Vulnerability'.
- Configuration changes are successfully saved, and a success message is displayed.

---

