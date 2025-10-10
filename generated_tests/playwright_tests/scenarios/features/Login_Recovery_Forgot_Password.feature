```gherkin
Feature: Forgot Password Workflow  
  As a user, I want to reset my password if I forget it so that I can regain access to my account.  
  This feature ensures users can initiate account recovery via the forgot password option effectively.

  Background:  
    Given I am on the homepage "https://https//v18.roost.ai/"  

Scenario: Forgot Password - Initiate Recovery  
  @e2e_authentication_workflow @medium_priority  

  Given I navigate to the login page  
  Then I should see the login page with the title "Starting agent 6250..."  
  And the "Forgot Password" link should be visible  

  When I click on the "Forgot Password" link  
  Then I should be redirected to the "Forgot Password" page  
  And the page title should be "Reset Your Password"  

  When I fill in the "Email Address" field with "testuser@example.com"  
  Then the "Email Address" field should accept the input "testuser@example.com"  

  When I click the "Submit" button to initiate password recovery  
  Then I should see a confirmation message saying "Recovery email sent successfully"  
  And the "Forgot Password" page should display a link to return to the login page  

  When I click on the "Back to Login" link  
  Then I should be redirected to the login page  
  And the "Forgot Password" link should be visible again  
```