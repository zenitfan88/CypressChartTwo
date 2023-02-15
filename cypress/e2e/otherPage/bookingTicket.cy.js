const admin = require('../../fixtures/login.json');
const selector = require('../../fixtures/selector.json');

describe ('booking ticket', () => {

    it ('succesfeul booking ticket', () => {
        
        cy.visit("http://qamid.tmweb.ru/admin");
        cy.login(admin.login, admin.password);
        
        cy.get(selector.nameMovie).invoke('text').then((text) => {
            const film = text;
            cy.visit("http://qamid.tmweb.ru/client/index.php");
            cy.selectData(3);
            cy.contains(selector.movieField, film).find(selector.timeSeans).eq(0).click();
            cy.selectPlace();
            cy.selectPlace();
            cy.get(selector.reserveButton).click();
            cy.contains(selector.codeButton).click();
            cy.get(selector.nameFilmCheck).should('have.text', film)
        });
        cy.get(selector.qrCode).should('be.visible');  
    });

});