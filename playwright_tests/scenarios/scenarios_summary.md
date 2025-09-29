# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 3
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-09-29 19:33:24

## Scenarios

### 1. Verify Login via Google Authentication
_This test case validates the Google OAuth login functionality to ensure users can authenticate and access the Roost dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to 'https://dev.roost.ai/login'.
- Locate the Google login button using the stable selector.
- Click on the Google login button.
- Authenticate using valid Google credentials.
- Verify redirection back to the Roost dashboard.
- Ensure the user's name is displayed on the dashboard, confirming successful login.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&response_type=token&client_id=985988082020-h5fipp07abkqn9qer08dtc6ve33dan9i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'google')]`, **Action**: click

#### Expected Results:
- User is redirected to the Google authentication page.
- User is successfully authenticated using valid credentials.
- User is redirected to the Roost dashboard with access to their account.

---

### 2. Verify Login via GitHub Authentication
_This test case validates the GitHub OAuth login functionality to ensure users can authenticate and access the Roost dashboard._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, keyboard-navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 30 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to 'https://dev.roost.ai/login'.
- Locate the GitHub login button using the stable selector.
- Click on the GitHub login button.
- Authenticate using valid GitHub credentials.
- Verify redirection back to the Roost dashboard.
- Ensure the user's name is displayed on the dashboard, confirming successful login.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://github.com/login/oauth/authorize?scope=user%3Aemail&client_id=0fc11ea1f52d5e2a8dcf&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'git')]`, **Action**: click

#### Expected Results:
- User is redirected to the GitHub authentication page.
- User is successfully authenticated using valid credentials.
- User is redirected to the Roost dashboard with access to their account.

---

### 3. Verify Access to Documentation Link
_This test case ensures users can access Roost's documentation via the footer link._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, auto-generated, keyboard-navigation, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 25 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai
- https://docs.roost.ai

#### Steps:
- Navigate to 'https://dev.roost.ai'.
- Locate the 'Documentation' link in the footer using the stable selector.
- Click on the 'Documentation' link.
- Verify redirection to the 'https://docs.roost.ai' page.
- Ensure the documentation page content is loaded successfully.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is redirected to the 'https://docs.roost.ai' page.
- The documentation page loads successfully.
- Documentation content is visible and accessible.

---

