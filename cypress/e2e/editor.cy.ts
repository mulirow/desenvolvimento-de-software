// cypress/e2e/editor.cy.ts
describe('Editor Page', () => {
  beforeEach(() => {
    cy.login('test@example.com', 'testpassword');
    cy.visit('/editor');
  });

  it('should display the Navbar', () => {
    cy.get('nav').should('be.visible');
    cy.get('nav').contains('ArachWrite').should('be.visible');
  });

  it('should allow typing in the editor', () => {
    // Liveblocks needs some time to load when the page is first visited
    cy.wait(1000);
    cy.get('.ContentEditable').clear();
    cy.get('.ContentEditable').type('This is a test script.');

    cy.get('.ContentEditable').should('contain', 'This is a test script.');
  });

  it('should call analyzeScript and display the response', () => {
    cy.intercept('POST', '/api/googleai', { result: 'Mock analysis response' }).as('analyzeScript');

    cy.wait(1000);
    cy.get('.ContentEditable').clear();
    cy.get('.ContentEditable').type('Test script for analysis.');

    cy.contains('Analisar Roteiro').click();
    cy.wait('@analyzeScript');
    cy.contains('Opinião sobre o Roteiro').should('be.visible');
    cy.contains('Mock analysis response').should('be.visible');
  });

  it('should allow prompt on GoogleAI API Demo', () => {
    cy.intercept('POST', '/api/googleai', { result: 'Mock prompt response' }).as('invokeLLM');

    cy.get('textarea[placeholder="Enter your prompt here"]').type('Test prompt');
    cy.contains('Submit').click();
    cy.wait('@invokeLLM');
    cy.contains('Response').should('be.visible');
    cy.contains('Mock prompt response').should('be.visible');
  });
});