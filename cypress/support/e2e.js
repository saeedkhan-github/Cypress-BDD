import '@shelex/cypress-allure-plugin';

// This file is required by Cypress. You can add global hooks or custom commands here if needed.

Cypress.Commands.add('loginByAPI', (username="Admin", password="admin123") => {
  cy.request({
    method: 'POST',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
    body: {
      username,
      password
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
  const cookies = response.headers['set-cookie'];
    if (cookies) {
      cookies.forEach(cookieStr => {
        const cookieName = cookieStr.split('=')[0];
        const cookieValue = cookieStr.split(';')[0].split('=')[1];
        cy.setCookie(cookieName, cookieValue);
      });
    }
  });
});
