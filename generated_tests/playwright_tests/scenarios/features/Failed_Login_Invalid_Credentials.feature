```gherkin
Feature: Failed Login - Invalid Credentials
  As a user attempting to log in,
  I want to receive appropriate error messages when my login credentials are incorrect,
  So that I can retry with the correct credentials or recover my account if necessary.

  Background:
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    Then I should see the login form
    And the login form should have the fields "Username" and "Password"
    And the login form should have a "Login" button

  @e2e_authentication_workflow
  @high_priority
  Scenario: Login with invalid credentials
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    And I should see the login form

    When I fill in the "Username" field with "invalid_user@example.com"
    Then the "Username" field should accept the input
    And the "Username" field should display "invalid_user@example.com"

    When I fill in the "Password" field with "wrongpassword"
    Then the "Password" field should accept the input
    And the "Password" field should mask the input

    When I click the "Login" button
    Then I should remain on the login form page
    And I should see an error message "Invalid username or password"
    And the error message should be displayed in red
    And the form fields should retain their entered values

  @edge_case
  Scenario: Login with empty fields
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    And I should see the login form

    When I leave the "Username" field empty
    And I leave the "Password" field empty
    And I click the "Login" button
    Then I should remain on the login form page
    And I should see an error message "Username and password cannot be empty"
    And the error message should be displayed in red

  @edge_case
  Scenario: Login with special characters in fields
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    And I should see the login form

    When I fill in the "Username" field with "&%^$#@!_user"
    And I fill in the "Password" field with "@#$%^&*123"
    And I click the "Login" button
    Then I should remain on the login form page
    And I should see an error message "Invalid username or password"
    And the error message should be displayed in red
    And the form fields should retain their entered values

  @edge_case
  Scenario: Login with valid username but incorrect password
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    And I should see the login form

    When I fill in the "Username" field with "valid_user@example.com"
    And I fill in the "Password" field with "incorrectpassword"
    And I click the "Login" button
    Then I should remain on the login form page
    And I should see an error message "Invalid username or password"
    And the error message should be displayed in red
    And the form fields should retain their entered values
```