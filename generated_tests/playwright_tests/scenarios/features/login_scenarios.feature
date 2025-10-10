```gherkin
Feature: User Authentication - Login Workflow

  # This feature verifies the login workflow for the website 'https://https//v18.roost.ai/login'
  # It includes scenarios for successful login, invalid login attempts, and password recovery.
  # The feature ensures comprehensive validation of the user journey and authentication states.

  Background:
    Given I am on the homepage 'https://https//v18.roost.ai/login'

  @critical @authentication @valid_credentials
  Scenario: Successful Login - Valid Credentials Authentication
    # This scenario tests the full login workflow with valid credentials.

    Given I am on the homepage 'https://https//v18.roost.ai/login'
    Then I should see the homepage loads successfully
    And I should see the login access options

    When I locate the login access point
    Then I should see the login option is visible and accessible
    And I should be able to access the authentication interface

    When I click on the login access point
      # Selector: page.get_by_role("link", name="Login")
      # Confidence: 0.90
    Then I should navigate to the authentication interface
    And the URL should contain '/login'
    And I should see the complete login form with username and password fields

    When I fill in the username field with valid credentials
      # Selector: page.locator("#username")
      # Test Data: 'valid_user@example.com'
      # Confidence: 0.85
    And I fill in the password field with valid credentials
      # Selector: page.locator("#password")
      # Test Data: 'ValidPassword123!'
      # Confidence: 0.85
    And I click the "Login" button
      # Selector: page.get_by_role("button", name="Login")
      # Confidence: 0.90
    Then I should be successfully authenticated
    And I should be redirected to the authenticated state
    And the page title should be 'Starting agent 6250...'
    And I should see authentication success indicators

  @high @authentication @invalid_credentials
  Scenario: Failed Login - Invalid Credentials
    # This scenario tests login functionality with invalid credentials and verifies error handling.

    Given I am on the homepage 'https://https//v18.roost.ai/login'
    Then I should see the homepage loads successfully
    And I should see the login access options

    When I locate the login access point
    Then I should see the login option is visible and accessible
    And I should be able to access the authentication interface

    When I click on the login access point
      # Selector: page.get_by_role("link", name="Login")
      # Confidence: 0.90
    Then I should navigate to the authentication interface
    And the URL should contain '/login'
    And I should see the complete login form with username and password fields

    When I fill in the username field with invalid credentials
      # Selector: page.locator("#username")
      # Test Data: 'invalid_user@example.com'
      # Confidence: 0.85
    And I fill in the password field with invalid credentials
      # Selector: page.locator("#password")
      # Test Data: 'WrongPassword!'
      # Confidence: 0.85
    And I click the "Login" button
      # Selector: page.get_by_role("button", name="Login")
      # Confidence: 0.90
    Then I should see an error message indicating invalid credentials
    And the error message text should be 'Invalid credentials'
    And I should remain on the login page

  @medium @authentication @password_recovery
  Scenario: Login Recovery - Forgot Password
    # This scenario tests the forgot password workflow to ensure users can initiate account recovery.

    Given I am on the homepage 'https://https//v18.roost.ai/login'
    Then I should see the homepage loads successfully
    And I should see the login access options

    When I locate the login access point
    Then I should see the login option is visible and accessible
    And I should be able to access the authentication interface

    When I click on the login access point
      # Selector: page.get_by_role("link", name="Login")
      # Confidence: 0.90
    Then I should navigate to the authentication interface
    And the URL should contain '/login'
    And I should see the complete login form with username and password fields
    And I should see the "Forgot Password" link

    When I click the "Forgot Password" link
      # Selector: page.get_by_role("link", name="Forgot Password")
      # Confidence: 0.90
    Then I should navigate to the password recovery page
    And the URL should contain '/forgot-password'
    And I should see the recovery form with an email input field

    When I fill in the email input field with my recovery email
      # Selector: page.locator("#recovery-email")
      # Test Data: 'valid_user@example.com'
      # Confidence: 0.85
    And I click the "Submit" button
      # Selector: page.get_by_role("button", name="Submit")
      # Confidence: 0.90
    Then I should see a confirmation message indicating the recovery email has been sent
    And the confirmation message text should be 'Recovery email sent'
    And I should remain on the recovery confirmation page
```

### Explanation of Design Decisions:
1. **Atomic Steps**: Each step represents a single action or verification, ensuring clarity and independent verifiability.
2. **No Assumptions**: The steps explicitly outline every user interaction and UI validation, leaving no gaps.
3. **Homepage Initialization**: All scenarios start from the homepage for clean test execution.
4. **Precise Element Targeting**: Exact selectors and confidence scores are included to align with real automation requirements.
5. **Navigation Tracking**: URL checks and page title validations ensure proper state transitions are verified.
6. **Granular Form Interactions**: Each form field interaction is broken down into individual steps with specific test data.
7. **Independent Scenarios**: Each scenario is self-contained, allowing standalone execution without dependencies.

### Tags and Priorities:
Scenarios are tagged with `@critical`, `@high`, and `@medium` based on their priority and significance. These tags enable efficient test categorization and execution.