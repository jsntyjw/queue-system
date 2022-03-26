describe("Appointments Testing", () => {
    it("Visit Appointment Page", () => {
        cy.visit('http://localhost:3000/Appointments')
    })

    it("Run View Appointments by NRIC", () => {
        cy.get(':nth-child(2) > [data-testid="radio-button"] > [data-testid="radio-input"]').click({multiple : true})
    })

    it("Input the following NRIC G1232134X", () => {
        cy.get('[data-testid="input"]').type("G1232134X")
    })

    it("Click Search Button", () => {
        cy.get('#divNRIC > [data-testid="button"]').click({multiple : true})
    })

    it("Expand the appointment details", () => {
        cy.get('#divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-fFeiMQ > [data-testid="accordion-item-expand-collapse-button"] > .sgds-icon').click({multiple : true})
    })

})