const { Given, When, Then, Before } = require('@badeball/cypress-cucumber-preprocessor');



Given('I am on the employee search page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();    
  cy.get('a.oxd-main-menu-item').find('span.oxd-main-menu-item--name').contains('PIM').click();
});

When('I enter {string} in the search field', (employeeName) => {
      cy.get('input[placeholder="Type for hints..."]').eq(0) // Assuming the first 'Type for hints...' is for name
      .type(employeeName);
});

When('I click the search button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should see {string} in the search results', (employeeName) => {
    cy.get('.oxd-table-body') // Or a more specific table selector
      .should('contain', employeeName);
});