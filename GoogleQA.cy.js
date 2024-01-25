/// <reference types="cypress" />

describe('log in', () => {
    it("successful login", () => {
        cy.visit("https://www.google.com/?hl=es")
        cy.get('#APjFqb').click
        cy.wait(1000)        
    });
});