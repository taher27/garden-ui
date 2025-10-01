# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 7
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-10-01 18:43:38

## Scenarios

### 1. Login via Google OAuth
_Verifies the ability of a user to log in using the Google OAuth option from the login page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Verify the presence of the Google OAuth login option.
- Click on the Google OAuth login link.
- Wait for the Google login page to load.
- Enter valid Google account credentials (email and password).
- Submit the login form on the Google page.
- Verify that the user is redirected back to https://dev.roost.ai/login.
- Verify the presence of a session token indicating successful login.
- Confirm that the user is redirected to the primary application dashboard at https://dev.roost.ai.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User should be redirected to the Google login page.
- User should successfully log in with valid credentials.
- User should be redirected back to the application dashboard.
- A session token should be generated.

---

### 2. Login via GitHub OAuth
_Tests the ability of a user to authenticate using the GitHub OAuth option from the login page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, network-resilience, performance, security, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Verify the presence of the GitHub OAuth login option.
- Click on the GitHub OAuth login link.
- Wait for the GitHub login page to load.
- Enter valid GitHub account credentials (username and password).
- Authorize the application on the GitHub page.
- Verify that the user is redirected back to https://dev.roost.ai/login.
- Verify the presence of a session token indicating successful login.
- Confirm that the user is redirected to the primary application dashboard at https://dev.roost.ai.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User should be redirected to the GitHub login page.
- User should successfully authorize the application.
- User should be redirected back to the application dashboard.
- A session token should be generated.

---

### 3. Access Privacy Policy
_Tests the ability of a user to navigate to and view the Privacy Policy from the login page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Verify the presence of the Privacy Policy link in the footer.
- Click on the Privacy Policy link.
- Wait for the Privacy Policy page to load.
- Verify that the page URL is https://roost.ai/privacy-policy.
- Ensure the content of the Privacy Policy page is displayed correctly.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User should be redirected to the Privacy Policy page.
- Page content should load properly.
- Correct URL should be displayed in the browser.

---

### 4. Configure RoostGPT Test Suite with Advanced Options
_This test verifies the process of configuring a RoostGPT test suite with advanced options, including specifying environment variables, traversing subdirectories, and vulnerability checks._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, configuration, error-handling, form-submission, performance, security, ui-test
**Est. Execution Time**: 60 seconds | **Flakiness Potential**: medium

**Type**: configuration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page by clicking on the 'RoostGPT Config' link.
- Enter the test suite name in the input field '[data-testid="test-name-input"]'.
- Enter the OpenAI token in the input field '[data-testid="openai-token"]'.
- Click the unmask icon '[data-testid="openai-token-unMask-icon"]' to verify the token visibility.
- Select 'Cloud' as the Git type by clicking the radio button '[data-testid="cloud-git-type-radio-button-selected"]'.
- Enter the GitHub source token in the input field '[data-testid="github-source-token"]'.
- Click the unmask icon '[data-testid="github-source-token-unMask-icon"]' to verify the token visibility.
- Enable 'Traverse to all sub-directories' by clicking the checkbox '//div[@id='advanced']/div[2]/div[4]/div[2]/div/div/label'.
- Enable 'Check for Vulnerability' by clicking the checkbox '//div[@id='advanced']/div[2]/div[5]/div[2]/div/div/label'.
- Enter custom environment variables in the input field '[data-testid="new-custom-tag-input"]'.
- Click the 'Save Configuration' button to save the test suite settings.
- Verify the success notification indicating the test suite configuration has been saved.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test-name-input"]`, **Action**: type
- **Type**: input, **Text**: '', **Selector**: `[data-testid="openai-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="openai-token-unMask-icon"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="cloud-git-type-radio-button-selected"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="github-source-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="github-source-token-unMask-icon"]`, **Action**: click
- **Type**: label, **Text**: 'Traverse to all sub-directories', **Selector**: `//div[@id='advanced']/div[2]/div[4]/div[2]/div/div/label`, **Action**: click
- **Type**: label, **Text**: 'Check for Vulnerability', **Selector**: `//div[@id='advanced']/div[2]/div[5]/div[2]/div/div/label`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="new-custom-tag-input"]`, **Action**: type

#### Expected Results:
- The test suite configuration is saved successfully.
- All advanced options are correctly enabled and saved.
- Environment variables are added without errors.

---

### 5. Verify User Login via Google Integration
_Tests the ability of a user to log in using Google authentication and ensures successful redirection to the dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Verify the visibility of the Google login button.
- Click on the Google login button.
- Wait for the Google account selection interface to load.
- Select the desired Google account.
- Confirm authentication via the Google interface.
- Verify redirection to the https://dev.roost.ai dashboard.
- Assert the presence of user-specific elements on the dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is successfully authenticated via Google.
- User is redirected to the dashboard.
- Dashboard displays user-specific elements.

---

### 6. Verify User Login via GitHub Integration
_Tests the ability of a user to log in using GitHub authentication and validates successful access to the dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Verify the visibility of the GitHub login button.
- Click on the GitHub login button.
- Wait for the GitHub authentication interface to load.
- Enter GitHub credentials if prompted.
- Confirm authentication via the GitHub interface.
- Verify redirection to the https://dev.roost.ai dashboard.
- Assert the presence of user-specific elements on the dashboard.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is successfully authenticated via GitHub.
- User is redirected to the dashboard.
- Dashboard displays user-specific elements.

---

### 7. Verify Navigation to Documentation via Footer
_Tests the ability of a user to access the Roost documentation by clicking the footer link._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, authentication, auto-generated, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Scroll down to the footer section.
- Verify the visibility of the 'Documentation' link.
- Click on the 'Documentation' link.
- Wait for the https://docs.roost.ai page to load.
- Verify the title and content of the documentation page.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the documentation page.
- Documentation page content is loaded correctly.

---

