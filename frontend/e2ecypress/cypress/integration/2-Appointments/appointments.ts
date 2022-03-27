describe("Appointments Testing", () => {

    it("Visit Appointment Page", () => {
        cy.visit('http://localhost:3000/Appointments')
    })

    it("Expand the appointment details", () => {
        cy.get('.sc-ezbkAF > .sc-leSONj > .sc-egiyK > :nth-child(2) > .sc-fFeiMQ > [data-testid="accordion-item-expand-collapse-button"]').click({multiple : true})
    })

})