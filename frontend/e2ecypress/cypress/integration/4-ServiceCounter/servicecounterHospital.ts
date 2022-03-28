describe("Testing", () => {

    it("Visit Service Counter Page", () => {
        cy.visit('http://localhost:3000/ServiceCounter')
    })

    it("Click on the agency and select Hospital", () => {
        cy.get('#divAgency > .sc-cLpAjG > .sc-gslxeA > [data-testid="selector"] > .sc-avest > .sgds-icon').click({ force: true });
        cy.get('#divAgency > .sc-cLpAjG > .sc-gslxeA > [data-testid="dropdown-container"] > [data-testid="dropdown-list"] > :nth-child(2) > [data-testid="list-item"]').click();
    })

    it("Assert that the selected agency is Hospital", () => {
        cy.get('.sgds-container > :nth-child(7)').should('have.text', 'Hospital,');
    })

    it("Assert that the selected service is Doctor", () => {
        cy.get('.sgds-container > :nth-child(8)').should('have.text', 'Doctor');
    })

    it("Click on the next service which is Payment", () => {
        cy.get('#divHospitalService > .sc-cLpAjG > .sc-gslxeA > [data-testid="selector"] > .sc-avest > .sgds-icon').click({ force: true });
        cy.get('#divHospitalService > .sc-cLpAjG > .sc-gslxeA > [data-testid="dropdown-container"] > [data-testid="dropdown-list"] > :nth-child(2) > [data-testid="list-item"]').click();
    })

    it("Assert that the selected service is Payment", () => {
        cy.get('.sgds-container > :nth-child(8)').should('have.text', 'Payment');
    })
   
    it("Click on the next service which is Pharmacy", () => {
        cy.get('#divHospitalService > .sc-cLpAjG > .sc-gslxeA > [data-testid="selector"] > .sc-avest > .sgds-icon').click({ force: true });
        cy.get('#divHospitalService > .sc-cLpAjG > .sc-gslxeA > [data-testid="dropdown-container"] > [data-testid="dropdown-list"] > :nth-child(3) > [data-testid="list-item"]').click();
    })

    it("Assert that the selected service is Pharmacy", () => {
        cy.get('.sgds-container > :nth-child(8)').should('have.text', 'Pharmacy');
    })

    it("Click on the next service which is Missed Queue", () => {
        cy.get('#divHospitalService > .sc-cLpAjG > .sc-gslxeA > [data-testid="selector"] > .sc-avest > .sgds-icon').click({ force: true });
        cy.get('#divHospitalService > .sc-cLpAjG > .sc-gslxeA > [data-testid="dropdown-container"] > [data-testid="dropdown-list"] > :nth-child(4) > [data-testid="list-item"]').click();
    })

    it("Assert that the selected service is Missed Queue", () => {
        cy.get('.sgds-container > :nth-child(8)').should('have.text', 'Missed Queue');
    })
    
})
