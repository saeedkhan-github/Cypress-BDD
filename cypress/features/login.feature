Feature: User Login
  Login to the application: OrangeHRM as a registered user

  Scenario: Successful login with valid credentials
    Given I open the OrangeHRM login page
    When I enter valid username "Admin" and password "admin123"
    And I click on the login button
    Then I should be logged in successfully and redirected to the dashboard page

 