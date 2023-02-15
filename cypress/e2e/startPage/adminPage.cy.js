const selector = require('../../fixtures/selector.json');

describe ('test admin page', () => {

    beforeEach(() => {
        cy.visit("http://qamid.tmweb.ru/admin");
    })

    it('login button is visible', () => {
        cy.get(selector.loginButton).should('be.visible');
        cy.get(selector.loginButton).should('have.value', 'Авторизоваться');
    });

})