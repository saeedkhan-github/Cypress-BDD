Feature: Search functionality

  Scenario: Search for an employee by name
    Given I am on the employee search page
    When I enter "John Doe" in the search field
    And I click the search button
    Then I should see "John Doe" in the search results
  
