describe("Testing", () => {

    it("Visit Service Counter Page", () => {
        cy.visit('http://localhost:3000/ServiceCounter')
    })

    it("Assert that the selected agency is HPB", () => {
        cy.get('.sgds-container > :nth-child(7)').should('have.text', 'HPB,');
    })

    it("Assert that the selected service is communityHealth", () => {
        cy.get('.sgds-container > :nth-child(8)').should('have.text', 'communityHealth');
    })

    it("Click on the next service which is workplaceHealth", () => {
        cy.get('#divHPBService > .sc-cLpAjG > .sc-gslxeA > [data-testid="selector"] > .sc-avest > .sgds-icon').click({ force: true });
        cy.get('#divHPBService > .sc-cLpAjG > .sc-gslxeA > [data-testid="dropdown-container"] > [data-testid="dropdown-list"] > :nth-child(2) > [data-testid="list-item"] > .sc-pVTFL').click();
    })

    it("Assert that the selected service is workplaceHealth", () => {
        cy.get('.sgds-container > :nth-child(8)').should('have.text', 'workplaceHealth');
    })

    
})
