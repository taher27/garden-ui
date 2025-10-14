```gherkin
Feature: Login Error Handling with Invalid Credentials  
  As a user of the Roost.ai platform  
  I want to be informed when I enter incorrect login credentials  
  So that I can retry the login process with the correct details  

  Background:  
    Given I am on the homepage "https://dev.roost.ai/login"  

  @e2e_authentication_workflow @high_priority  
  Scenario: Failed Login - Invalid Credentials  
    Given I am on the login page  
    Then the page title should be "Login - Roost.ai"  
    And the login form should be visible  
    And the login form should contain the fields:  
      | Field Name          | Field Type |  
      | Username/email      | Text       |  
      | Password            | Password   |  
      And the login form should contain a "Sign In" button  

    When I fill in the "Username/email" field with "invalid_user@example.com"  
    Then the "Username/email" field should contain the value "invalid_user@example.com"  

    When I fill in the "Password" field with "wrongpassword123"  
    Then the "Password" field should mask the value  

    When I click the "Sign In" button  
    Then I should remain on the login page  
    And the URL should be "https://dev.roost.ai/login"  
    And an error message should be displayed with the text "Invalid username or password."  

    @edge_case  
    Scenario: Failed Login - Special Characters in Credentials  
    Given I am on the login page  
    Then the page title should be "Login - Roost.ai"  
    And the login form should be visible  
    And the login form should contain the fields:  
      | Field Name          | Field Type |  
      | Username/email      | Text       |  
      | Password            | Password   |  
      And the login form should contain a "Sign In" button  

    When I fill in the "Username/email" field with "!@#$%^&*()"  
    Then the "Username/email" field should contain the value "!@#$%^&*()"  

    When I fill in the "Password" field with "!@#$%^&*()"  
    Then the "Password" field should mask the value  

    When I click the "Sign In" button  
    Then I should remain on the login page  
    And the URL should be "https://dev.roost.ai/login"  
    And an error message should be displayed with the text "Invalid username or password."  

    @edge_case  
    Scenario: Failed Login - Empty Fields  
    Given I am on the login page  
    Then the page title should be "Login - Roost.ai"  
    And the login form should be visible  
    And the login form should contain the fields:  
      | Field Name          | Field Type |  
      | Username/email      | Text       |  
      | Password            | Password   |  
      And the login form should contain a "Sign In" button  

    When I leave the "Username/email" field empty  
    Then the "Username/email" field should be empty  

    When I leave the "Password" field empty  
    Then the "Password" field should remain empty  

    When I click the "Sign In" button  
    Then I should remain on the login page  
    And the URL should be "https://dev.roost.ai/login"  
    And an error message should be displayed with the text "Username/email and password are required."  

    @edge_case  
    Scenario: Failed Login - Rapid Invalid Login Attempts  
    Given I am on the login page  
    Then the page title should be "Login - Roost.ai"  
    And the login form should be visible  
    And the login form should contain the fields:  
      | Field Name          | Field Type |  
      | Username/email      | Text       |  
      | Password            | Password   |  
      And the login form should contain a "Sign In" button  

    When I fill in the "Username/email" field with "invalid_user@example.com"  
    And I fill in the "Password" field with "wrongpassword123"  
    And I click the "Sign In" button  
    Then I should remain on the login page  
    And the URL should be "https://dev.roost.ai/login"  
    And an error message should be displayed with the text "Invalid username or password."  

    When I repeat the login attempt 5 times within 10 seconds  
    Then I should remain on the login page  
    And the URL should be "https://dev.roost.ai/login"  
    And an error message should be displayed with the text "Too many failed login attempts. Please try again later."  
```