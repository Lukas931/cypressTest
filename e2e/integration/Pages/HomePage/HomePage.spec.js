class HomePage {
    constructor(loginPage, dashboard) {
        this.dashboardPage = dashboard;
        this.loginPage = loginPage;
    }
    enterURL() {
        cy.visit(this.loginPage);
    }
    getLoginPage() {
        return this.loginPage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }

    checkTitle(selector, value) {
        cy.get(selector, { timeout: 4000 }).should('contain', value);
    }
    checkIfEmpty(selector) {
        cy.get(selector).should('have.value', '');
    }
    fillInputWithValue(selector, value) {
        cy.get(selector).type(value);
    }
    click(selector, value) {
        cy.get(selector).contains(value).click();
    }
}
const homepage = new HomePage("https://login.szn.cz/", "https://email.seznam.cz/");
export default homepage;