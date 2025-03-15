describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the Navbar', () => {
        cy.get('nav').should('be.visible');
        cy.get('nav').contains('ArachWrite').should('be.visible');
    });

    it('should display the project button and navigate to /editor on click', () => {
        cy.get('button').contains('projeto').should('be.visible').click();
        cy.url().should('include', '/editor');
    });
});