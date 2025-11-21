const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the OrangeHRM login page', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I enter valid username {string} and password {string}', (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
});
When('I click on the login button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should be logged in successfully and redirected to the dashboard page', () => {
  cy.url().should('include', '/dashboard');
  cy.get('h6').should('contain.text', 'Dashboard');
});