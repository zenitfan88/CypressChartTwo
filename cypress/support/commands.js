// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';
const { expect } = require("chai");
const selector = require('../fixtures/selector.json');

Cypress.Commands.add("currentData", () => {
    let currentData = new Date();
    currentData.setHours(1,0,0,0);
    const dataNumber = String(Date.parse(currentData) / 1000);
    return cy.wrap(dataNumber)
  });

  Cypress.Commands.add("selectData", (day) => {
    let currentData = new Date();
    currentData.setHours(1,0,0,0);
    const selectDataNumber = String(Date.parse(currentData) / 1000 + 86400 * day);
    cy.get(`[${selector.dataNumber}='${selectDataNumber}']`).click();
  });

  Cypress.Commands.add("currentTime", () => {
    let currentData = new Date();
    const timeNumber = Date.parse(currentData) / 1000;
    return cy.wrap(timeNumber)
  });

Cypress.Commands.add("login", (login, password) => {
    if (login === "" && password !== "") {
      cy.get(selector.passwordField).type(password);
      cy.get(selector.loginButton).click();
    } else if (password === "" && login !== "") {
      cy.get(selector.loginField).type(login);
      cy.get(selector.loginButton).click();
    } else if (login === "" && password === "") {
      cy.get(selector.loginButton).click();
    } else {
      cy.get(selector.loginField).type(login);
      cy.get(selector.passwordField).type(password);
      cy.get(selector.loginButton).click();
    }
  });

Cypress.Commands.add("selectPlace", () => {
    const min = 1;
    let maxRow;
    let maxSpot;
    if (cy.get(selector.schemeHall).should('have.length', 10)) {
      maxRow = 10;
      maxSpot = 10;
    } else  {
      maxRow = 3;
      maxSpot = 2;
    };
    cy.waitUntil(function() {
      if (!Cypress.$(selector.selectedPlace).length) {
          const row = Math.floor(Math.random() * (maxRow - min + 1)) + min;
          const spot = Math.floor(Math.random() * (maxSpot - min + 1)) + min;
          return cy.get(`.buying-scheme__wrapper > :nth-child(${row}) > :nth-child(${spot})`).click().then(() => false);
      } else {
          return true
      }
    });
});
