```gherkin
Feature: User Authentication on Salesforce Login Portal
  As a registered user
  I want to log in with my valid credentials
  So that I can access my account and authenticated features

  Background:
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    And I verify that the page title is "Login | Salesforce"

  @critical @e2e_authentication_workflow
  Scenario: Successful Login with Valid Credentials
    Given I navigate to the login page "https://aahanashopeinternational2.my.salesforce.com/login/"
    Then I should see the login page URL containing "/login/"
    And I verify that the page title is "Login | Salesforce"
    And the "Username" field with id "#username" should be visible
    And the "Password" field with id "#password" should be visible
    And the login button with id "#Login" should be visible

    When I fill in the "Username" field with "valid_user@example.com"
    Then I verify that the "Username" field contains "valid_user@example.com"

    When I fill in the "Password" field with "ValidPassword123!"
    Then I verify that the "Password" field contains "ValidPassword123!"

    When I click on the login button with id "#Login"
    Then I should be redirected to the identity verification page
    And the page URL should be "https://aahanashopeinternational2.my.salesforce.com/_ui/identity/verification/method/EmailVerificationFinishUi/e"
    And the page title should be "Verify Your Identity | Salesforce"
    And I should see the message "Verify Your Identity" on the page

  @negative @e2e_authentication_workflow
  Scenario: Unsuccessful Login with Invalid Credentials
    Given I navigate to the login page "https://aahanashopeinternational2.my.salesforce.com/login/"
    Then I should see the login page URL containing "/login/"
    And I verify that the page title is "Login | Salesforce"
    And the "Username" field with id "#username" should be visible
    And the "Password" field with id "#password" should be visible
    And the login button with id "#Login" should be visible

    When I fill in the "Username" field with "invalid_user@example.com"
    Then I verify that the "Username" field contains "invalid_user@example.com"

    When I fill in the "Password" field with "InvalidPassword!"
    Then I verify that the "Password" field contains "InvalidPassword!"

    When I click on the login button with id "#Login"
    Then I should see an error message displayed
    And the error message should contain "Please check your username and password and try again."
    And I should remain on the login page
    And the page URL should be "https://aahanashopeinternational2.my.salesforce.com/login/"
    And the "Username" field should still contain "invalid_user@example.com"
    And the "Password" field should be cleared out
```