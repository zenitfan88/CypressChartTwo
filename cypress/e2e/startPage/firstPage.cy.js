const selector = require('../../fixtures/selector.json');

describe ('test first page', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('page name is visible', () => {
        cy.get(selector.titlePage).should('have.text',"Идёмвкино");
    });

    it('data first day is correct', () => {
        cy.currentData().then((value) => {
            cy.get(selector.dataTodayField)
                .invoke('attr', selector.dataNumber)
                .should('eq', value);
        });
    });

    it('time is blocked', () => {
        cy.currentTime().then((value) => {
            cy.get(selector.timeSeans).each((el) => {
                cy.wrap(el).invoke('attr', selector.timeSeansNumber)
                .then(parseFloat).should('be.gt', value);
            });
        });
    });

    
    it('time not blocked', () => {
        cy.currentTime().then((value) => {
        cy.get(selector.timeBlocked).each((el) => {
            cy.wrap(el).invoke('attr', selector.timeSeansNumber)
            .then(parseFloat).should('be.lt', value);
            });
        });
    });


});