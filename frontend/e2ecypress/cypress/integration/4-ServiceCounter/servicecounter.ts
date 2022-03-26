describe("Testing", () => {
    beforeEach(" Homepage", () => {
        cy.request('http://localhost:3000/ServiceCounter').as('servicecounter');
        
    })

    it("Testing Status Code", () => {
        cy.get('@servicecounter').should((response) => {
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })   
    })

    it("Visit Dashboard Page", () => {
        cy.visit('http://localhost:3000/ServiceCounter')
    })

    it("Click on the next patient", () => {
        cy.get('#divButtonNextPatient > [data-testid="button"] > span').click({ force: true });
    })

})
