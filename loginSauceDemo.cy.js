/// <reference types="cypress" />

const validUser = {
    User: 'standard_user',
    Password: 'secret_sauce'
}

describe('log in', () => {
    it("successful login", () => {
        cy.visit("https://saucedemo.com/")
        cy.get('[data-test="username"]').type(validUser.User);
        cy.get('[data-test="password"]').type(validUser.Password);

        cy.get('[data-test="login-button"]').click();
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        //PASO 2
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.wait(2000);
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
        cy.get('.shopping_cart_link').click();
        cy.wait(2000);
        cy.get('cart_item_label').should('have.text', 'Sauce Labs Backpack');
            })
            });
        //PASO 3
        /*
        cy.get('.shopping_cart_link').click()
        cy.wait(2000);
        cy.get('cart_item_label').should('have.text', 'Sauce Labs Backpack')
        })
        */
