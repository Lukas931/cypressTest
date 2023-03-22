import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../Pages/HomePage/HomePage.spec";
beforeEach(() => {
    cy.viewport(1600, 720);
});

Given("User navigate to the Website", () => {
    cy.wait(200);
    homePage.enterURL();
});

Then("User type in input with id {string} value {string}", (selector, value) => {
    homePage.fillInputWithValue("#" + selector, value);
});

Then("User type at dashboard in {string} with placeholder {string} value {string}", (where, selector, value) => {
    cy.wait(400);
    cy.origin('https://email.seznam.cz', { args: { where, selector, value } }, ({ where, selector, value }) => {

        cy.get(where + "[placeholder='" + selector + "']").type(value);
    });
});
Then("User type at dashboard in {string} with placeholder {string} value:", (where, selector, dataTable) => {
    cy.wait(400);
    cy.origin('https://email.seznam.cz', { args: { where, selector, dataTable } }, ({ where, selector, dataTable }) => {
        dataTable.rawTable.forEach((row) => {
            cy.get(where + "[placeholder='" + selector + "']").type(row[0] + " ");
        })
    });
});

Then("User click on {string} with text {string} on {string}", (selector, value, where) => {
    cy.wait(400);
    switch (where) {
        case "dashboard":
            cy.origin('https://email.seznam.cz', { args: { selector, value } }, ({ selector, value }) => {
                cy.get(selector).contains(value).click();
            });
            break;
        case "login":
            cy.get(selector).contains(value).click();
            break;
    }
});
/*
Then("User add file in to email", () => {
    cy.origin('https://email.seznam.cz', {}, () => {
        cy.get('.editor').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.txt',
            lastModified: Date.now(),
            action: 'drag-drop'
        });
    });
});*/

Then("User is redirected to {string}", (where) => {
    cy.wait(500);
    switch (where) {
        case "dashboard":
            cy.origin('https://email.seznam.cz', { args: { homePage } }, ({ homePage }) => {
                cy.location().should((location) => {
                    expect(location.href).to.eq(homePage.dashboardPage);
                })
            });
            break;
        case "login":
            cy.location().should((location) => {
                expect(location.href).to.eq(homePage.loginPage);
            })
            break;
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});