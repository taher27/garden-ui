# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 9
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-10-01 16:01:37

## Scenarios

### 1. Verify Login via Google OAuth
_Tests the ability of the user to log in using Google OAuth and verifies successful redirection to the dashboard after authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://accounts.google.com/o/oauth2/v2/auth

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the Google OAuth login button.
- Verify that the user is redirected to the Google authentication page.
- Enter valid Google account credentials and submit.
- Check if authentication is successful and if the user is redirected back to https://dev.roost.ai.
- Verify that the user is now logged in and can access the dashboard features.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google authentication page.
- User successfully authenticates and is redirected back to https://dev.roost.ai.
- Dashboard features are available after login.

---

### 2. Verify Login via GitHub OAuth
_Tests the ability of the user to log in using GitHub OAuth and verifies successful redirection to the dashboard post-authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://github.com/login/oauth/authorize

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the GitHub OAuth login button.
- Verify that the user is redirected to the GitHub authentication page.
- Enter valid GitHub credentials and submit.
- Check if authentication is successful and if the user is redirected back to https://dev.roost.ai.
- Verify that the user is now logged in and can access the dashboard features.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is redirected to the GitHub authentication page.
- User successfully authenticates and is redirected back to https://dev.roost.ai.
- Dashboard features are available after login.

---

### 3. Verify Documentation Link Navigation
_Tests the ability of the user to navigate to the documentation page from the footer link and ensures the page loads correctly._

**Complexity**: medium | **Priority**: normal | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, error-handling, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 20 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the 'Documentation' footer link.
- Verify that the user is redirected to https://docs.roost.ai.
- Check if the documentation page loads correctly with all expected elements visible.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to https://docs.roost.ai.
- Documentation page loads successfully with all resources accessible.

---

### 4. Verify Privacy Policy Link Navigation
_Tests the ability of the user to navigate to the Privacy Policy page from the footer link and ensures the page content is accessible._

**Complexity**: medium | **Priority**: normal | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, error-handling, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 20 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate and click on the 'Privacy Policy' footer link.
- Verify that the user is redirected to https://roost.ai/privacy-policy.
- Check if the Privacy Policy page loads correctly with all expected content visible.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to https://roost.ai/privacy-policy.
- Privacy Policy page loads successfully with all content accessible.

---

### 5. Verify Google Authentication Login Flow
_This test validates that a user can successfully log in using Google authentication and is redirected to the dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, form-submission, network-resilience, performance, security, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate the Google authentication button.
- Click on the Google authentication button.
- Assert that the Google login interface is displayed.
- Enter valid Google credentials and complete the login process.
- Verify that the user is redirected to the dashboard page.
- Validate that the dashboard displays the correct user information.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- Google login interface is displayed.
- The user is authenticated and redirected to the dashboard.
- The dashboard displays user-specific information.

---

### 6. Verify Navigation to Documentation Page
_This test ensures that users can navigate to the documentation page via the footer link and access API information._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, error-handling, form-submission, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Scroll down to the footer section of the page.
- Locate the Documentation link in the footer.
- Click on the Documentation link.
- Assert that the Documentation page loads successfully.
- Verify that the API information is displayed on the Documentation page.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- The Documentation page is loaded successfully.
- API information is visible on the Documentation page.

---

### 7. Verify Privacy Policy Link Navigation
_This test confirms that users can access the Privacy Policy page from the footer link._

**Complexity**: medium | **Priority**: normal | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, cross-browser, navigation, performance, ui-test
**Est. Execution Time**: 25 seconds | **Flakiness Potential**: medium

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Scroll down to the footer section of the page.
- Locate the Privacy Policy link in the footer.
- Click on the Privacy Policy link.
- Assert that the Privacy Policy page loads successfully.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- The Privacy Policy page is loaded successfully.

---

### 8. Configure Testing Parameters with Advanced Options
_Validate the ability to configure advanced testing parameters such as environment variables, test frameworks, and suite names._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, configuration, data-validation, error-handling, file-download, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 25 seconds | **Flakiness Potential**: high

**Type**: configuration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page using the 'RoostGPT Config' link.
- Enter a test suite name in the input field with the test ID '[data-testid="test-name-input"]'.
- Select the radio button for 'Cloud' repository type using the test ID '[data-testid="cloud-git-type-radio-button-selected"]'.
- Type an environment variable in the input field '[data-testid="new-custom-tag-input"]'.
- Click on the 'Download Env Config' button to save the environment configuration.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="test-name-input"]`, **Action**: type
- **Type**: input, **Text**: '', **Selector**: `[data-testid="cloud-git-type-radio-button-selected"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="new-custom-tag-input"]`, **Action**: type
- **Type**: button, **Text**: 'Download Env Config', **Selector**: `[data-testid="download-env-config-button"]`, **Action**: click

#### Expected Results:
- The test suite name is saved successfully.
- Environment variables are correctly added and displayed.
- Configuration options for 'Cloud' repository type are successfully applied.
- Environment configuration is downloaded without errors.

---

### 9. Integrate Code Repository with Token Verification
_Test the process of integrating a code repository by selecting repository type and verifying Github token._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, auto-generated, error-handling, form-submission, integration, keyboard-navigation, performance, ui-test
**Est. Execution Time**: 25 seconds | **Flakiness Potential**: medium

**Type**: integration
**Pages Involved:**
- https://dev.roost.ai/gptCLIForm

#### Steps:
- Navigate to the RoostGPT Config page using the 'RoostGPT Config' link.
- Select the radio button for 'Enterprise' repository type using the test ID '[data-testid="server-git-type-radio-button"]'.
- Enter Github token in the input field '[data-testid="github-source-token"]'.
- Click on the 'Verify Token' button using the selector '[data-testid="github-source-token-unMask-icon"]'.
- Observe the token verification status displayed on the page.

#### Selectors Used:
- **Type**: a, **Text**: 'RoostGPT Config', **Selector**: `//a[@href='/gptCLIForm' and contains(@class, 'nav-link')]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="server-git-type-radio-button"]`, **Action**: click
- **Type**: input, **Text**: '', **Selector**: `[data-testid="github-source-token"]`, **Action**: type
- **Type**: button, **Text**: '', **Selector**: `[data-testid="github-source-token-unMask-icon"]`, **Action**: click

#### Expected Results:
- Github token is verified successfully.
- Repository type selection is applied correctly.
- Integration status is displayed on the page.

---

