/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click();

      cy.wait(1000);

      cy.url().should('not.include', '/login');

      cy.get('nav').contains('Logout').should('be.visible');
    },
    {
      validate() {
        cy.visit('/editor');
        cy.url().should('include', '/editor');
      }
    }
    );
  });