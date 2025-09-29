# Generated Test Scenarios Summary

## Overview

- **Total Scenarios**: 3
- **Application Base URL**: https://dev.roost.ai
- **Generated On**: 2025-09-29 16:16:53

## Scenarios

### 1. Verify Okta Login Integration
_Test the functionality of logging in using Okta as an authentication provider and ensure the user is redirected to the dashboard upon successful login._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, data-validation, error-handling, form-submission, network-resilience, performance, ui-test
**Est. Execution Time**: 40 seconds | **Flakiness Potential**: high

**Type**: authentication
**Pages Involved:**
- https://dev.roost.ai/login
- https://dev.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Locate the 'Okta' login button.
- Click the 'Okta' login button.
- Redirect to the Okta login page.
- Enter valid Okta credentials (username and password).
- Confirm and submit the login form.
- Validate the redirection back to https://dev.roost.ai.
- Verify the presence of a user-specific dashboard or account details.

#### Selectors Used:
- **Type**: a, **Text**: '', **Selector**: `//a[@href='https://dev-53854943.okta.com/oauth2/default/v1/authorize?response_type=code&scope=openid%20profile%20email%20address&state=okta&client_id=0oa3x8katznHWlHeD5d7&redirect_uri=https%3A%2F%2Fdev.roost.ai%2Flogin' and contains(@class, 'okta')]`, **Action**: click

#### Expected Results:
- User is successfully redirected to the Okta login page.
- User can authenticate using valid credentials.
- User is redirected back to https://dev.roost.ai.
- User sees a personalized dashboard or account overview.

---

### 2. Verify Documentation Access
_Test the functionality of accessing documentation resources from the footer and ensure the documentation page loads properly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://docs.roost.ai

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Scroll down to the footer section.
- Locate the 'Documentation' link.
- Click the 'Documentation' link.
- Redirect to the documentation page at https://docs.roost.ai.
- Verify the presence of API and setup guides.
- Confirm the content is readable and accessible.

#### Selectors Used:
- **Type**: a, **Text**: 'Documentation', **Selector**: `//a[@href='https://docs.roost.ai' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is successfully redirected to https://docs.roost.ai.
- Documentation content is available and readable.
- API and setup guides are present on the page.

---

### 3. Verify Privacy Policy Page Access
_Test the functionality of accessing the privacy policy from the footer and ensure the privacy policy page loads correctly._

**Complexity**: high | **Priority**: high | **Risk Level**: high
**Tags**: accessibility, api-integration, authentication, auto-generated, error-handling, navigation, network-resilience, performance, ui-test
**Est. Execution Time**: 35 seconds | **Flakiness Potential**: high

**Type**: navigation
**Pages Involved:**
- https://dev.roost.ai/login
- https://roost.ai/privacy-policy

#### Steps:
- Navigate to the login page at https://dev.roost.ai/login.
- Scroll down to the footer section.
- Locate the 'Privacy Policy' link.
- Click the 'Privacy Policy' link.
- Redirect to the privacy policy page at https://roost.ai/privacy-policy.
- Verify the presence of privacy terms and conditions.
- Confirm the content is readable and accessible.

#### Selectors Used:
- **Type**: a, **Text**: 'Privacy Policy', **Selector**: `//a[@href='https://roost.ai/privacy-policy' and contains(@class, 'footer-item')]`, **Action**: click

#### Expected Results:
- User is successfully redirected to https://roost.ai/privacy-policy.
- Privacy policy content is available and readable.
- Privacy terms are complete and accurate.

---

