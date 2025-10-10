```gherkin
Feature: Account Recovery - Forgot Password
  As a user who has forgotten my password,
  I want to securely recover my account using the 'Forgot Password' feature,
  So that I can regain access to my account without compromising security.

  Background:
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    Then the login form should be visible
    And the page title should be "Login | Salesforce"

  Scenario: Initiating password recovery process
    # User navigates to the 'Forgot Password' page
    When I click the "Forgot Password" link
    Then I should be on the "Forgot Password" page
    And the email/username input field with ID "username" should be visible
    And the "Submit" button should be visible

  Scenario: Submitting valid recovery details
    # User submits recovery details using a registered email
    Given I am on the "Forgot Password" page
    When I fill in the "Email/Username" field with "user@example.com"
    And I click the "Submit" button
    Then I should be on the "Recovery Confirmation" page
    And the message "A recovery email has been sent to your email address" should be displayed
    And there should be no error messages

  Scenario: Submitting invalid recovery details
    # User submits an unregistered email for recovery
    Given I am on the "Forgot Password" page
    When I fill in the "Email/Username" field with "invalid_user@example.com"
    And I click the "Submit" button
    Then I should remain on the "Forgot Password" page
    And the error message "The email address entered is not registered" should be displayed

  Scenario: Submitting empty recovery details
    # User submits an empty form for recovery
    Given I am on the "Forgot Password" page
    When I leave the "Email/Username" field blank
    And I click the "Submit" button
    Then I should remain on the "Forgot Password" page
    And the error message "Email/Username field cannot be empty" should be displayed
```