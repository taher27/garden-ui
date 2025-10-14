```gherkin
Feature: Password Recovery via Forgot Password Flow
  As a user who has forgotten my password,
  I want to securely initiate a password recovery process
  So that I can regain access to my account without compromising security.

  Background:
    Given I am on the homepage "https://dev.roost.ai/login"
    And the page should load within 3 seconds
    And the "Forgot Password" link should be visible

  @auth @forgot-password @recovery
  Scenario: Initiate Forgot Password Flow
    Given I am on the homepage "https://dev.roost.ai/login"
    When I click on the "Forgot Password" link
    Then I should be on the "Forgot Password" page
    And the page URL should be "https://dev.roost.ai/forgot-password"
    And the "Email" input field should be visible
    And the "Submit" button should be visible

  @auth @forgot-password @recovery
  Scenario: Submit Forgot Password Request
    Given I am on the "Forgot Password" page
    When I fill in the "Email" field with "testuser@example.com"
    And I click on the "Submit" button
    Then I should see a confirmation message "Password recovery instructions have been sent to your email."
    And I should be redirected to the "Confirmation" page
    And the page URL should be "https://dev.roost.ai/confirmation"

  @auth @forgot-password @recovery @edge-case
  Scenario: Forgot Password with Non-Existent Email
    Given I am on the "Forgot Password" page
    When I fill in the "Email" field with "nonexistentuser@example.com"
    And I click on the "Submit" button
    Then I should see an error message "The email address entered is not associated with any account."
    And I should remain on the "Forgot Password" page
    And the page URL should be "https://dev.roost.ai/forgot-password"

  @auth @forgot-password @recovery @edge-case
  Scenario: Multiple Password Recovery Requests in Short Time Frame
    Given I am on the "Forgot Password" page
    When I fill in the "Email" field with "testuser@example.com"
    And I click on the "Submit" button
    Then I should see a confirmation message "Password recovery instructions have been sent to your email."
    And I should be redirected to the "Confirmation" page
    And the page URL should be "https://dev.roost.ai/confirmation"

    Given I navigate back to the "Forgot Password" page
    When I fill in the "Email" field with "testuser@example.com" again
    And I click on the "Submit" button
    Then I should see a message "You have already requested a password recovery. Please check your email."
    And I should remain on the "Forgot Password" page
    And the page URL should be "https://dev.roost.ai/forgot-password"
```

### Explanation of Gherkin Construction:
1. **Feature Header**: Describes the business value and purpose of the feature.
2. **Background Section**: Defines common setup steps to ensure a clean starting state for all scenarios.
3. **Scenario Tags**: Added tags for categorization and execution control, including edge case coverage.
4. **Atomic Steps**:
   - Each step represents one action or verification.
   - Page navigation and validations are explicitly documented.
5. **Precise Element Targeting**:
   - Exact element descriptions such as button text ("Submit") and field labels ("Email").
   - URLs are specified for navigation and validation.
6. **Edge Case Coverage**:
   - Scenarios for non-existent email and multiple recovery requests ensure robust testing.
7. **Independent Test Capability**:
   - Each scenario begins with a clean state and is fully self-contained.

This Gherkin feature file is designed to be automation-ready, with granular steps for precise test execution.