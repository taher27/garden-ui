```gherkin
Feature: User Login to Salesforce Dashboard
  As a sales representative
  I want to log into my CRM dashboard
  So that I can manage customer data and sales workflows

  Background:
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"

  @e2e @login @critical
  Scenario: Successful login to Salesforce dashboard
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    Then the page should load within 3 seconds
    And the login form should be visible with "Username" and "Password" fields
    And the page title should be "Salesforce"
    And the branding should match the company logo and color scheme
    And there should be no console errors

    When I fill in the "Username" field with "testuser@example.com"
    Then the "Username" field should accept input
    And there should be no validation errors for the "Username" field

    When I fill in the "Password" field with "SecurePassword123"
    Then the "Password" field should accept input
    And there should be no validation errors for the "Password" field

    When I click the "Login" button
    Then I should be redirected to the dashboard page
    And the URL should contain "/dashboard"
    And the dashboard should display user-specific data such as "Welcome, Test User"
    And the navigation menu should be visible and functional
    And there should be no unexpected errors on the dashboard

  @e2e @login @negative
  Scenario: Login attempt with blank username
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    When I leave the "Username" field blank
    And I fill in the "Password" field with "SecurePassword123"
    And I click the "Login" button
    Then an error message "Please enter your username" should be displayed
    And I should remain on the login page
    And the URL should remain "https://aahanashopeinternational2.my.salesforce.com/"

  @e2e @login @negative
  Scenario: Login attempt with blank password
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    When I fill in the "Username" field with "testuser@example.com"
    And I leave the "Password" field blank
    And I click the "Login" button
    Then an error message "Please enter your password" should be displayed
    And I should remain on the login page
    And the URL should remain "https://aahanashopeinternational2.my.salesforce.com/"

  @e2e @login @negative
  Scenario: Login attempt with incorrect credentials
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    When I fill in the "Username" field with "invaliduser@example.com"
    And I fill in the "Password" field with "InvalidPassword123"
    And I click the "Login" button
    Then an error message "Invalid username or password" should be displayed
    And I should remain on the login page
    And the URL should remain "https://aahanashopeinternational2.my.salesforce.com/"

  @e2e @login @performance
  Scenario: Multiple rapid login attempts
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    When I fill in the "Username" field with "testuser@example.com"
    And I fill in the "Password" field with "SecurePassword123"
    And I rapidly click the "Login" button 5 times
    Then the system should process only one login request
    And I should be redirected to the dashboard page
    And the URL should contain "/dashboard"
    And the dashboard should display user-specific data such as "Welcome, Test User"
```