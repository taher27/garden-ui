```gherkin
Feature: Login Authentication Workflow
  As a user of the Salesforce platform,
  I want to receive appropriate error feedback when I enter invalid login credentials,
  So that I can understand why my login attempt failed and correct my input.

  Background:
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"

  @negative_authentication_workflow @high_priority
  Scenario: Failed Login - Invalid Credentials Handling
    Given I am on the login page "https://aahanashopeinternational2.my.salesforce.com/login/"
    Then I should see the login form with fields "Username" and "Password"
    And the "Login" button should be visible and enabled

    When I fill in the "Username" field with "invalid_user@example.com"
    Then the "Username" field should contain "invalid_user@example.com"

    When I fill in the "Password" field with "wrong_password"
    Then the "Password" field should contain "wrong_password"

    When I click the "Login" button
    Then I should remain on the login page "https://aahanashopeinternational2.my.salesforce.com/login/"
    And I should see an error message with text "Please check your username and password. If you still can't log in, contact your Salesforce administrator."
    And the error message should be displayed in red
    And the "Username" and "Password" fields should be cleared
```