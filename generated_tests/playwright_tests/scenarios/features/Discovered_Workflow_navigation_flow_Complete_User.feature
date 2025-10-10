```gherkin
Feature: Website Navigation Workflow Verification
  As a general user,
  I want to access and navigate the website's homepage,
  So that I can explore the website's content and features.

  Background:
    Given I am on the homepage "https://https//v18.roost.ai/"
    And the homepage is accessible and fully loaded

  @navigation_flow @homepage @medium_priority
  Scenario: Verify homepage navigation and critical elements presence
    Given I am on the homepage "https://https//v18.roost.ai/"
    Then I should see the page title "Roost.ai" displayed
    And the URL should be "https://https//v18.roost.ai/"
    And the main navigation menu should be visible
    And the hero section with the text "Welcome to Roost.ai" should be present
    And the footer section containing "Contact Us" should be displayed

    When I click on the "Features" link in the navigation menu
    Then I should be on the "Features" page
    And the URL should be "https://https//v18.roost.ai/features"
    And the page title should be "Features - Roost.ai"
    And a section titled "Core Features" should be visible

    When I click on the "Pricing" link in the navigation menu
    Then I should be on the "Pricing" page
    And the URL should be "https://https//v18.roost.ai/pricing"
    And the page title should be "Pricing - Roost.ai"
    And a pricing table should be displayed

    When I click on the "Contact Us" link in the footer
    Then I should be on the "Contact Us" page
    And the URL should be "https://https//v18.roost.ai/contact"
    And the page title should be "Contact Us - Roost.ai"
    And the contact form should be visible

  @navigation_flow @edge_cases @homepage_loading
  Scenario: Handle slow homepage load
    Given I am on the homepage "https://https//v18.roost.ai/"
    When the homepage takes longer than 10 seconds to load
    Then I should see a loading indicator displayed
    And the loading indicator should disappear once the homepage is fully loaded
    And all critical elements of the homepage should be visible

  @navigation_flow @responsive @homepage_responsiveness
  Scenario: Validate homepage responsiveness on different screen sizes
    Given I am on the homepage "https://https//v18.roost.ai/"
    When I resize the browser to a width of 320px and a height of 568px
    Then the navigation menu should collapse into a hamburger menu
    And the hero section should resize to fit the screen
    And the footer content should stack vertically

    When I resize the browser to a width of 1920px and a height of 1080px
    Then the navigation menu should be fully expanded
    And the hero section should display in full width
    And the footer content should display horizontally

  @navigation_flow @query_parameter @invalid_url
  Scenario: Navigate to homepage with invalid query parameter
    Given I navigate to "https://https//v18.roost.ai/?invalid_param=test"
    Then I should still be redirected to the homepage "https://https//v18.roost.ai/"
    And I should see an error message "Invalid parameter detected" displayed
    And all critical elements of the homepage should be visible
```