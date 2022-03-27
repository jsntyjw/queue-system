describe("Appointments Testing", () => {
    it("Visit Appointment Page", () => {
        cy.visit('http://localhost:3000/Appointments')
    })

    it("Run View Appointments by NRIC", () => {
        cy.get('#hpbView > .sc-hUplSX > :nth-child(2) > [data-testid="radio-button"]').click({multiple : true});
    })

    it("Input the following NRIC G1255555X", () => {
        cy.get('#hpbView > #divNRIC > .sc-fIosxK > [data-testid="input"]').type("G1255555X");
    })

    it("Click Search Button", () => {
        cy.get('#hpbView > #divNRIC > [data-testid="button"] > span').click({multiple : true});
    })

    it("Expand the appointment details", () => {
        cy.get('#divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-fFeiMQ > [data-testid="accordion-item-expand-collapse-button"] > .sgds-icon').click({multiple : true, force:true});
    })

    it("Assert it is Nancy Goh", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-fFeiMQ > [data-testid="accordion-item-title"]').should('have.text', 'Nancy Goh');
    })

    it("Assert it is the correct 'Citizen Name :  user1' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(1)').should('have.text', 'Citizen Name :  Nancy Goh');
    })
    
    it("Assert it is the correct 'Citizen Number:  91238888' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(2)').should('have.text', 'Citizen Number:  91238888');
    })

    it("Assert it is the correct 'Citizen Email: test@gmail.com' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(3)').should('have.text', 'Citizen Email:  nancy@gmail.com');
    })

    it("Assert it is the correct 'Service start date: 2022-03-30' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(4)').should('have.text', 'Service start date:  2022-03-30');
    })

    it("Assert it is the correct 'Service start time' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(5)').should('have.text', 'Service start time:  10:00 AM');
    })

    it("Assert it is the correct 'Service Name: ' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(6)').should('have.text', 'Service Name:  Consultation');
    })

    it("Assert it is the correct 'Service Provider Location: ' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(7)').should('have.text', 'Service Provider Location:  Tampines');
    })

    it("Assert it is the correct 'Service Status: ' ", () => {
        cy.get('#hpbView > #divAppointments > #divCitizenAppointments > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(8)').should('have.text', 'Service Status:  communityHealth');
    })
})
