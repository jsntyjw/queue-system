describe("Testing", () => {
    beforeEach(" Homepage", () => {
        cy.request('http://localhost:3000/Dashboard').as('dashboard');
        
    })

    it("Testing Status Code", () => {
        cy.get('@dashboard').should((response) => {
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })   
    })

    it("Visit Dashboard Page", () => {
        cy.visit('http://localhost:3000/Dashboard')
    })

    it("Click Dropdown List", () => {
        cy.get('.sc-avest > .sgds-icon').click();
    })

    it("Navigate to Hospital View", () => {
        cy.get(':nth-child(2) > [data-testid="list-item"] > .sc-pVTFL').click();    
    })

})
