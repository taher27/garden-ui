```gherkin
Feature: User Authentication Workflow  
  As a registered user  
  I want to log in with my valid credentials  
  So that I can access my account and authenticated features  

  Background:  
    Given I am on the homepage 'https://https//v18.roost.ai/'  

  @critical @login @authentication  
  Scenario: Successful Login - Valid Credentials Authentication  
    Given I navigate to the login page  
    Then I should be on the login page  
    And the page title should be "Starting agent 6250..."  

    When I locate the username input field  
    Then the username input field should be visible  
    And the username input field should be enabled  

    When I locate the password input field  
    Then the password input field should be visible  
    And the password input field should be enabled  
    And the password input field should mask entered characters  

    When I fill in the 'Username' field with 'testuser@example.com'  
    Then the 'Username' field should accept the input 'testuser@example.com'  

    When I fill in the 'Password' field with 'P@ssw0rd!'  
    Then the 'Password' field should accept the input 'P@ssw0rd!'  

    When I click the 'Login' button  
    Then the 'Login' button should be visible  
    And the 'Login' button should be clickable  

    When I submit the login form  
    Then I should be redirected to the authenticated dashboard  
    And the page title should be "Starting agent 6250..."  
    And the authenticated content should be visible  
```