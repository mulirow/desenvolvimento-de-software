/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        login(email, pw): Chainable<any>
    }
}