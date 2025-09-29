# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 7
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-09-29 12:46:40

## Scenarios

### 1. Verify User Login via Google OAuth
_This test verifies that a user can successfully log in using Google OAuth and is redirected to the dashboard after authentication._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://accounts.google.com
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate the Google login button using its stable selector.
- Click the Google login button.
- Verify redirection to the Google OAuth authentication page.
- Enter valid Google account credentials.
- Click the 'Sign In' button on the Google authentication page.
- Verify redirection back to https://dev.roost.ai.
- Verify that the user is on the dashboard and logged in.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google OAuth page.
- User can authenticate using valid Google credentials.
- User is redirected back to https://dev.roost.ai.
- User is logged into their dashboard successfully.

---

### 2. Verify User Login via GitHub OAuth
_This test validates that the user can log in using GitHub OAuth and access the dashboard without errors._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://github.com/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Locate the GitHub login button using its stable selector.
- Click the GitHub login button.
- Verify redirection to the GitHub OAuth authentication page.
- Enter valid GitHub account credentials.
- Click the 'Sign In' button on the GitHub authentication page.
- Verify redirection back to https://dev.roost.ai.
- Verify that the user is on the dashboard and logged in.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is redirected to the GitHub OAuth page.
- User can authenticate using valid GitHub credentials.
- User is redirected back to https://dev.roost.ai.
- User is logged into their dashboard successfully.

---

### 3. Verify Access to Documentation Page
_This test verifies that the user can navigate to the documentation page from the footer and access relevant resources._

**Complexity**: medium | **Priority**: normal | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, keyboard-navigation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Scroll to the footer section of the page.
- Locate the 'Documentation' link using its stable selector.
- Click the 'Documentation' link.
- Verify redirection to https://docs.roost.ai.
- Ensure that the documentation page loads successfully.
- Verify the presence of key documentation sections.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the documentation page.
- Documentation page loads without errors.
- Key documentation sections are accessible and visible.

---

### 4. Verify Privacy Policy Navigation
_This test ensures that the user can navigate to the privacy policy page from the footer and access the content._

**Complexity**: medium | **Priority**: normal | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, keyboard-navigation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Scroll to the footer section of the page.
- Locate the 'Privacy Policy' link using its stable selector.
- Click the 'Privacy Policy' link.
- Verify redirection to https://roost.ai/privacy-policy.
- Ensure that the privacy policy page loads successfully.
- Verify the presence of key privacy policy sections.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the privacy policy page.
- Privacy policy page loads without errors.
- Key privacy policy sections are accessible and visible.

---

### 5. Login with Google Authentication
_Verify that a user can successfully log in using Google OAuth authentication and is redirected to their dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, network-resilience, performance, ui-test
**Est. Execution Time**: 45 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Verify that the Google sign-in option is visible and enabled.
- Click on the Google sign-in button.
- Verify that the Google OAuth login page is displayed.
- Enter valid Google credentials (email and password) on the Google login page.
- Click the 'Next' or 'Sign In' button on the Google login page.
- Verify that the user is redirected back to the Roost application.
- Check that the user lands on their dashboard at https://dev.roost.ai.
- Verify that the user's dashboard displays active environments and relevant user data.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- The user is authenticated via Google OAuth.
- The user is redirected to the dashboard page at https://dev.roost.ai.
- The dashboard displays user-specific data such as active environments.

---

### 6. Access API Documentation from Login Page
_Validate that the 'Documentation' link on the login page navigates the user to the correct API documentation page._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 25 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Verify that the 'Documentation' link is visible in the footer section of the page.
- Click on the 'Documentation' link.
- Verify that the user is redirected to https://docs.roost.ai.
- Check that the API documentation page loads completely and displays relevant content.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- The user is redirected to https://docs.roost.ai.
- The API documentation page loads successfully.

---

### 7. Login with GitHub Authentication
_Validate that a user can log in using GitHub OAuth and access their dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, network-resilience, performance, security, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to https://dev.roost.ai/login.
- Verify that the GitHub sign-in option is visible and enabled.
- Click on the GitHub sign-in button.
- Verify that the GitHub login page is displayed.
- Enter valid GitHub credentials (username and password) on the GitHub login page.
- Click the 'Sign In' or 'Authorize' button on the GitHub login page.
- Verify that the user is redirected back to the Roost application.
- Check that the user lands on their dashboard at https://dev.roost.ai and sees relevant data.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- The user is authenticated via GitHub OAuth.
- The user is redirected to the dashboard page at https://dev.roost.ai.
- The dashboard displays user-specific data.

---

