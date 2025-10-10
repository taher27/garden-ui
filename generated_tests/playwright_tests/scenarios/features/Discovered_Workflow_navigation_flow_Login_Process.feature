```gherkin
Feature: User Login Workflow Validation  
  As an authorized user  
  I want to log in to the website  
  So that I can securely access the organizational tools and data on the dashboard  

  Background: Navigate to homepage  
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"  
    Then the page URL should be "https://aahanashopeinternational2.my.salesforce.com/"  
    And the "Username" field should be visible  
    And the "Password" field should be visible  
    And the "Log In" button should be visible  

  @critical @login @e2e
  Scenario: Successful login with valid credentials  
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"  
    When I fill in the "Username" field with "test_user"  
    Then the "Username" field should contain "test_user"  

    When I fill in the "Password" field with "test_password"  
    Then the "Password" field should contain "test_password"  

    When I click the "Log In" button  
    Then I should be on the dashboard page  
    And the page URL should be "https://aahanashopeinternational2.my.salesforce.com/home"  
    And the "Welcome" banner should be visible  
    And the "User Dashboard" section should be loaded  

  @critical @login @negative
  Scenario: Login with invalid credentials  
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"  
    When I fill in the "Username" field with "invalid_user"  
    Then the "Username" field should contain "invalid_user"  

    When I fill in the "Password" field with "invalid_password"  
    Then the "Password" field should contain "invalid_password"  

    When I click the "Log In" button  
    Then I should remain on the login page  
    And the page URL should be "https://aahanashopeinternational2.my.salesforce.com/"  
    And an error message "Invalid username or password" should be displayed  

  @critical @login @edge_case
  Scenario: Clicking the login button multiple times  
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"  
    When I fill in the "Username" field with "test_user"  
    Then the "Username" field should contain "test_user"  

    When I fill in the "Password" field with "test_password"  
    Then the "Password" field should contain "test_password"  

    When I click the "Log In" button multiple times quickly  
    Then I should be on the dashboard page  
    And the page URL should be "https://aahanashopeinternational2.my.salesforce.com/home"  
    And the "Welcome" banner should be visible  
    And the "User Dashboard" section should be loaded  

  @critical @login @edge_case
  Scenario: Navigating away mid-login  
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"  
    When I fill in the "Username" field with "test_user"  
    Then the "Username" field should contain "test_user"  

    When I fill in the "Password" field with "test_password"  
    Then the "Password" field should contain "test_password"  

    When I navigate to "https://aahanashopeinternational2.my.salesforce.com/other_page"  
    Then I should be on the other page  
    And the page URL should be "https://aahanashopeinternational2.my.salesforce.com/other_page"  

    When I return to "https://aahanashopeinternational2.my.salesforce.com/"  
    Then the "Username" field should be empty  
    And the "Password" field should be empty  

  @critical @login @edge_case
  Scenario: Login process under slow network conditions  
    Given I am on the homepage "https://aahanashopeinternational2.my.salesforce.com/"  
    When I fill in the "Username" field with "test_user"  
    Then the "Username" field should contain "test_user"  

    When I fill in the "Password" field with "test_password"  
    Then the "Password" field should contain "test_password"  

    When I click the "Log In" button under slow network conditions  
    Then a "Loading spinner" should be displayed  
    And the "Log In" button should be disabled  

    Then I should be on the dashboard page after a delay  
    And the page URL should be "https://aahanashopeinternational2.my.salesforce.com/home"  
    And the "Welcome" banner should be visible  
    And the "User Dashboard" section should be loaded  
```