const admin = require('../fixtures/login.json');
const selector = require('../fixtures/selector.json');

describe ('test autorizieren admin', () => {

    beforeEach(() => {
        cy.visit("http://qamid.tmweb.ru/admin");
    })

    it('sucesful login admin', () => {
        cy.login(admin.login, admin.password);
        cy.contains('Управление залами').should("be.visible");
    });

    it('null password admin', () => {
        cy.login(admin.login, admin.nullPassword);
        cy.get(selector.passwordField)
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it('null login admin', () => {
        cy.login(admin.nullLogin, admin.password);
        cy.get(selector.loginField)
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it('null login and password admin', () => {
        cy.login(admin.nullLogin, admin.nullPassword);
        cy.get(selector.loginField)
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it('incorrect login admin', () => {
        cy.login(admin.incorrectLogin, admin.password);
        cy.contains('Ошибка авторизации').should("be.visible");
    });

    it('incorrect password admin', () => {
        cy.login(admin.login, admin.incorrectPassword);
        cy.contains('Ошибка авторизации').should("be.visible");
    });


});