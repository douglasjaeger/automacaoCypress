/// <reference types="Cypress"/>

describe('API - Teste funcional', () => {
    it('Testando retorno 200', () => {
        cy.request("GET", "https://api.restful-api.dev/objects").then((response) => {
            expect(response.status).to.eq(200)
         
        })        
    });

    // it('Testando GET', () => {
    //     cy.request
    // });

});