describe("Testing", () => {
    beforeEach(" Homepage", () => {
        cy.request('http://localhost:3000').as('homepage');
    })

    it("Testing Status Code", () => {
        cy.get('@homepage').should((response) => {
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })   
    })

    it("Navigate to Home Page", () => {
        cy.visit('http://localhost:3000');
    })

    it("Test the Appointments Navigation", () => {
        cy.get('.fVwDVw > .sc-hJZKUC > .sc-eicpiI > .sc-dkqQuH > .sc-cVAmsi > .sc-pVTFL').click({multiple: true});
    })

    it("Navigate back to Home Page", () => {
        cy.visit('http://localhost:3000');
    })

    it("Test the Dashboard Navigation", () => {
        cy.get('.chNyqY > .sc-hJZKUC > .sc-eicpiI > .sc-ewSTlh').click({multiple: true});
    })

    it("Navigate back to Home Page", () => {
        cy.visit('http://localhost:3000');
    })

    it("Test the Service Counter Navigation", () => {
        cy.get('.chNyqY > .sc-hJZKUC > .sc-eicpiI > .sc-ewSTlh').click({multiple: true});
    })

    
})

