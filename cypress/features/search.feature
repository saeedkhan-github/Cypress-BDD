Feature: Search functionality

  Scenario: Search for an item
    Given I am on the search page
    When I search for "Cypress"
    Then I should see results for "Cypress"
