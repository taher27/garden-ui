# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 7
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-10-03 23:51:26

## Scenarios

### 1. Verify Google OAuth Login Flow
_This test validates the user can log in using their Google account and is redirected to the primary application dashboard upon successful authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, form-submission, network-resilience, performance, security, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the Google login button.
- Verify the redirection to the Google OAuth authentication page.
- Enter valid Google credentials and authorize access.
- Verify the redirection back to the Roost.ai platform.
- Check if the user is successfully logged in and redirected to the primary dashboard at https://dev.roost.ai.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google OAuth page.
- User successfully logs in using their Google credentials.
- User is redirected back to the Roost.ai dashboard.
- User sees the primary application dashboard with no errors.

---

### 2. Verify GitHub OAuth Login Flow
_This test ensures users can log in using their GitHub account and access the application dashboard upon successful authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, network-resilience, performance, security, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the GitHub login button.
- Verify the redirection to the GitHub OAuth authentication page.
- Enter valid GitHub credentials and authorize access.
- Verify the redirection back to the Roost.ai platform.
- Check if the user is successfully logged in and redirected to the primary dashboard at https://dev.roost.ai.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is redirected to the GitHub OAuth page.
- User successfully logs in using their GitHub credentials.
- User is redirected back to the Roost.ai dashboard.
- User sees the primary application dashboard with no errors.

---

### 3. Verify navigation to the 'API Documentation' section and download OpenAPI specification
_This test validates that a user can navigate to the API Documentation section and successfully download the OpenAPI specification file._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, file-download, file-upload, form-submission, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest

#### Steps:
- Navigate to https://dev.roost.ai.
- Click on the 'API docs by Redocly' link.
- Ensure the page navigates to the API documentation section.
- Locate the 'Download' button under the OpenAPI specification section.
- Click the 'Download' button.
- Verify that the OpenAPI specification file starts downloading.

#### Selectors Used:
- **Type**: a, **Text**: 'API docs by Redocly', **Selector**: `//div[@id='redoc-container']/div/div[1]/div[2]/div[1]/a`, **Action**: click
- **Type**: a, **Text**: 'Download', **Selector**: `//a[@href='https://dev.roost.ai/api/swagger-json' and contains(@class, 'sc-ktJbId')]`, **Action**: click

#### Expected Results:
- User is navigated to the API documentation section.
- OpenAPI specification file starts downloading successfully.

---

### 4. Verify 'Expand all' and 'Collapse all' functionality for API endpoint details
_This test ensures a user can expand and collapse all API endpoint details using the respective buttons._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, functional, mobile, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: functional
**Pages Involved:**
- https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest

#### Steps:
- Navigate to https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest.
- Locate the 'Expand all' button.
- Click the 'Expand all' button.
- Verify that all API endpoint details are expanded.
- Locate the 'Collapse all' button.
- Click the 'Collapse all' button.
- Verify that all API endpoint details are collapsed.

#### Selectors Used:
- **Type**: button, **Text**: 'Expand all', **Selector**: `//button[normalize-space()='Expand all']`, **Action**: click
- **Type**: button, **Text**: 'Collapse all', **Selector**: `//button[normalize-space()='Collapse all']`, **Action**: click

#### Expected Results:
- All API endpoint details expand when 'Expand all' is clicked.
- All API endpoint details collapse when 'Collapse all' is clicked.

---

### 5. Verify navigation to 'TestGptController_getAllTest' endpoint details
_This test ensures a user can navigate to the 'TestGptController_getAllTest' endpoint section and interact with its details._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, cross-browser, mobile, navigation, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: medium

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_getAllTest

#### Steps:
- Navigate to https://dev.roost.ai.
- Locate the 'tag/RoostGPT/operation/TestGptController_getAllTest' link.
- Click the link to navigate to the endpoint details.
- Verify the endpoint details are visible.
- Locate the 'GET /test' button.
- Click the 'GET /test' button.
- Verify the sample payload and response details are displayed.

#### Selectors Used:
- **Type**: a, **Text**: 'tag/RoostGPT/operation/TestGptController_getAllTest', **Selector**: `//a[@href='#tag/RoostGPT/operation/TestGptController_getAllTest' and contains(@class, 'sc-jlZhew')]`, **Action**: click
- **Type**: button, **Text**: 'GET /test', **Selector**: `//button[normalize-space()='GET\n/test']`, **Action**: click

#### Expected Results:
- User navigates to the 'TestGptController_getAllTest' endpoint section.
- Sample payload and response details are displayed for the 'GET /test' button.

---

### 6. Configure Test Suite with Detailed Inputs
_This test validates that a user can configure a test suite by providing all required inputs, including suite name, test type, language, framework, and build tool, and save the configuration successfully._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, configuration, data-validation, drag-and-drop, error-handling, form-submission, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: high

**Type**: configuration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page.
- Click the Test Suite tab to open configuration options.
- Type a test suite name into the input field.
- Select a test type from the dropdown.
- Select a programming language from the dropdown.
- Select a testing framework from the dropdown.
- Select a build tool from the dropdown.
- Click the Save button to save the test suite configuration.
- Verify that a confirmation message is displayed indicating the test suite was saved successfully.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test-name-input"]`, **Action**: type
- **Type**: input, **Text**: '', **Selector**: `[data-testid="radio-button"]`, **Action**: select

#### Expected Results:
- Test suite is saved with the provided configuration.
- A confirmation message appears indicating success.

---

### 7. Integrate OpenAI Model with Token Validation
_This test ensures that a user can integrate an OpenAI model by providing a valid base URL and token, and verifying the integration._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, data-validation, error-handling, form-submission, integration, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: integration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page.
- Click the Gen AI Models tab to view integration options.
- Type the OpenAI Base URL into the input field.
- Type the OpenAI Token into the input field.
- Click the Verify button to validate the integration.
- Check that a success message is displayed confirming the integration.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="openai-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="openai-token-unMask-icon"]`, **Action**: click

#### Expected Results:
- Integration is validated successfully with a success message.
- Errors are displayed for invalid base URL or token.

---

