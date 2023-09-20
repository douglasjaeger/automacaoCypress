/// <reference types="Cypress"/>

describe('Teste e2e - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo compra produto', () => {
        cy.login_teste("standard_user", "secret_sauce")
        cy.get('.title').should('contain', 'Products')
        
        // Ordenação de produtos
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        
        //Validação da ordenação
        cy.get(':nth-child(1) > .inventory_item_description').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_description').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Adicionar os produtos no carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

        //Checagem da quantidade de produtos adicionados ao carrinho
        cy.get('.shopping_cart_link').should('have.text', '3')
        //Check do carrinho
        cy.get('.shopping_cart_link').click()
        cy.verificaProdutos()
        // cy.conferencia_produtos('Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt')
        // cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        // cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        // cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')
        //Chekout:
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('aaa')
        cy.get('[data-test="lastName"]').type('aaa')
        cy.get('[data-test="postalCode"]').type('aaa')
        cy.get('[data-test="continue"]').click()
        //Verificando produtos no checkout
        cy.verificaProdutos()
        // cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        // cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        // cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')
        //Checar valor total
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
        cy.get('[data-test="back-to-products"]').click()

    });
});