const admin = require('../fixtures/login.json');
const selector = require('../fixtures/selector.json');

describe ('test authorization admin', () => {

    beforeEach(() => {
        cy.visit("http://qamid.tmweb.ru/admin");
    })

    it('sucesful authorization', () => {
        cy.login(admin.login, admin.password);
        cy.contains('Управление залами').should("be.visible");
    });

    it('null password', () => {
        cy.login(admin.login, admin.nullPassword);
        cy.get(selector.passwordField)
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it('null login', () => {
        cy.login(admin.nullLogin, admin.password);
        cy.get(selector.loginField)
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it('null login and password', () => {
        cy.login(admin.nullLogin, admin.nullPassword);
        cy.get(selector.loginField)
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it('incorrect login', () => {
        cy.login(admin.incorrectLogin, admin.password);
        cy.contains('Ошибка авторизации').should("be.visible");
    });

    it('incorrect password', () => {
        cy.login(admin.login, admin.incorrectPassword);
        cy.contains('Ошибка авторизации').should("be.visible");
    });


});