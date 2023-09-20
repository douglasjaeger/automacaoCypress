/// <reference types="Cypress"/>

// const { it } = require("mocha");

describe('Teste funcional de login', () => {
    it('Realizar o login com sucesso', () => {
        cy.login_teste("standard_user", "secret_sauce")
        cy.get('.title').should('contain', 'Products')  
                  
    });

    it('Validar login incorreto', () => {
        cy.login_teste("standard_user1", "secret_sauce")
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
             
    });

    it('Validar senha incorreta', () => {
        cy.login_teste("standard_user", "secret_sauce1")        
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')     
    });
      
    
});