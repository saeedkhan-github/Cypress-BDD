const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the search page', () => {
  cy.visit('/search');
});

When('I search for "Cypress"', () => {
  cy.get('input[name="search"]').type('Cypress');
  cy.get('button[type="submit"]').click();
});

Then('I should see results for "Cypress"', () => {
  cy.contains('Cypress').should('be.visible');
});