```gherkin
Feature: User Login Authentication
  As a registered user
  I want to log in with valid credentials
  So that I can access my account and authenticated features

  Background:
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    Then the homepage should load successfully
    And the login form should be visible
    And the "Username" field should be present
    And the "Password" field should be present and masked
    And the "Log In" button should be visible and enabled

  @e2e @authentication @critical
  Scenario: Successful Login with Valid Credentials
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    When I verify the homepage loads successfully
    Then the login entry point should be visible
    And the page layout should be correct without errors

    When I click on the "Username" field
    And I fill in the "Username" field with "valid_user@example.com"
    Then the "Username" field should contain "valid_user@example.com"

    When I click on the "Password" field
    And I fill in the "Password" field with "ValidPassword123!"
    Then the "Password" field should remain masked
    And the "Log In" button should be enabled

    When I click the "Log In" button
    Then I should be redirected to the authenticated dashboard
    And the URL should contain "authenticated_dashboard"
    And the welcome message "Welcome, valid_user!" should be displayed
    And no error messages should be visible

  @e2e @authentication @edgecase
  Scenario: Verify Login under Slow Network Conditions
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    When I simulate a slow network condition
    And I click on the "Username" field
    And I fill in the "Username" field with "valid_user@example.com"
    And I click on the "Password" field
    And I fill in the "Password" field with "ValidPassword123!"
    And I click the "Log In" button
    Then I should see a loading spinner indicating the login process
    And the spinner should disappear once the authentication is successful
    And I should be redirected to the authenticated dashboard
    And the URL should contain "authenticated_dashboard"
    And the welcome message "Welcome, valid_user!" should be displayed
    And no error messages should be visible

  @e2e @authentication @edgecase
  Scenario: Verify Browser Back Button After Successful Login
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"
    When I log in with "valid_user@example.com" and "ValidPassword123!"
    Then I should be redirected to the authenticated dashboard
    When I press the browser back button
    Then I should remain on the authenticated dashboard
    And the URL should contain "authenticated_dashboard"
    And no login form should be visible
    And the welcome message "Welcome, valid_user!" should be displayed

  @e2e @authentication @edgecase
  Scenario: Verify Multiple Tabs Logging in Simultaneously
    Given I open two browser tabs with the URL "https://aahanashopeinternational2.my.salesforce.com/"
    When I log in on the first tab with "valid_user@example.com" and "ValidPassword123!"
    Then I should be redirected to the authenticated dashboard on the first tab
    And the URL of the first tab should contain "authenticated_dashboard"
    And the welcome message "Welcome, valid_user!" should be displayed on the first tab
    When I switch to the second tab
    And I refresh the second tab
    Then I should be automatically logged in on the second tab
    And the URL of the second tab should contain "authenticated_dashboard"
    And the welcome message "Welcome, valid_user!" should be displayed on the second tab
```