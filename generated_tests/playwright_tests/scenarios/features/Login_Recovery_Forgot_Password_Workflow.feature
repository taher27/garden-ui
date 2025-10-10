```gherkin
Feature: Password Recovery Workflow
  As a user who has forgotten their password
  I want to recover access to my account
  So that I can securely log in and continue using the application

  Background:
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"

  @recovery_authentication_workflow @medium_priority
  Scenario: Initiating password recovery process
    Given I am on the login page "https://aahanashopeinternational2.my.salesforce.com/login/"
    When I click on the "Forgot Password" link
    Then I should be redirected to the password recovery page "https://login.salesforce.com/"
    And the "Username" field should be visible
    And the "Submit" button should be visible

  @recovery_authentication_workflow @medium_priority
  Scenario: Submitting password recovery request with a valid email
    Given I am on the password recovery page "https://login.salesforce.com/"
    When I fill in the "Username" field with "testuser@example.com"
    And I click on the "Submit" button
    Then I should see a confirmation message "We’ve sent you an email with a link to finish resetting your password."

  @recovery_authentication_workflow @medium_priority
  Scenario: Submitting password recovery request with an invalid email
    Given I am on the password recovery page "https://login.salesforce.com/"
    When I fill in the "Username" field with "invaliduser@example.com"
    And I click on the "Submit" button
    Then I should see an error message "Please check your username. If you still can't log in, contact your Salesforce administrator."

  @recovery_authentication_workflow @medium_priority
  Scenario: Attempting password recovery with an empty username field
    Given I am on the password recovery page "https://login.salesforce.com/"
    When I leave the "Username" field empty
    And I click on the "Submit" button
    Then I should see an error message "Please enter your username."

  @recovery_authentication_workflow @medium_priority
  Scenario: Navigating back to login page from password recovery page
    Given I am on the password recovery page "https://login.salesforce.com/"
    When I click on the "Back to Login" link
    Then I should be redirected to the login page "https://aahanashopeinternational2.my.salesforce.com/login/"
    And the "Username" field should be visible
    And the "Password" field should be visible
    And the "Log In" button should be visible
```