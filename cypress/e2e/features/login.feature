Feature: User Login
  Login to the application: OrangeHRM as a registered user

  Scenario: Successful login with valid credentials
    Given I open the OrangeHRM login page
    When I log in as a registered user with valid credentials
        |username|password|
        |admin|admin123|
    And I click on the login button
    Then I should be logged in successfully and redirected to the dashboard page

 