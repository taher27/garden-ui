```gherkin
Feature: Login Error Handling with Invalid Credentials
  As a QA engineer
  I want to verify that the login process handles invalid credentials securely and displays appropriate error messages
  So that users are informed and no unauthorized access is granted

  Background:
    Given I am on the homepage 'https://https//v18.roost.ai/'
    And the page title should be 'Starting agent 6250...'

  @e2e_authentication_workflow @high_priority
  Scenario: Failed Login - Invalid Credentials
    Given I am on the login page
    And the page title should be 'Starting agent 6250...'
    And the username input field should be visible and enabled
    And the password input field should be visible, enabled, and masked
    When I fill in the 'username' field with 'invalid_user'
    And I fill in the 'password' field with 'wrong_password'
    And I click the login button
    Then I should remain on the login page
    And I should see an error message with text 'Invalid credentials'
    And the error message should be visible and prominently displayed
```