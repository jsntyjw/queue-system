describe("Appointments Testing", () => {
    beforeEach("Appointment", () => {
        cy.request('http://localhost:3000/Appointments').as('appointment');
    })

    it("Testing Status Code", () => {
        cy.get('@appointment').should((response) => {
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })   
    })

    it("Visit Appointment Page", () => {
        cy.visit('http://localhost:3000/Appointments')
    })

    it("Run View Appointments by Service Type", () => {
        cy.get(':nth-child(3) > [data-testid="radio-button"] > [data-testid="radio-input"]').click({multiple : true})
    })

    it("Select a service from list of service Types", () => {
        cy.get('.sc-djWRfJ').click({multiple : true})
    })

    it("Select a service from list of service Types", () => {
        cy.get(':nth-child(1) > [data-testid="list-item"] > .sc-pVTFL').click({multiple : true})
    })

    it("Expand the appointment details", () => {
        cy.get('.sc-ezbkAF > .sc-leSONj > .sc-egiyK > :nth-child(2) > .sc-fFeiMQ > [data-testid="accordion-item-expand-collapse-button"] > .sgds-icon').click({multiple : true})
    })

   
})